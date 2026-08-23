(() => {
  const header = document.querySelector(".masthead");
  const year = document.getElementById("year");
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav a")];

  if (year) year.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);

    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.offsetTop <= y) current = section.id;
    }
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${current}`;
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".in-view").forEach((el) => observer.observe(el));

  const today = new Date();
  const iso = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const datedRows = [...document.querySelectorAll(".program tr[data-date]")];
  const nextRow = datedRows.find((row) => row.getAttribute("data-date") >= iso) || datedRows.at(-1);

  datedRows.forEach((row) => {
    const date = row.getAttribute("data-date");
    const isToday = date === iso;
    row.classList.toggle("is-current", isToday || row === nextRow);
    if (date < iso) row.style.color = "var(--ink-mute)";
    if (isToday) {
      const status = row.querySelector(".status");
      if (status && !status.querySelector(".note")) {
        const note = document.createElement("span");
        note.className = "note";
        note.textContent = " Tonight";
        status.appendChild(note);
      }
    }
  });

  if (nextRow) {
    const heroSlot = document.querySelector(".hero-meta dd");
    if (heroSlot) {
      const work = nextRow.querySelector(".work")?.textContent ?? "";
      const role = nextRow.children[2]?.textContent ?? "";
      const house = nextRow.children[3]?.textContent ?? "";
      const date = nextRow.querySelector(".date")?.textContent ?? "";
      const isToday = nextRow.getAttribute("data-date") === iso;
      const label = document.querySelector(".hero-meta dt");
      if (label) label.textContent = isToday ? "This evening" : "Next";
      heroSlot.innerHTML = `${role}<small>${work} · ${house} · ${date}</small>`;
    }
  }

  const frame = document.getElementById("desk-frame");
  const empty = document.getElementById("stage-empty");
  const playBtn = document.getElementById("play-btn");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const nowLabel = document.getElementById("now-label");
  const nowCat = document.getElementById("now-cat");
  const progress = document.getElementById("progress-bar");
  const timeLabel = document.getElementById("time-label");
  const tracks = [...document.querySelectorAll("#archive-list button")];

  let active = null;
  let playing = false;
  let started = 0;
  let tick = null;

  const setPlaying = (state) => {
    playing = state;
    playBtn.setAttribute("aria-pressed", String(state));
    iconPlay.hidden = state;
    iconPause.hidden = !state;
    if (tick) window.clearInterval(tick);
    if (state) {
      started = Date.now();
      tick = window.setInterval(() => {
        const sec = Math.floor((Date.now() - started) / 1000);
        const mm = String(Math.floor(sec / 60)).padStart(2, "0");
        const ss = String(sec % 60).padStart(2, "0");
        timeLabel.textContent = `${mm}:${ss}`;
        progress.style.width = `${Math.min(96, 8 + sec * 0.55)}%`;
      }, 400);
    }
  };

  const withAutoplay = (src, on) => {
    const url = new URL(src, window.location.href);
    if (url.hostname.includes("youtube")) {
      url.searchParams.set("rel", "0");
      url.searchParams.set("modestbranding", "1");
      if (on) url.searchParams.set("autoplay", "1");
      else url.searchParams.delete("autoplay");
    }
    return url.toString();
  };

  const loadTrack = (button, autoplay) => {
    const src = button.dataset.src;
    const cat = button.dataset.cat;
    const title = button.querySelector(".track-title")?.textContent ?? "Selection";
    active = button;
    tracks.forEach((t) => t.removeAttribute("aria-current"));
    button.setAttribute("aria-current", "true");
    empty.hidden = true;
    frame.hidden = false;
    frame.src = withAutoplay(src, autoplay);
    nowLabel.textContent = title;
    nowCat.textContent = `Cat. ${cat}`;
    progress.style.width = autoplay ? "6%" : "0%";
    timeLabel.textContent = "00:00";
    setPlaying(autoplay);
  };

  tracks.forEach((button) => {
    button.addEventListener("click", () => loadTrack(button, true));
  });

  playBtn.addEventListener("click", () => {
    if (!active) {
      if (tracks[0]) loadTrack(tracks[0], true);
      return;
    }
    if (playing) {
      frame.src = withAutoplay(active.dataset.src, false);
      setPlaying(false);
      return;
    }
    frame.src = withAutoplay(active.dataset.src, true);
    setPlaying(true);
  });
})();
