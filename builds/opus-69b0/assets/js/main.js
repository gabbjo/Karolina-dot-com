/* ═══════════════════════════════════════════════════════════════════════════
   Karolina Bengtsson — interaction layer
   No dependencies. Every behaviour degrades to a working page without it.
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };


  /* ── Photography: fade each frame in once it has actually decoded ─────── */

  $$('[data-img]').forEach(function (img) {
    if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); return; }
    img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
  });


  /* ── Reveals ──────────────────────────────────────────────────────────── */

  var revealables = $$('[data-reveal]');

  // Stagger siblings that share a parent, so lists arrive as a sequence.
  var seen = new Map();
  revealables.forEach(function (el) {
    var parent = el.parentNode;
    var n = seen.get(parent) || 0;
    seen.set(parent, n + 1);
    if (n) el.style.setProperty('--i', String(Math.min(n, 6)));
  });

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  }


  /* ── Masthead: hairline appears once the page has moved ───────────────── */

  var masthead = $('[data-masthead]');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      masthead.classList.toggle('is-stuck', window.scrollY > 24);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ── Scrollspy ────────────────────────────────────────────────────────── */

  var navLinks = $$('[data-navlist] a');
  var sections = $$('[data-section]');

  if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
    var visible = new Set();

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });

      var current = null;
      for (var i = 0; i < sections.length; i++) {
        if (visible.has(sections[i].id)) { current = sections[i].id; break; }
      }

      navLinks.forEach(function (link) {
        var match = current && link.getAttribute('href') === '#' + current;
        if (match) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (section) { spy.observe(section); });
  }


  /* ── Compact index ────────────────────────────────────────────────────── */

  var indexToggle = $('[data-index-toggle]');
  var indexSheet  = $('[data-index-sheet]');
  var indexLabel  = $('[data-index-label]');

  if (indexToggle && indexSheet) {
    var closeIndex = function (returnFocus) {
      indexToggle.setAttribute('aria-expanded', 'false');
      indexSheet.classList.remove('is-open');
      indexLabel.textContent = 'Index';
      document.body.style.removeProperty('overflow');
      window.setTimeout(function () { indexSheet.hidden = true; }, reduced.matches ? 0 : 400);
      if (returnFocus) indexToggle.focus();
    };

    indexToggle.addEventListener('click', function () {
      var open = indexToggle.getAttribute('aria-expanded') === 'true';
      if (open) { closeIndex(false); return; }

      indexSheet.hidden = false;
      indexToggle.setAttribute('aria-expanded', 'true');
      indexLabel.textContent = 'Close';
      document.body.style.overflow = 'hidden';
      window.requestAnimationFrame(function () { indexSheet.classList.add('is-open'); });
    });

    $$('[data-index-link]').forEach(function (link) {
      link.addEventListener('click', function () { closeIndex(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && indexToggle.getAttribute('aria-expanded') === 'true') {
        closeIndex(true);
      }
    });

    // A widened viewport makes the sheet redundant.
    window.matchMedia('(min-width: 60em)').addEventListener('change', function (event) {
      if (event.matches && indexToggle.getAttribute('aria-expanded') === 'true') closeIndex(false);
    });
  }


  /* ── Calendar filter ──────────────────────────────────────────────────── */

  var calendar = $('[data-calendar]');

  if (calendar) {
    var groups = $$('tbody[data-year]', calendar);
    var empty  = $('[data-calendar-empty]');

    $$('[data-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        var year = button.getAttribute('data-filter');

        $$('[data-filter]').forEach(function (other) {
          var active = other === button;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        });

        var shown = 0;
        groups.forEach(function (group) {
          var match = year === 'all' || group.getAttribute('data-year') === year;
          group.hidden = !match;
          if (match) shown++;
        });

        if (empty) empty.hidden = shown > 0;
      });
    });
  }


  /* ── Transport: one shared audio player for the discography ───────────── */

  var transport = $('[data-transport]');

  if (transport) {
    var audio     = $('[data-audio]', transport);
    var toggle    = $('[data-transport-toggle]', transport);
    var closeBtn  = $('[data-transport-close]', transport);
    var seek      = $('[data-transport-seek]', transport);
    var fill      = $('[data-transport-fill]', transport);
    var head      = $('[data-transport-head]', transport);
    var titleEl   = $('[data-transport-title]', transport);
    var subEl     = $('[data-transport-sub]', transport);
    var elapsedEl = $('[data-transport-elapsed]', transport);
    var durationEl = $('[data-transport-duration]', transport);
    var statusEl  = $('[data-transport-status]', transport);

    var activeButton = null;
    var scrubbing = false;

    function clock(seconds) {
      if (!isFinite(seconds) || seconds < 0) seconds = 0;
      var m = Math.floor(seconds / 60);
      var s = Math.floor(seconds % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function spoken(seconds) {
      var m = Math.floor(seconds / 60);
      var s = Math.floor(seconds % 60);
      return (m ? m + ' minute' + (m === 1 ? '' : 's') + ' ' : '') + s + ' second' + (s === 1 ? '' : 's');
    }

    function paint() {
      var duration = audio.duration;
      var ratio = duration && isFinite(duration) ? audio.currentTime / duration : 0;
      var percent = Math.max(0, Math.min(1, ratio)) * 100;

      fill.style.width = percent + '%';
      head.style.left = percent + '%';
      elapsedEl.textContent = clock(audio.currentTime);
      durationEl.textContent = clock(duration);
      seek.setAttribute('aria-valuenow', String(Math.round(percent)));
      seek.setAttribute('aria-valuetext', spoken(audio.currentTime) + ' of ' + spoken(duration || 0));
    }

    function setPlayingState(playing) {
      transport.classList.toggle('is-paused', !playing);
      toggle.setAttribute('aria-label', playing ? 'Pause excerpt' : 'Play excerpt');
      if (activeButton) {
        activeButton.classList.toggle('is-playing', playing);
        activeButton.setAttribute('aria-label',
          (playing ? 'Pause' : 'Play') + ' excerpt: ' + activeButton.getAttribute('data-title'));
      }
      statusEl.textContent = playing
        ? 'Playing ' + (activeButton ? activeButton.getAttribute('data-title') : '')
        : 'Paused';
    }

    function openTransport() {
      if (!transport.hidden) return;
      transport.hidden = false;
      document.body.classList.add('has-transport');
      window.requestAnimationFrame(function () { transport.classList.add('is-open'); });
    }

    function load(button) {
      if (activeButton && activeButton !== button) activeButton.classList.remove('is-playing');
      activeButton = button;

      audio.src = button.getAttribute('data-track');
      titleEl.textContent = button.getAttribute('data-title');
      subEl.textContent = button.getAttribute('data-sub');
      paint();
      openTransport();

      var attempt = audio.play();
      if (attempt && attempt.catch) {
        attempt.catch(function () {
          setPlayingState(false);
          statusEl.textContent = 'Playback unavailable';
        });
      }
    }

    $$('[data-track]').forEach(function (button) {
      button.setAttribute('aria-label', 'Play excerpt: ' + button.getAttribute('data-title'));
      button.addEventListener('click', function () {
        if (activeButton === button) {
          if (audio.paused) audio.play(); else audio.pause();
          return;
        }
        load(button);
      });
    });

    toggle.addEventListener('click', function () {
      if (!activeButton) return;
      if (audio.paused) audio.play(); else audio.pause();
    });

    closeBtn.addEventListener('click', function () {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      transport.classList.remove('is-open');
      document.body.classList.remove('has-transport');
      if (activeButton) {
        activeButton.classList.remove('is-playing');
        activeButton.focus();
        activeButton = null;
      }
      window.setTimeout(function () { transport.hidden = true; }, reduced.matches ? 0 : 700);
    });

    audio.addEventListener('play', function () { setPlayingState(true); });
    audio.addEventListener('pause', function () { setPlayingState(false); });
    audio.addEventListener('ended', function () {
      setPlayingState(false);
      audio.currentTime = 0;
      paint();
    });
    audio.addEventListener('loadedmetadata', paint);
    audio.addEventListener('timeupdate', function () { if (!scrubbing) paint(); });

    /* Seeking — pointer */
    function seekFromPointer(event) {
      var box = seek.getBoundingClientRect();
      var ratio = (event.clientX - box.left) / box.width;
      ratio = Math.max(0, Math.min(1, ratio));
      if (audio.duration && isFinite(audio.duration)) {
        audio.currentTime = ratio * audio.duration;
        paint();
      }
    }

    seek.addEventListener('pointerdown', function (event) {
      scrubbing = true;
      seek.setPointerCapture(event.pointerId);
      seekFromPointer(event);
    });
    seek.addEventListener('pointermove', function (event) {
      if (scrubbing) seekFromPointer(event);
    });
    seek.addEventListener('pointerup', function (event) {
      scrubbing = false;
      if (seek.hasPointerCapture(event.pointerId)) seek.releasePointerCapture(event.pointerId);
    });
    seek.addEventListener('pointercancel', function () { scrubbing = false; });

    /* Seeking — keyboard */
    seek.addEventListener('keydown', function (event) {
      if (!audio.duration || !isFinite(audio.duration)) return;
      var step = event.shiftKey ? 15 : 5;
      var handled = true;

      switch (event.key) {
        case 'ArrowRight': case 'ArrowUp':   audio.currentTime += step; break;
        case 'ArrowLeft':  case 'ArrowDown': audio.currentTime -= step; break;
        case 'PageUp':     audio.currentTime += 15; break;
        case 'PageDown':   audio.currentTime -= 15; break;
        case 'Home':       audio.currentTime = 0; break;
        case 'End':        audio.currentTime = audio.duration; break;
        case ' ': case 'Enter':
          if (audio.paused) audio.play(); else audio.pause();
          break;
        default: handled = false;
      }

      if (handled) { event.preventDefault(); paint(); }
    });

    setPlayingState(false);


    /* ── Film: posters hold the page until playback is requested ────────── */

    $$('[data-film]').forEach(function (frame) {
      var button = $('.film__play', frame);
      if (!button) return;

      button.addEventListener('click', function () {
        audio.pause();

        var video = document.createElement('video');
        video.src = frame.getAttribute('data-src');
        video.poster = frame.getAttribute('data-poster');
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.setAttribute('aria-label', frame.getAttribute('data-label'));

        frame.textContent = '';
        frame.appendChild(video);
        frame.classList.add('is-playing');
        video.focus();
      });
    });
  }


  /* ── Stockholm time ───────────────────────────────────────────────────── */

  var clocks = $$('[data-clock]');

  if (clocks.length) {
    var formatter;
    try {
      formatter = new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', hour12: false
      });
    } catch (error) {
      formatter = null;
    }

    var tick = function () {
      if (!formatter) return;
      var now = formatter.format(new Date());
      clocks.forEach(function (node) { node.textContent = now; });
    };

    tick();
    window.setInterval(tick, 20000);
  }

})();
