/* First visit: browser language. After that, whatever they last picked. */
const LANGS = ["en", "sv", "de", "fr"];
const STORE = "kb-lang";

function M(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
}

const COPY = {
  "skip": {
    "en": "Skip to content",
    "sv": "Hoppa till innehållet",
    "de": "Zum Inhalt",
    "fr": "Aller au contenu"
  },
  "soprano": {
    "en": "Soprano",
    "sv": "Sopran",
    "de": "Sopran",
    "fr": "Soprano"
  },
  "menu": {
    "en": "Menu",
    "sv": "Meny",
    "de": "Menü",
    "fr": "Menu"
  },
  "menuClose": {
    "en": "Close",
    "sv": "Stäng",
    "de": "Schließen",
    "fr": "Fermer"
  },
  "langLabel": {
    "en": "Language",
    "sv": "Språk",
    "de": "Sprache",
    "fr": "Langue"
  },
  "navLabel": {
    "en": "Sections",
    "sv": "Avsnitt",
    "de": "Abschnitte",
    "fr": "Sections"
  },
  "newtab": {
    "en": " (opens in a new tab)",
    "sv": " (öppnas i ny flik)",
    "de": " (öffnet in neuem Tab)",
    "fr": " (s'ouvre dans un nouvel onglet)"
  },
  "title": {
    "en": "Karolina Bengtsson, Soprano",
    "sv": "Karolina Bengtsson, sopran",
    "de": "Karolina Bengtsson, Sopranistin",
    "fr": "Karolina Bengtsson, soprano"
  },
  "desc": {
    "en": "Karolina Bengtsson, Swedish soprano from Huseby, Småland. Member of the soloist ensemble at Oper Frankfurt, Birgit Nilsson Stipendiat 2025. Biography, chronology, repertoire and season 2026/27.",
    "sv": "Karolina Bengtsson, svensk sopran från Huseby i Småland. Medlem av Oper Frankfurts solistensemble, Birgit Nilsson-stipendiat 2025. Biografi, kronologi, repertoar och säsongen 2026/27.",
    "de": "Karolina Bengtsson, schwedische Sopranistin aus Huseby in Småland. Mitglied des Solistenensembles der Oper Frankfurt, Birgit-Nilsson-Stipendiatin 2025. Biographie, Chronologie, Repertoire und Spielzeit 2026/27.",
    "fr": "Karolina Bengtsson, soprano suédoise originaire de Huseby en Småland. Membre de la troupe de solistes de l'Oper Frankfurt, lauréate du Birgit Nilsson Stipendium 2025. Biographie, chronologie, répertoire et saison 2026/27."
  },
  "nav": {
    "news": {
      "en": "News",
      "sv": "Nyheter",
      "de": "Aktuelles",
      "fr": "Actualités"
    },
    "biography": {
      "en": "Biography",
      "sv": "Biografi",
      "de": "Biographie",
      "fr": "Biographie"
    },
    "timeline": {
      "en": "Chronology",
      "sv": "Kronologi",
      "de": "Chronologie",
      "fr": "Chronologie"
    },
    "repertoire": {
      "en": "Repertoire",
      "sv": "Repertoar",
      "de": "Repertoire",
      "fr": "Répertoire"
    },
    "season": {
      "en": "Season",
      "sv": "Säsong",
      "de": "Spielzeit",
      "fr": "Saison"
    },
    "media": {
      "en": "Music",
      "sv": "Musik",
      "de": "Musik",
      "fr": "Musique"
    },
    "gallery": {
      "en": "Gallery",
      "sv": "Galleri",
      "de": "Galerie",
      "fr": "Galerie"
    },
    "contact": {
      "en": "Contact",
      "sv": "Kontakt",
      "de": "Kontakt",
      "fr": "Contact"
    }
  },
  "opening": {
    "house": "Oper Frankfurt",
    "from": {
      "en": "From Huseby · Oper Frankfurt",
      "sv": "Från Huseby · Oper Frankfurt",
      "de": "Aus Huseby · Oper Frankfurt",
      "fr": "De Huseby · Oper Frankfurt"
    },
    "lineShort": {
      "en": "Swedish soprano. Birgit Nilsson Stipendiat 2025.",
      "sv": "Svensk sopran. Birgit Nilsson-stipendiat 2025.",
      "de": "Schwedische Sopranistin. Birgit-Nilsson-Stipendiatin 2025.",
      "fr": "Soprano suédoise. Lauréate du Birgit Nilsson Stipendium 2025."
    },
    "ctaSeason": {
      "en": "See the season",
      "sv": "Se säsongen",
      "de": "Zur Spielzeit",
      "fr": "Voir la saison"
    },
    "ctaTickets": {
      "en": "Tickets",
      "sv": "Biljetter",
      "de": "Karten",
      "fr": "Billets"
    },
    "lead1": {
      "en": "She swears eternal fidelity again.",
      "sv": "Hon svär evig trohet igen.",
      "de": "Sie schwört wieder ewige Treue.",
      "fr": "Elle jure encore fidélité éternelle."
    },
    "lead2": {
      "en": "Night after night.",
      "sv": "Kväll efter kväll.",
      "de": "Abend für Abend.",
      "fr": "Soir après soir."
    },
    "line": {
      "en": "in <em>Così fan tutte</em> at Oper Frankfurt, 23 Aug – 21 Jan",
      "sv": "i <em>Così fan tutte</em> på Oper Frankfurt, 23 aug – 21 jan",
      "de": "in <em>Così fan tutte</em> an der Oper Frankfurt, 23. Aug. – 21. Jan",
      "fr": "dans <em>Così fan tutte</em> à l'Oper Frankfurt, 23 août – 21 janv"
    },
    "ticketsPre": {
      "en": "Tickets at ",
      "sv": "Biljetter på ",
      "de": "Karten über ",
      "fr": "Billets sur "
    },
    "bio": {
      "en": "Swedish soprano, member of the soloist ensemble at Oper Frankfurt and Birgit Nilsson Stipendiat 2025.",
      "sv": "Svensk sopran, medlem av Oper Frankfurts solistensemble och Birgit Nilsson-stipendiat 2025.",
      "de": "Schwedische Sopranistin, Mitglied des Solistenensembles der Oper Frankfurt und Birgit-Nilsson-Stipendiatin 2025.",
      "fr": "Soprano suédoise, membre de la troupe de solistes de l'Oper Frankfurt et lauréate du Birgit Nilsson Stipendium 2025."
    },
    "alt": {
      "en": "Karolina Bengtsson as Fiordiligi in Così fan tutte, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Fiordiligi i Così fan tutte, Oper Frankfurt",
      "de": "Karolina Bengtsson als Fiordiligi in Così fan tutte, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Fiordiligi dans Così fan tutte, Oper Frankfurt"
    },
    "cap": "Così fan tutte, Oper Frankfurt",
    "portraitAlt": {
      "en": "Karolina Bengtsson, soprano",
      "sv": "Karolina Bengtsson, sopran",
      "de": "Karolina Bengtsson, Sopranistin",
      "fr": "Karolina Bengtsson, soprano"
    }
  },
  "news": {
    "title": {
      "en": "News",
      "sv": "Nyheter",
      "de": "Aktuelles",
      "fr": "Actualités"
    },
    "note": {
      "en": "The latest about the soprano from Huseby",
      "sv": "Det senaste om sopranen från Huseby",
      "de": "Das Neueste über die Sopranistin aus Huseby",
      "fr": "Les dernières nouvelles de la soprano de Huseby"
    }
  },
  "bio": {
    "title": {
      "en": "Biography",
      "sv": "Biografi",
      "de": "Biographie",
      "fr": "Biographie"
    },
    "note": {
      "en": "From Huseby to Frankfurt",
      "sv": "Från Huseby till Frankfurt",
      "de": "Von Huseby nach Frankfurt",
      "fr": "De Huseby à Francfort"
    },
    "p1": {
      "en": "Karolina Bengtsson was born in 1997 and grew up in Huseby, a mill village in Småland in southern Sweden. She studied at the Royal Danish Academy of Music in Copenhagen and took her master’s degree with Barbara Bonney at the Universität Mozarteum Salzburg in 2023; Wolfgang Holzmair guided her lied interpretation.",
      "sv": "Karolina Bengtsson föddes 1997 och växte upp i Huseby, en bruksort i Småland. Hon studerade vid Det Kongelige Danske Musikkonservatorium i Köpenhamn och tog 2023 sin masterexamen för Barbara Bonney vid Universität Mozarteum i Salzburg; i romansinterpretation handleddes hon av Wolfgang Holzmair.",
      "de": "Karolina Bengtsson, geboren 1997, wuchs in Huseby auf, einem historischen Hüttenort in Småland in Südschweden. Sie studierte an der Königlich Dänischen Musikakademie in Kopenhagen und schloss 2023 ihr Masterstudium bei Barbara Bonney an der Universität Mozarteum Salzburg ab; im Fach Lied arbeitete sie mit Wolfgang Holzmair.",
      "fr": "Karolina Bengtsson est née en 1997 et a grandi à Huseby, ancien village de forges du Småland, dans le sud de la Suède. Elle a étudié à l'Académie royale danoise de musique de Copenhague et a obtenu en 2023 son master auprès de Barbara Bonney à l'Universität Mozarteum de Salzbourg ; Wolfgang Holzmair l'a guidée dans l'interprétation du lied."
    },
    "p2": {
      "en": "She joined the Opera Studio of Oper Frankfurt in 2021 and has been a member of the soloist ensemble since 2023. Guest engagements have taken her to the Bayerische Staatsoper in Munich, the Festival d’Aix-en-Provence and the Innsbruck Festival of Early Music, and in concert to the Swedish Radio Symphony Orchestra and the Gothenburg Symphony Orchestra.",
      "sv": "2021 kom hon till Oper Frankfurts operastudio och sedan 2023 är hon medlem av husets solistensemble. Gästspel har fört henne till Bayerische Staatsoper i München, Festival d’Aix-en-Provence och Innsbrucker Festwochen, och i konsertsammanhang till Sveriges Radios symfoniorkester och Göteborgs Symfoniker.",
      "de": "2021 kam sie ins Opernstudio der Oper Frankfurt, seit 2023 ist sie Mitglied des Solistenensembles. Gastengagements führten sie an die Bayerische Staatsoper in München, zum Festival d’Aix-en-Provence und zu den Innsbrucker Festwochen der Alten Musik, im Konzert zum Schwedischen Rundfunk-Sinfonieorchester und zu den Göteborger Symphonikern.",
      "fr": "Entrée à l'Opera Studio de l'Oper Frankfurt en 2021, elle est membre de la troupe de solistes depuis 2023. Ses engagements l'ont menée à la Bayerische Staatsoper de Munich, au Festival d’Aix-en-Provence et aux Innsbrucker Festwochen, ainsi qu'en concert auprès de l'Orchestre symphonique de la Radio suédoise et de l'Orchestre symphonique de Göteborg."
    },
    "figcap": {
      "en": "Småland, Sweden",
      "sv": "Småland, Sverige",
      "de": "Småland, Schweden",
      "fr": "Småland, Suède"
    },
    "alt": {
      "en": "Karolina Bengtsson by a lake in Småland",
      "sv": "Karolina Bengtsson vid en sjö i Småland",
      "de": "Karolina Bengtsson an einem See in Småland",
      "fr": "Karolina Bengtsson au bord d'un lac du Småland"
    },
    "quote": {
      "en": "What an honour! It feels incredible to be awarded the Birgit Nilsson Stipendium. Beyond the honour, it is also a recognition and an encouragement to keep following my dream.",
      "sv": "Vilken ära! Det känns otroligt stort att tilldelas Birgit Nilsson-stipendiet. Förutom äran är det också ett erkännande och en uppmuntran att fortsätta följa min dröm.",
      "de": "Was für eine Ehre! Es fühlt sich unglaublich groß an, mit dem Birgit-Nilsson-Stipendium ausgezeichnet zu werden. Neben der Ehre ist es auch eine Anerkennung und eine Ermutigung, meinem Traum weiter zu folgen.",
      "fr": "Quel honneur ! C'est un sentiment incroyable de recevoir le Birgit Nilsson Stipendium. Au-delà de l'honneur, c'est aussi une reconnaissance et un encouragement à continuer de suivre mon rêve."
    },
    "attribution": {
      "en": "On receiving the Birgit Nilsson Stipendium, 2025",
      "sv": "Vid mottagandet av Birgit Nilsson-stipendiet 2025",
      "de": "Zur Verleihung des Birgit-Nilsson-Stipendiums 2025",
      "fr": "À la réception du Birgit Nilsson Stipendium, 2025"
    }
  },
  "chrono": {
    "title": {
      "en": "Chronology",
      "sv": "Kronologi",
      "de": "Chronologie",
      "fr": "Chronologie"
    },
    "note": {
      "en": "Roles and prizes, 2017–2027",
      "sv": "Roller och priser 2017–2027",
      "de": "Partien und Preise 2017–2027",
      "fr": "Rôles et prix 2017–2027"
    },
    "prize": {
      "en": "Prize",
      "sv": "Pris",
      "de": "Preis",
      "fr": "Prix"
    },
    "viewFull": {
      "en": "View full chronology",
      "sv": "Visa hela kronologin",
      "de": "Vollständige Chronologie",
      "fr": "Voir la chronologie complète"
    }
  },
  "stipend": {
    "title": {
      "en": "Birgit Nilsson Stipendium 2025",
      "sv": "Birgit Nilsson-stipendiet 2025",
      "de": "Birgit Nilsson Stipendium 2025",
      "fr": "Birgit Nilsson Stipendium 2025"
    },
    "eyebrow": {
      "en": "Award",
      "sv": "Utmärkelse",
      "de": "Auszeichnung",
      "fr": "Distinction"
    },
    "line1": {
      "en": "Birgit Nilsson",
      "sv": "Birgit Nilsson",
      "de": "Birgit Nilsson",
      "fr": "Birgit Nilsson"
    },
    "line2": {
      "en": "Stipendium 2025",
      "sv": "Stipendium 2025",
      "de": "Stipendium 2025",
      "fr": "Stipendium 2025"
    },
    "body": {
      "en": "Founded by Birgit Nilsson in 1973 in memory of her first teacher, Ragnar Blennow, and awarded to outstanding young Swedish singers ever since. The 2025 recital was given in Birgit Nilsson’s own church in Västra Karup on 8 August, during the Birgit Nilsson Festival.",
      "sv": "Instiftat av Birgit Nilsson 1973 till minne av hennes första lärare, Ragnar Blennow, och sedan dess tilldelat framstående unga svenska sångare. 2025 års stipendiekonsert gavs i Birgit Nilssons egen kyrka i Västra Karup den 8 augusti, under Birgit Nilsson-festivalen.",
      "de": "1973 von Birgit Nilsson im Gedenken an ihren ersten Lehrer Ragnar Blennow gestiftet und seither an herausragende junge schwedische Sängerinnen und Sänger vergeben. Das Konzert 2025 fand am 8. August in Birgit Nilssons eigener Kirche in Västra Karup statt, im Rahmen des Birgit-Nilsson-Festivals.",
      "fr": "Fondé par Birgit Nilsson en 1973 à la mémoire de son premier professeur, Ragnar Blennow, et décerné depuis à de jeunes chanteurs suédois d'exception. Le récital 2025 a été donné le 8 août dans l'église de Birgit Nilsson à Västra Karup, dans le cadre du Birgit Nilsson Festival."
    },
    "award": {
      "en": "Awarded the 2025 Birgit Nilsson Stipendium of SEK 250,000, announced in May at the Birgit Nilsson Museum.",
      "sv": "Tilldelad 2025 års Birgit Nilsson-stipendium på 250 000 kronor, tillkännagivet i maj på Birgit Nilsson Museum.",
      "de": "Ausgezeichnet mit dem Birgit-Nilsson-Stipendium 2025 über 250 000 SEK, verkündet im Mai im Birgit-Nilsson-Museum.",
      "fr": "Lauréate du Birgit Nilsson Stipendium 2025, doté de 250 000 SEK et annoncé en mai au musée Birgit Nilsson."
    }
  },
  "rep": {
    "title": {
      "en": "Repertoire",
      "sv": "Repertoar",
      "de": "Repertoire",
      "fr": "Répertoire"
    },
    "note": {
      "en": "Open a role for production details",
      "sv": "Öppna en roll för produktionsinformation",
      "de": "Eine Partie öffnen für Details zur Produktion",
      "fr": "Ouvrez un rôle pour le détail de la production"
    },
    "opera": {
      "en": "Opera",
      "sv": "Opera",
      "de": "Oper",
      "fr": "Opéra"
    },
    "concert": {
      "en": "Concert & Lied",
      "sv": "Konsert & romans",
      "de": "Konzert & Lied",
      "fr": "Concert & mélodie"
    },
    "bottom": {
      "en": "Concert engagements include the Swedish Radio Symphony Orchestra and the Gothenburg Symphony Orchestra. Full repertoire on request.",
      "sv": "Konsertengagemang inkluderar Sveriges Radios symfoniorkester och Göteborgs Symfoniker. Fullständig repertoar på förfrågan.",
      "de": "Zu ihren Konzertengagements zählen das Schwedische Rundfunk-Sinfonieorchester und die Göteborger Symphoniker. Vollständiges Repertoire auf Anfrage.",
      "fr": "Elle s'est produite en concert avec l'Orchestre symphonique de la Radio suédoise et l'Orchestre symphonique de Göteborg. Répertoire complet sur demande."
    },
    "composer": {
      "en": "Composer",
      "sv": "Tonsättare",
      "de": "Komponist",
      "fr": "Compositeur"
    },
    "conductor": {
      "en": "Conductor",
      "sv": "Dirigent",
      "de": "Dirigent",
      "fr": "Direction"
    },
    "director": {
      "en": "Director",
      "sv": "Regi",
      "de": "Regie",
      "fr": "Mise en scène"
    },
    "withWho": {
      "en": "With",
      "sv": "Med",
      "de": "Mit",
      "fr": "Avec"
    },
    "about": {
      "en": "About the production",
      "sv": "Om produktionen",
      "de": "Zur Produktion",
      "fr": "Sur la production"
    },
    "viewFull": {
      "en": "View full repertoire",
      "sv": "Visa hela repertoaren",
      "de": "Vollständiges Repertoire",
      "fr": "Voir le répertoire complet"
    }
  },
  "season": {
    "title": {
      "en": "Season",
      "sv": "Säsong",
      "de": "Spielzeit",
      "fr": "Saison"
    },
    "note": {
      "en": "Spielzeit 2026/27",
      "sv": "Spelåret 2026/27",
      "de": "2026/27",
      "fr": "Saison 2026/27"
    },
    "flag": {
      "en": "Premiere",
      "sv": "Premiär",
      "de": "Premiere",
      "fr": "Création"
    },
    "alt": {
      "en": "The Alte Oper in Frankfurt am Main at night",
      "sv": "Alte Oper i Frankfurt am Main om natten",
      "de": "Die Alte Oper in Frankfurt am Main bei Nacht",
      "fr": "L'Alte Oper de Francfort-sur-le-Main, de nuit"
    },
    "trioAlt": {
      "en": "Karolina Bengtsson as Fiordiligi in Così fan tutte, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Fiordiligi i Così fan tutte, Oper Frankfurt",
      "de": "Karolina Bengtsson als Fiordiligi in Così fan tutte, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Fiordiligi dans Così fan tutte, Oper Frankfurt"
    },
    "noteText": {
      "en": "All performances at Oper Frankfurt. Tickets and full dates at ",
      "sv": "Samtliga föreställningar på Oper Frankfurt. Biljetter och alla datum på ",
      "de": "Alle Vorstellungen an der Oper Frankfurt. Karten und alle Termine auf ",
      "fr": "Toutes les représentations à l'Oper Frankfurt. Billets et calendrier complet sur "
    },
    "venue": "Oper Frankfurt",
    "colDate": {
      "en": "Date",
      "sv": "Datum",
      "de": "Datum",
      "fr": "Date"
    },
    "colWork": {
      "en": "Work",
      "sv": "Verk",
      "de": "Werk",
      "fr": "Œuvre"
    },
    "colRole": {
      "en": "Role",
      "sv": "Roll",
      "de": "Partie",
      "fr": "Rôle"
    },
    "colVenue": {
      "en": "Venue",
      "sv": "Scen",
      "de": "Haus",
      "fr": "Scène"
    },
    "colTickets": {
      "en": "Tickets",
      "sv": "Biljetter",
      "de": "Karten",
      "fr": "Billets"
    },
    "tickets": {
      "en": "Tickets",
      "sv": "Biljetter",
      "de": "Karten",
      "fr": "Billets"
    }
  },
  "media": {
    "title": {
      "en": "Music & Video",
      "sv": "Musik & video",
      "de": "Musik & Video",
      "fr": "Musique & vidéo"
    },
    "recKicker": {
      "en": "Her first recording",
      "sv": "Hennes första skiva",
      "de": "Ihre erste Aufnahme",
      "fr": "Son premier enregistrement"
    },
    "albumMeta": {
      "en": "Tommaso Traetta, world premiere recording. Aparté, 2026",
      "sv": "Tommaso Traetta, världspremiärinspelning. Aparté, 2026",
      "de": "Tommaso Traetta, Weltersteinspielung. Aparté, 2026",
      "fr": "Tommaso Traetta, premier enregistrement mondial. Aparté, 2026"
    },
    "albumBody": {
      "en": "Recorded at the 2025 Innsbrucker Festwochen der Alten Musik with Les Talens Lyriques under Christophe Rousset. Karolina sings Dori alongside Rocío Pérez and Rafał Tomkiewicz. In August 2026 the recording was named on the Bestenliste of the Preis der deutschen Schallplattenkritik.",
      "sv": "Inspelad vid Innsbrucker Festwochen der Alten Musik 2025 med Les Talens Lyriques under Christophe Rousset. Karolina sjunger Dori vid sidan av Rocío Pérez och Rafał Tomkiewicz. I augusti 2026 togs inspelningen upp på Bestenliste av Preis der deutschen Schallplattenkritik.",
      "de": "Aufgenommen bei den Innsbrucker Festwochen der Alten Musik 2025 mit Les Talens Lyriques unter Christophe Rousset. Karolina singt die Dori an der Seite von Rocío Pérez und Rafał Tomkiewicz. Im August 2026 wurde die Aufnahme auf die Bestenliste des Preises der deutschen Schallplattenkritik gesetzt.",
      "fr": "Enregistré aux Innsbrucker Festwochen der Alten Musik 2025 avec Les Talens Lyriques sous la direction de Christophe Rousset. Karolina y chante Dori aux côtés de Rocío Pérez et Rafał Tomkiewicz. En août 2026, l'enregistrement a été inscrit sur la Bestenliste du Preis der deutschen Schallplattenkritik."
    },
    "filmKicker": {
      "en": "On film",
      "sv": "På film",
      "de": "Im Film",
      "fr": "En images"
    },
    "cap1": {
      "en": "Death and Juliet, Daniel Nelson. With Malin Broman and Musica Vitae.",
      "sv": "Döden & Julia av Daniel Nelson. Med Malin Broman och Musica Vitae.",
      "de": "Death and Juliet von Daniel Nelson. Mit Malin Broman und Musica Vitae.",
      "fr": "Death and Juliet de Daniel Nelson. Avec Malin Broman et Musica Vitae."
    },
    "cap2": {
      "en": "Ascanio in Alba, trailer. Oper Frankfurt 2023; Karolina as Silvia.",
      "sv": "Ascanio in Alba, trailer. Oper Frankfurt 2023; Karolina som Silvia.",
      "de": "Ascanio in Alba, Trailer. Oper Frankfurt 2023; Karolina als Silvia.",
      "fr": "Ascanio in Alba, bande-annonce. Oper Frankfurt 2023 ; Karolina en Silvia."
    },
    "more1": {
      "en": "More video on ",
      "sv": "Fler filmer på ",
      "de": "Mehr Videos auf ",
      "fr": "Plus de vidéos sur "
    },
    "moreYt": {
      "en": "her YouTube channel",
      "sv": "hennes YouTube-kanal",
      "de": "ihrem YouTube-Kanal",
      "fr": "sa chaîne YouTube"
    },
    "more2": {
      "en": " and at ",
      "sv": " och hos ",
      "de": " und bei ",
      "fr": " et chez "
    },
    "loadAlbum": {
      "en": "Load recording: Ifigenia in Tauride",
      "sv": "Ladda inspelningen: Ifigenia in Tauride",
      "de": "Aufnahme laden: Ifigenia in Tauride",
      "fr": "Charger l'enregistrement : Ifigenia in Tauride"
    },
    "load1": {
      "en": "Load film: Death and Juliet",
      "sv": "Ladda filmen: Döden & Julia",
      "de": "Film laden: Death and Juliet",
      "fr": "Charger le film : Death and Juliet"
    },
    "load2": {
      "en": "Load film: Ascanio in Alba",
      "sv": "Ladda filmen: Ascanio in Alba",
      "de": "Film laden: Ascanio in Alba",
      "fr": "Charger le film : Ascanio in Alba"
    }
  },
  "gallery": {
    "title": {
      "en": "Gallery",
      "sv": "Galleri",
      "de": "Galerie",
      "fr": "Galerie"
    },
    "note": {
      "en": "On stage and in Småland",
      "sv": "På scen och i Småland",
      "de": "Auf der Bühne und in Småland",
      "fr": "Sur scène et en Småland"
    },
    "stage": {
      "en": "On stage",
      "sv": "På scen",
      "de": "Auf der Bühne",
      "fr": "Sur scène"
    },
    "smaland": "Småland",
    "throneAlt": {
      "en": "Karolina Bengtsson as Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Belisa i In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "de": "Karolina Bengtsson als Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Belisa dans In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt"
    },
    "annaAlt": {
      "en": "Karolina Bengtsson as Anna in Blühen, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Anna i Blühen, Oper Frankfurt",
      "de": "Karolina Bengtsson als Anna in Blühen, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Anna dans Blühen, Oper Frankfurt"
    },
    "belisaAlt": {
      "en": "Karolina Bengtsson as Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Belisa i In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "de": "Karolina Bengtsson als Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Belisa dans In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt"
    },
    "alt1": {
      "en": "Karolina Bengtsson in a yellow dress in a beech forest",
      "sv": "Karolina Bengtsson i gul klänning i en bokskog",
      "de": "Karolina Bengtsson im gelben Kleid in einem Buchenwald",
      "fr": "Karolina Bengtsson en robe jaune dans une hêtraie"
    },
    "alt2": {
      "en": "Karolina Bengtsson at a gate in the countryside",
      "sv": "Karolina Bengtsson vid en grind på landet",
      "de": "Karolina Bengtsson an einem Tor auf dem Land",
      "fr": "Karolina Bengtsson devant un portail à la campagne"
    },
    "alt3": {
      "en": "Karolina Bengtsson seated by a stone wall",
      "sv": "Karolina Bengtsson vid en stenmur",
      "de": "Karolina Bengtsson an einer Steinmauer",
      "fr": "Karolina Bengtsson près d'un mur de pierre"
    },
    "alt4": {
      "en": "Karolina Bengtsson by a moss-grown tree",
      "sv": "Karolina Bengtsson vid ett mossbeklätt träd",
      "de": "Karolina Bengtsson an einem bemoosten Baum",
      "fr": "Karolina Bengtsson près d'un arbre moussu"
    },
    "briefAlt": {
      "en": "Karolina Bengtsson as Fiordiligi in Così fan tutte, Oper Frankfurt",
      "sv": "Karolina Bengtsson som Fiordiligi i Così fan tutte, Oper Frankfurt",
      "de": "Karolina Bengtsson als Fiordiligi in Così fan tutte, Oper Frankfurt",
      "fr": "Karolina Bengtsson en Fiordiligi dans Così fan tutte, Oper Frankfurt"
    },
    "viewFull": {
      "en": "View complete gallery",
      "sv": "Visa hela galleriet",
      "de": "Vollständige Galerie",
      "fr": "Voir la galerie complète"
    }
  },
  "contact": {
    "title": {
      "en": "Contact",
      "sv": "Kontakt",
      "de": "Kontakt",
      "fr": "Contact"
    },
    "mgmt": {
      "en": "General management",
      "sv": "Management",
      "de": "Management",
      "fr": "Management général"
    },
    "manager": {
      "en": "Elisabeth Haglund, Artist Manager",
      "sv": "Elisabeth Haglund, artistagent",
      "de": "Elisabeth Haglund, Künstleragentin",
      "fr": "Elisabeth Haglund, agente artistique"
    },
    "links": {
      "en": "Links",
      "sv": "Länkar",
      "de": "Links",
      "fr": "Liens"
    },
    "l1": {
      "en": "Profile at Oper Frankfurt",
      "sv": "Profil hos Oper Frankfurt",
      "de": "Profil bei der Oper Frankfurt",
      "fr": "Profil à l'Oper Frankfurt"
    },
    "l2": {
      "en": "Artist page at Braathen Management",
      "sv": "Artistsida hos Braathen Management",
      "de": "Künstlerseite bei Braathen Management",
      "fr": "Page d'artiste chez Braathen Management"
    },
    "l3": {
      "en": "Schedule on Operabase",
      "sv": "Spelschema på Operabase",
      "de": "Termine auf Operabase",
      "fr": "Calendrier sur Operabase"
    },
    "press": {
      "en": "For press material, full repertoire and reviews, please contact the management.",
      "sv": "För pressmaterial, fullständig repertoar och recensioner, kontakta management.",
      "de": "Pressematerial, vollständiges Repertoire und Kritiken über das Management.",
      "fr": "Dossier de presse, répertoire complet et critiques auprès du management."
    }
  },
  "footer": {
    "top": {
      "en": "Back to top",
      "sv": "Till toppen",
      "de": "Nach oben",
      "fr": "Haut de page"
    }
  },
  "credit": {
    "portrait": {
      "en": "Photo: Tore Sjöqvist",
      "sv": "Foto: Tore Sjöqvist",
      "de": "Foto: Tore Sjöqvist",
      "fr": "Photo : Tore Sjöqvist"
    },
    "portraits": {
      "en": "Photos: Tore Sjöqvist",
      "sv": "Foto: Tore Sjöqvist",
      "de": "Fotos: Tore Sjöqvist",
      "fr": "Photos : Tore Sjöqvist"
    },
    "smaland": {
      "en": "Småland. Photo: Tore Sjöqvist",
      "sv": "Småland. Foto: Tore Sjöqvist",
      "de": "Småland. Foto: Tore Sjöqvist",
      "fr": "Småland. Photo : Tore Sjöqvist"
    },
    "stage": {
      "en": "Così fan tutte, Oper Frankfurt. Photo: Barbara Aumüller",
      "sv": "Così fan tutte, Oper Frankfurt. Foto: Barbara Aumüller",
      "de": "Così fan tutte, Oper Frankfurt. Foto: Barbara Aumüller",
      "fr": "Così fan tutte, Oper Frankfurt. Photo : Barbara Aumüller"
    },
    "anna": {
      "en": "Anna in Blühen, Oper Frankfurt. Photo: Barbara Aumüller",
      "sv": "Anna ur Blühen, Oper Frankfurt. Foto: Barbara Aumüller",
      "de": "Anna in Blühen, Oper Frankfurt. Foto: Barbara Aumüller",
      "fr": "Anna dans Blühen, Oper Frankfurt. Photo : Barbara Aumüller"
    },
    "belisa": {
      "en": "Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt. Photo: Barbara Aumüller",
      "sv": "Belisa ur In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt. Foto: Barbara Aumüller",
      "de": "Belisa in In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt. Foto: Barbara Aumüller",
      "fr": "Belisa dans In seinem Garten liebt Don Perlimplín Belisa, Oper Frankfurt. Photo : Barbara Aumüller"
    },
    "footer": {
      "en": "Portraits: Tore Sjöqvist. Stage photographs: Barbara Aumüller, Oper Frankfurt.",
      "sv": "Porträtt: Tore Sjöqvist. Scenfotografier: Barbara Aumüller, Oper Frankfurt.",
      "de": "Porträts: Tore Sjöqvist. Bühnenfotos: Barbara Aumüller, Oper Frankfurt.",
      "fr": "Portraits : Tore Sjöqvist. Photos de scène : Barbara Aumüller, Oper Frankfurt."
    }
  },
  "secNum": {
    "news": "I",
    "biography": "II",
    "timeline": "III",
    "repertoire": "IV",
    "season": "V",
    "media": "VI",
    "gallery": "VII",
    "contact": "VIII"
  }
};

const NEWS = [
  {
    "date": {
      "en": "Aug 2026",
      "sv": "aug 2026",
      "de": "Aug. 2026",
      "fr": "août 2026"
    },
    "display": "Bestenliste",
    "headline": {
      "en": "Named on the German Record Critics' Bestenliste",
      "sv": "Med på tyska skivkritikens Bestenliste",
      "de": "Auf der Bestenliste der deutschen Schallplattenkritik",
      "fr": "Au palmarès de la critique allemande du disque"
    },
    "flag": {
      "en": "Prize",
      "sv": "Pris",
      "de": "Preis",
      "fr": "Prix"
    },
    "body": {
      "en": "The recording of Traetta's <em>Ifigenia in Tauride</em> (Aparté), made at the 2025 Innsbrucker Festwochen with Les Talens Lyriques under Christophe Rousset, is placed on the <a href=\"https://www.schallplattenkritik.de/en/quarterly-critics-choice\">Bestenliste 3/2026</a> of the Preis der deutschen Schallplattenkritik. She shared the news <a href=\"https://www.instagram.com/p/DcA-4ZjjtjG/\">on Instagram</a>.",
      "sv": "Inspelningen av Traettas <em>Ifigenia in Tauride</em> (Aparté), gjord vid Innsbrucker Festwochen 2025 med Les Talens Lyriques under Christophe Rousset, har tagits upp på <a href=\"https://www.schallplattenkritik.de/en/quarterly-critics-choice\">Bestenliste 3/2026</a> av Preis der deutschen Schallplattenkritik. Hon delade nyheten <a href=\"https://www.instagram.com/p/DcA-4ZjjtjG/\">på Instagram</a>.",
      "de": "Die Aufnahme von Traettas <em>Ifigenia in Tauride</em> (Aparté), entstanden bei den Innsbrucker Festwochen 2025 mit Les Talens Lyriques unter Christophe Rousset, steht auf der <a href=\"https://www.schallplattenkritik.de/en/quarterly-critics-choice\">Bestenliste 3/2026</a> des Preises der deutschen Schallplattenkritik. Die Nachricht teilte sie <a href=\"https://www.instagram.com/p/DcA-4ZjjtjG/\">auf Instagram</a>.",
      "fr": "L'enregistrement d'<em>Ifigenia in Tauride</em> de Traetta (Aparté), réalisé aux Innsbrucker Festwochen 2025 avec Les Talens Lyriques sous la direction de Christophe Rousset, figure sur la <a href=\"https://www.schallplattenkritik.de/en/quarterly-critics-choice\">Bestenliste 3/2026</a> du Preis der deutschen Schallplattenkritik. Elle a partagé la nouvelle <a href=\"https://www.instagram.com/p/DcA-4ZjjtjG/\">sur Instagram</a>."
    }
  },
  {
    "date": {
      "en": "Mar 2026",
      "sv": "mars 2026",
      "de": "März 2026",
      "fr": "mars 2026"
    },
    "headline": {
      "en": "Debut recording released",
      "sv": "Debutskivan släppt",
      "de": "Debütaufnahme erschienen",
      "fr": "Parution du premier enregistrement"
    },
    "body": {
      "en": "Aparté issues <em>Ifigenia in Tauride</em>, the world premiere recording of Traetta's opera, with Karolina as Dori. BBC Music Magazine gives it four stars; Gramophone reviews it in July. <a href=\"#media\">Hear it further down this page</a>.",
      "sv": "Aparté ger ut <em>Ifigenia in Tauride</em>, världspremiärinspelningen av Traettas opera, med Karolina som Dori. BBC Music Magazine ger fyra stjärnor; Gramophone recenserar den i juli. <a href=\"#media\">Hör den längre ner på sidan</a>.",
      "de": "Aparté veröffentlicht <em>Ifigenia in Tauride</em>, die Weltersteinspielung von Traettas Oper, mit Karolina als Dori. Das BBC Music Magazine vergibt vier Sterne; Gramophone bespricht die Aufnahme im Juli. <a href=\"#media\">Zu hören weiter unten auf dieser Seite</a>.",
      "fr": "Aparté publie <em>Ifigenia in Tauride</em>, premier enregistrement mondial de l'opéra de Traetta, avec Karolina dans le rôle de Dori. BBC Music Magazine lui attribue quatre étoiles ; Gramophone le chronique en juillet. <a href=\"#media\">À écouter plus bas sur cette page</a>."
    }
  },
  {
    "date": {
      "en": "Jan 2026",
      "sv": "jan 2026",
      "de": "Jan. 2026",
      "fr": "janv. 2026"
    },
    "headline": {
      "en": "Role debut as Fiordiligi",
      "sv": "Rolldebut som Fiordiligi",
      "de": "Rollendebüt als Fiordiligi",
      "fr": "Prise de rôle en Fiordiligi"
    },
    "body": {
      "en": "A first Fiordiligi in <em>Così fan tutte</em> at Oper Frankfurt. She sings the role again when the revival opens <a href=\"#season\">the 2026/27 season</a> on 23 August.",
      "sv": "En första Fiordiligi i <em>Così fan tutte</em> på Oper Frankfurt. Hon sjunger rollen igen när nypremiären öppnar <a href=\"#season\">säsongen 2026/27</a> den 23 augusti.",
      "de": "Eine erste Fiordiligi in <em>Così fan tutte</em> an der Oper Frankfurt. Sie singt die Partie erneut, wenn die Wiederaufnahme am 23. August <a href=\"#season\">die Spielzeit 2026/27</a> eröffnet.",
      "fr": "Une première Fiordiligi dans <em>Così fan tutte</em> à l'Oper Frankfurt. Elle retrouvera le rôle lorsque la reprise ouvrira <a href=\"#season\">la saison 2026/27</a>, le 23 août."
    }
  },
  {
    "date": {
      "en": "Aug 2025",
      "sv": "aug 2025",
      "de": "Aug. 2025",
      "fr": "août 2025"
    },
    "headline": {
      "en": "Birgit Nilsson Stipendium recital in Västra Karup",
      "sv": "Stipendiekonsert i Västra Karups kyrka",
      "de": "Stipendiatenkonzert in Västra Karup",
      "fr": "Récital du Birgit Nilsson Stipendium à Västra Karup"
    },
    "body": {
      "en": "Awarded the 2025 <a href=\"https://birgitnilsson.com/stipendium/en/karolina-bengtsson-awarded-this-years-birgit-nilsson-stipendium/\">Birgit Nilsson Stipendium</a> of SEK 250,000, announced in May at the Birgit Nilsson Museum. The stipend recital was given in Birgit Nilsson's own church on 8 August, during the Birgit Nilsson Festival, where she also sang the Priestess in <em>Aida</em>.",
      "sv": "Tilldelad 2025 års <a href=\"https://birgitnilsson.com/stipendium/en/karolina-bengtsson-awarded-this-years-birgit-nilsson-stipendium/\">Birgit Nilsson-stipendium</a> på 250 000 kronor, tillkännagivet i maj på Birgit Nilsson Museum. Stipendiekonserten gavs i Birgit Nilssons egen kyrka den 8 augusti under Birgit Nilsson-festivalen, där hon även sjöng prästinnan i <em>Aida</em>.",
      "de": "Ausgezeichnet mit dem <a href=\"https://birgitnilsson.com/stipendium/en/karolina-bengtsson-awarded-this-years-birgit-nilsson-stipendium/\">Birgit-Nilsson-Stipendium</a> 2025 über 250 000 SEK, verkündet im Mai im Birgit-Nilsson-Museum. Das Stipendiatenkonzert fand am 8. August in Birgit Nilssons eigener Kirche statt, während des Birgit-Nilsson-Festivals, bei dem sie auch die Priesterin in <em>Aida</em> sang.",
      "fr": "Lauréate du <a href=\"https://birgitnilsson.com/stipendium/en/karolina-bengtsson-awarded-this-years-birgit-nilsson-stipendium/\">Birgit Nilsson Stipendium</a> 2025, doté de 250 000 SEK et annoncé en mai au musée Birgit Nilsson. Le récital a été donné le 8 août dans l'église de Birgit Nilsson, pendant le Birgit Nilsson Festival, où elle a aussi chanté la Prêtresse dans <em>Aida</em>."
    }
  },
  {
    "date": {
      "en": "Jul 2025",
      "sv": "juli 2025",
      "de": "Juli 2025",
      "fr": "juil. 2025"
    },
    "headline": {
      "en": "Debut at the Festival d'Aix-en-Provence",
      "sv": "Debut på Festival d'Aix-en-Provence",
      "de": "Debüt beim Festival d'Aix-en-Provence",
      "fr": "Débuts au Festival d'Aix-en-Provence"
    },
    "body": {
      "en": "Camille in Christof Loy's new production of Charpentier's <em>Louise</em>, conducted by Giacomo Sagripanti, with Elsa Dreisig in the title role.",
      "sv": "Camille i Christof Loys nyuppsättning av Charpentiers <em>Louise</em>, dirigerad av Giacomo Sagripanti, med Elsa Dreisig i titelrollen.",
      "de": "Camille in Christof Loys Neuinszenierung von Charpentiers <em>Louise</em> unter Giacomo Sagripanti, mit Elsa Dreisig in der Titelpartie.",
      "fr": "Camille dans la nouvelle production de <em>Louise</em> de Charpentier signée Christof Loy, sous la direction de Giacomo Sagripanti, avec Elsa Dreisig dans le rôle-titre."
    }
  }
];

const CHRONOLOGY = [
  {
    "year": "2026/27",
    "entries": [
      {
        "role": {
          "en": "Title role",
          "sv": "Titelrollen",
          "de": "Titelpartie",
          "fr": "Rôle-titre"
        },
        "work": "Zaide",
        "note": {
          "en": "premiere, Bockenheimer Depot",
          "sv": "premiär, Bockenheimer Depot",
          "de": "Premiere, Bockenheimer Depot",
          "fr": "création, Bockenheimer Depot"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Fiordiligi",
        "work": "Così fan tutte",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Gretel",
        "work": "Hänsel und Gretel",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Oberto",
        "work": "Alcina",
        "venue": "Oper Frankfurt"
      }
    ]
  },
  {
    "year": "2025/26",
    "entries": [
      {
        "role": "Fiordiligi",
        "work": "Così fan tutte",
        "note": {
          "en": "role debut",
          "sv": "rolldebut",
          "de": "Rollendebüt",
          "fr": "prise de rôle"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Sophie",
        "work": "Werther",
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Young Woman",
          "sv": "Ung kvinna",
          "de": "Mädchen",
          "fr": "Jeune fille"
        },
        "work": {
          "en": "Blood Wedding",
          "sv": "Blodsbröllop",
          "de": "Bluthochzeit",
          "fr": "Noces de sang"
        },
        "note": {
          "en": "premiere",
          "sv": "premiär",
          "de": "Premiere",
          "fr": "création"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Pipetta & Duchess",
          "sv": "Pipetta & hertiginnan",
          "de": "Pipetta & Herzogin",
          "fr": "Pipetta & la Duchesse"
        },
        "work": {
          "en": "The Bandits",
          "sv": "Banditerna",
          "de": "Die Banditen",
          "fr": "Les Brigands"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Anna",
        "work": "Blühen",
        "venue": "Oper Frankfurt"
      },
      {
        "html": {
          "en": "Debut recording: Traetta's <em>Ifigenia in Tauride</em>, Aparté",
          "sv": "Debutskiva: Traettas <em>Ifigenia in Tauride</em>, Aparté",
          "de": "Debütaufnahme: Traettas <em>Ifigenia in Tauride</em>, Aparté",
          "fr": "Premier enregistrement : <em>Ifigenia in Tauride</em> de Traetta, Aparté"
        }
      }
    ]
  },
  {
    "year": "2025",
    "entries": [
      {
        "role": "Camille",
        "work": "Louise",
        "venue": "Festival d’Aix-en-Provence"
      },
      {
        "role": "Dori",
        "work": "Ifigenia in Tauride",
        "venue": "Innsbrucker Festwochen"
      },
      {
        "role": {
          "en": "Priestess",
          "sv": "Prästinna",
          "de": "Priesterin",
          "fr": "Prêtresse"
        },
        "work": "Aida",
        "venue": "Birgit Nilsson Festival, Båstad"
      },
      {
        "text": {
          "en": "Orchestra debuts with the Swedish Radio Symphony Orchestra and the Gothenburg Symphony Orchestra",
          "sv": "Orkesterdebuter med Sveriges Radios symfoniorkester och Göteborgs Symfoniker",
          "de": "Orchesterdebüts beim Schwedischen Rundfunk-Sinfonieorchester und den Göteborger Symphonikern",
          "fr": "Débuts avec l'Orchestre symphonique de la Radio suédoise et l'Orchestre symphonique de Göteborg"
        }
      },
      {
        "text": {
          "en": "Birgit Nilsson Stipendium",
          "sv": "Birgit Nilsson-stipendiet",
          "de": "Birgit-Nilsson-Stipendium",
          "fr": "Birgit Nilsson Stipendium"
        },
        "award": true
      },
      {
        "text": {
          "en": "Marianne & Sigvard Bernadotte Art Fund",
          "sv": "Marianne & Sigvard Bernadottes konstnärsfond",
          "de": "Marianne & Sigvard Bernadotte Art Fund",
          "fr": "Marianne & Sigvard Bernadotte Art Fund"
        },
        "award": true
      }
    ]
  },
  {
    "year": "2024/25",
    "entries": [
      {
        "role": "Aljeja",
        "work": {
          "en": "From the House of the Dead",
          "sv": "Från de dödas hus",
          "de": "Aus einem Totenhaus",
          "fr": "De la maison des morts"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Lady-in-Waiting",
          "sv": "Kammarfrun",
          "de": "Kammerfrau",
          "fr": "Suivante"
        },
        "work": "Macbeth",
        "note": {
          "en": "premiere",
          "sv": "premiär",
          "de": "Premiere",
          "fr": "création"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Barbarina",
        "work": "Le nozze di Figaro",
        "venue": "Oper Frankfurt"
      }
    ]
  },
  {
    "year": "2023/24",
    "entries": [
      {
        "text": {
          "en": "Joins the soloist ensemble of Oper Frankfurt",
          "sv": "Blir medlem av Oper Frankfurts solistensemble",
          "de": "Eintritt ins Solistenensemble der Oper Frankfurt",
          "fr": "Rejoint la troupe de solistes de l'Oper Frankfurt"
        }
      },
      {
        "role": "Silvia",
        "work": "Ascanio in Alba",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Belisa",
        "work": "In seinem Garten liebt Don Perlimplín Belisa",
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "First Maid",
          "sv": "Första tjänarinnan",
          "de": "Erste Magd",
          "fr": "Première servante"
        },
        "work": "Daphne",
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Young Shepherd",
          "sv": "Ung herde",
          "de": "Junger Hirt",
          "fr": "Jeune berger"
        },
        "work": "Tannhäuser",
        "note": {
          "en": "premiere",
          "sv": "premiär",
          "de": "Premiere",
          "fr": "création"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Clotilde",
        "work": "Norma",
        "note": {
          "en": "house debut, June 2024",
          "sv": "husdebut, juni 2024",
          "de": "Hausdebüt, Juni 2024",
          "fr": "débuts sur cette scène, juin 2024"
        },
        "venue": {
          "en": "Bayerische Staatsoper, Munich",
          "sv": "Bayerische Staatsoper, München",
          "de": "Bayerische Staatsoper, München",
          "fr": "Bayerische Staatsoper, Munich"
        }
      },
      {
        "text": {
          "en": "Master’s degree from the Universität Mozarteum Salzburg, with Barbara Bonney",
          "sv": "Masterexamen från Universität Mozarteum Salzburg, hos Barbara Bonney",
          "de": "Masterabschluss an der Universität Mozarteum Salzburg bei Barbara Bonney",
          "fr": "Master de l'Universität Mozarteum Salzburg, auprès de Barbara Bonney"
        }
      }
    ]
  },
  {
    "year": "2022/23",
    "entries": [
      {
        "role": "Pamina & Papagena",
        "work": "Die Zauberflöte",
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Cock & Jay",
          "sv": "Tupp & nötskrika",
          "de": "Hahn & Eichelhäher",
          "fr": "Coq & Geai"
        },
        "work": {
          "en": "The Cunning Little Vixen",
          "sv": "Den listiga lilla räven",
          "de": "Das schlaue Füchslein",
          "fr": "La Petite Renarde rusée"
        },
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Isaura",
        "work": "Francesca da Rimini",
        "venue": "Oper Frankfurt & Tiroler Festspiele Erl"
      },
      {
        "role": "Nerina & Diana",
        "work": "La fedeltà premiata",
        "venue": "Haydn Festival, Brühl"
      },
      {
        "text": {
          "en": "Best Young Artist, Meistersinger von Nürnberg Competition",
          "sv": "Best Young Artist, Meistersinger von Nürnberg-tävlingen",
          "de": "Best Young Artist, Wettbewerb Die Meistersinger von Nürnberg",
          "fr": "Best Young Artist, concours Meistersinger von Nürnberg"
        },
        "award": true
      },
      {
        "text": {
          "en": "Region Kronoberg Culture Stipendium",
          "sv": "Region Kronobergs kulturstipendium",
          "de": "Kulturstipendium der Region Kronoberg",
          "fr": "Bourse culturelle de la Région Kronoberg"
        },
        "award": true
      }
    ]
  },
  {
    "year": "2021/22",
    "entries": [
      {
        "text": {
          "en": "Joins the Opera Studio of Oper Frankfurt",
          "sv": "Antas till Oper Frankfurts operastudio",
          "de": "Aufnahme ins Opernstudio der Oper Frankfurt",
          "fr": "Entre à l'Opera Studio de l'Oper Frankfurt"
        }
      },
      {
        "role": "Clotilde",
        "work": "Norma",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Frasquita",
        "work": "Carmen",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Suor Osmina",
        "work": "Suor Angelica",
        "venue": "Oper Frankfurt"
      },
      {
        "role": {
          "en": "Second Woman",
          "sv": "Andra kvinnan",
          "de": "Zweite Frau",
          "fr": "Deuxième femme"
        },
        "work": "Dido and Aeneas",
        "venue": "Oper Frankfurt"
      },
      {
        "role": "Donna Anna",
        "work": "Don Giovanni",
        "note": {
          "en": "in concert",
          "sv": "konsertant",
          "de": "konzertant",
          "fr": "en concert"
        },
        "venue": "Alte Oper, Frankfurt"
      },
      {
        "text": {
          "en": "Third Prize and three special prizes, International Haydn Competition, Rohrau",
          "sv": "Tredje pris och tre specialpriser, Internationella Haydntävlingen i Rohrau",
          "de": "Dritter Preis und drei Sonderpreise, Internationaler Haydn-Gesangswettbewerb Rohrau",
          "fr": "Troisième prix et trois prix spéciaux, Concours international Haydn de Rohrau"
        },
        "award": true
      }
    ]
  },
  {
    "year": "2020",
    "entries": [
      {
        "text": {
          "en": "First Prize “Golden Victoria”, DEBUT International Singing Competition",
          "sv": "Första pris ”Golden Victoria”, DEBUT International Singing Competition",
          "de": "Erster Preis „Golden Victoria“, DEBUT International Singing Competition",
          "fr": "Premier prix « Golden Victoria », DEBUT International Singing Competition"
        },
        "award": true
      },
      {
        "text": {
          "en": "Beethoven Lieder Prize, Rheinsberg International Singing Competition",
          "sv": "Beethoven-liedpriset, internationella sångtävlingen i Rheinsberg",
          "de": "Beethoven-Liedpreis, Internationaler Gesangswettbewerb Rheinsberg",
          "fr": "Prix de lied Beethoven, Concours international de chant de Rheinsberg"
        },
        "award": true
      }
    ]
  },
  {
    "year": "2017–18",
    "entries": [
      {
        "html": {
          "en": "<em>Death and Juliet</em> by Daniel Nelson, with Malin Broman and Musica Vitae (2018)",
          "sv": "<em>Döden & Julia</em> av Daniel Nelson, med Malin Broman och Musica Vitae (2018)",
          "de": "<em>Death and Juliet</em> von Daniel Nelson, mit Malin Broman und Musica Vitae (2018)",
          "fr": "<em>Death and Juliet</em> de Daniel Nelson, avec Malin Broman et Musica Vitae (2018)"
        }
      },
      {
        "html": {
          "en": "<em>Sound the Trumpet</em>, baroque concert series with Musica Vitae (2017)",
          "sv": "<em>Sound the Trumpet</em>, barockkonsertserie med Musica Vitae (2017)",
          "de": "<em>Sound the Trumpet</em>, Barockkonzertreihe mit Musica Vitae (2017)",
          "fr": "<em>Sound the Trumpet</em>, série de concerts baroques avec Musica Vitae (2017)"
        }
      }
    ]
  }
];

const REP_OPERA = [
  {
    "role": {
      "en": "Title role",
      "sv": "Titelrollen",
      "de": "Titelpartie",
      "fr": "Rôle-titre"
    },
    "work": "Zaide",
    "meta": "Oper Frankfurt, 2026",
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "conductor": "George Petrou",
      "director": "David Hermann",
      "withWho": "Michael Porter (Gomatz), Peter Marsh (Soliman), Aleksander Myrling (Allazim), Pete Thanapat (Osmin)",
      "note": {
        "en": "New production at the Bockenheimer Depot; premiere 30 September 2026",
        "sv": "Nyuppsättning på Bockenheimer Depot; premiär 30 september 2026",
        "de": "Neuproduktion im Bockenheimer Depot; Premiere am 30. September 2026",
        "fr": "Nouvelle production au Bockenheimer Depot ; création le 30 septembre 2026"
      }
    }
  },
  {
    "role": "Fiordiligi",
    "work": "Così fan tutte",
    "meta": {
      "en": "Oper Frankfurt, since 2026",
      "sv": "Oper Frankfurt, sedan 2026",
      "de": "Oper Frankfurt, seit 2026",
      "fr": "Oper Frankfurt, depuis 2026"
    },
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "conductor": "Takeshi Moriuchi / Alden Gatt",
      "director": "Mariame Clément",
      "withWho": "Kelsey Lauritano, Karolina Makuła (Dorabella), Elizabeth Reiter, Bianca Tognocchi (Despina), Sebastian Geyer, Liviu Holender (Don Alfonso)",
      "note": {
        "en": "Role debut January 2026; the revival opens the 2026/27 season",
        "sv": "Rolldebut januari 2026; nypremiären öppnar säsongen 2026/27",
        "de": "Rollendebüt Januar 2026; die Wiederaufnahme eröffnet die Spielzeit 2026/27",
        "fr": "Prise de rôle en janvier 2026 ; la reprise ouvre la saison 2026/27"
      }
    }
  },
  {
    "role": "Gretel",
    "work": "Hänsel und Gretel",
    "meta": "Oper Frankfurt, 2026",
    "info": {
      "composer": "Engelbert Humperdinck",
      "conductor": "Alden Gatt / Thomas Guggeis",
      "director": "Keith Warner",
      "withWho": "Karolina Makuła, Bianca Andrew (Hänsel)"
    }
  },
  {
    "role": "Oberto",
    "work": "Alcina",
    "meta": "Oper Frankfurt, 2027",
    "info": {
      "composer": "Georg Friedrich Händel",
      "conductor": "Julia Jones",
      "director": "Johannes Erath",
      "withWho": "Monika Buczkowska-Ward (Alcina), Elmar Hauser (Ruggiero), Katharina Magiera (Bradamante)"
    }
  },
  {
    "role": "Camille",
    "work": "Louise",
    "meta": "Festival d’Aix-en-Provence, 2025",
    "info": {
      "composer": "Gustave Charpentier",
      "conductor": "Giacomo Sagripanti",
      "director": "Christof Loy",
      "withWho": {
        "en": "Elsa Dreisig (Louise), Adam Smith (Julien), Sophie Koch (the Mother), Nicolas Courjal (the Father)",
        "sv": "Elsa Dreisig (Louise), Adam Smith (Julien), Sophie Koch (modern), Nicolas Courjal (fadern)",
        "de": "Elsa Dreisig (Louise), Adam Smith (Julien), Sophie Koch (Mutter), Nicolas Courjal (Vater)",
        "fr": "Elsa Dreisig (Louise), Adam Smith (Julien), Sophie Koch (la Mère), Nicolas Courjal (le Père)"
      }
    }
  },
  {
    "role": "Dori",
    "work": "Ifigenia in Tauride",
    "meta": "Innsbrucker Festwochen, 2025",
    "info": {
      "composer": "Tommaso Traetta",
      "conductor": "Christophe Rousset, Les Talens Lyriques",
      "director": "Nicola Raab",
      "withWho": "Rocío Pérez (Ifigenia), Rafał Tomkiewicz (Oreste), Alasdair Kent (Toante)",
      "noteHtml": {
        "en": "Recorded by Aparté, 2026; see <a href=\"#media\">Music & Video</a>",
        "sv": "Inspelad av Aparté, 2026; se <a href=\"#media\">Musik & video</a>",
        "de": "Aufgenommen von Aparté, 2026; siehe <a href=\"#media\">Musik & Video</a>",
        "fr": "Enregistré par Aparté, 2026 ; voir <a href=\"#media\">Musique & vidéo</a>"
      }
    }
  },
  {
    "role": "Sophie",
    "work": "Werther",
    "meta": "Oper Frankfurt, 2026",
    "info": {
      "composer": "Jules Massenet",
      "conductor": "Felix Bender",
      "director": "Willy Decker",
      "withWho": "John Osborn (Werther), Bianca Andrew (Charlotte), Sebastian Geyer (Albert)"
    }
  },
  {
    "role": "Anna",
    "work": "Blühen",
    "meta": "Oper Frankfurt, 2025",
    "info": {
      "composer": "Vito Žuraj",
      "conductor": "Michael Wendeberg, Ensemble Modern",
      "director": "Brigitte Fassbaender",
      "withWho": "Bianca Andrew (Aurelia), Michael Porter (Ken)",
      "note": {
        "en": "Revival at the Bockenheimer Depot",
        "sv": "Nypremiär på Bockenheimer Depot",
        "de": "Wiederaufnahme im Bockenheimer Depot",
        "fr": "Reprise au Bockenheimer Depot"
      }
    }
  },
  {
    "role": {
      "en": "Young Woman",
      "sv": "Ung kvinna",
      "de": "Mädchen",
      "fr": "Jeune fille"
    },
    "work": {
      "en": "Blood Wedding",
      "sv": "Blodsbröllop",
      "de": "Bluthochzeit",
      "fr": "Noces de sang"
    },
    "meta": "Oper Frankfurt, 2026",
    "info": {
      "composer": "Wolfgang Fortner",
      "conductor": "Duncan Ward",
      "director": "Àlex Ollé",
      "withWho": {
        "en": "Magdalena Hinterdobler (the Bride), Claudia Mahnke (the Mother), Mikołaj Trąbka (Leonardo)",
        "sv": "Magdalena Hinterdobler (bruden), Claudia Mahnke (modern), Mikołaj Trąbka (Leonardo)",
        "de": "Magdalena Hinterdobler (Braut), Claudia Mahnke (Mutter), Mikołaj Trąbka (Leonardo)",
        "fr": "Magdalena Hinterdobler (la Mariée), Claudia Mahnke (la Mère), Mikołaj Trąbka (Leonardo)"
      },
      "note": {
        "en": "Premiere May 2026",
        "sv": "Premiär maj 2026",
        "de": "Premiere Mai 2026",
        "fr": "Création en mai 2026"
      }
    }
  },
  {
    "role": {
      "en": "Pipetta & Duchess",
      "sv": "Pipetta & hertiginnan",
      "de": "Pipetta & Herzogin",
      "fr": "Pipetta & la Duchesse"
    },
    "work": {
      "en": "The Bandits",
      "sv": "Banditerna",
      "de": "Die Banditen",
      "fr": "Les Brigands"
    },
    "meta": "Oper Frankfurt, 2025",
    "info": {
      "composer": "Jacques Offenbach",
      "conductor": "Karsten Januschke",
      "director": "Katharina Thoma",
      "withWho": "Elizabeth Reiter (Fiorella), Karolina Makuła (Fragoletto), Michael Porter (Falsacappa)"
    }
  },
  {
    "role": "Aljeja",
    "work": {
      "en": "From the House of the Dead",
      "sv": "Från de dödas hus",
      "de": "Aus einem Totenhaus",
      "fr": "De la maison des morts"
    },
    "meta": "Oper Frankfurt, 2025",
    "info": {
      "composer": "Leoš Janáček",
      "conductor": "Robert Jindra",
      "director": "David Hermann",
      "withWho": "Domen Križaj (Gorjančikov), AJ Glueckert (Skuratov), Michael Nagy (Šiškov)"
    }
  },
  {
    "role": {
      "en": "Lady-in-Waiting",
      "sv": "Kammarfrun",
      "de": "Kammerfrau",
      "fr": "Suivante"
    },
    "work": "Macbeth",
    "meta": "Oper Frankfurt, 2024",
    "info": {
      "composer": "Giuseppe Verdi",
      "conductor": "Thomas Guggeis",
      "director": "R.B. Schlather",
      "withWho": "Nicholas Brownlee (Macbeth), Kihwan Sim (Banquo)",
      "note": {
        "en": "New production, premiere December 2024",
        "sv": "Nyuppsättning, premiär december 2024",
        "de": "Neuproduktion, Premiere Dezember 2024",
        "fr": "Nouvelle production, création en décembre 2024"
      }
    }
  },
  {
    "role": "Barbarina",
    "work": "Le nozze di Figaro",
    "meta": {
      "en": "Oper Frankfurt, since 2024",
      "sv": "Oper Frankfurt, sedan 2024",
      "de": "Oper Frankfurt, seit 2024",
      "fr": "Oper Frankfurt, depuis 2024"
    },
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "conductor": "Alden Gatt",
      "director": "Tilmann Köhler",
      "withWho": {
        "en": "Nombulelo Yende (the Countess), Mikołaj Trąbka (the Count)",
        "sv": "Nombulelo Yende (grevinnan), Mikołaj Trąbka (greven)",
        "de": "Nombulelo Yende (Gräfin), Mikołaj Trąbka (Graf)",
        "fr": "Nombulelo Yende (la Comtesse), Mikołaj Trąbka (le Comte)"
      }
    }
  },
  {
    "role": "Clotilde",
    "work": "Norma",
    "meta": "Bayerische Staatsoper, 2024",
    "info": {
      "composer": "Vincenzo Bellini",
      "conductor": "Gianluca Capuano",
      "director": "Jürgen Rose",
      "withWho": "Sonya Yoncheva (Norma), Tara Erraught (Adalgisa), Joseph Calleja (Pollione)",
      "note": {
        "en": "House debut, June 2024",
        "sv": "Husdebut, juni 2024",
        "de": "Hausdebüt, Juni 2024",
        "fr": "Débuts sur cette scène, juin 2024"
      }
    }
  },
  {
    "role": "Silvia",
    "work": "Ascanio in Alba",
    "meta": "Oper Frankfurt, 2023",
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "conductor": "Alden Gatt",
      "director": "Nina Brazier",
      "withWho": "Cecelia Hall (Ascanio), Kateryna Kasper (Venere), Anna Nekhames (Fauno)",
      "note": {
        "en": "At the Bockenheimer Depot",
        "sv": "På Bockenheimer Depot",
        "de": "Im Bockenheimer Depot",
        "fr": "Au Bockenheimer Depot"
      }
    }
  },
  {
    "role": "Belisa",
    "work": "…liebt Don Perlimplín Belisa",
    "meta": "Oper Frankfurt, 2024",
    "info": {
      "composer": "Wolfgang Fortner",
      "conductor": "Takeshi Moriuchi",
      "director": "Dorothea Kirschbaum",
      "withWho": "Sebastian Geyer (Don Perlimplín), Karolina Makuła (Marcolfa)"
    }
  },
  {
    "role": {
      "en": "First Maid",
      "sv": "Första tjänarinnan",
      "de": "Erste Magd",
      "fr": "Première servante"
    },
    "work": "Daphne",
    "meta": "Oper Frankfurt, 2023",
    "info": {
      "composer": "Richard Strauss",
      "conductor": "Lothar Koenigs",
      "director": "Claus Guth",
      "withWho": "Maria Bengtsson (Daphne), Peter Marsh (Apollo)"
    }
  },
  {
    "role": {
      "en": "Young Shepherd",
      "sv": "Ung herde",
      "de": "Junger Hirt",
      "fr": "Jeune berger"
    },
    "work": "Tannhäuser",
    "meta": "Oper Frankfurt, 2024",
    "info": {
      "composer": "Richard Wagner",
      "conductor": "Thomas Guggeis",
      "director": "Matthew Wild",
      "withWho": "Marco Jentzsch (Tannhäuser), Christina Nilsson (Elisabeth), Domen Križaj (Wolfram)",
      "note": {
        "en": "New production, premiere April 2024",
        "sv": "Nyuppsättning, premiär april 2024",
        "de": "Neuproduktion, Premiere April 2024",
        "fr": "Nouvelle production, création en avril 2024"
      }
    }
  },
  {
    "role": "Pamina & Papagena",
    "work": "Die Zauberflöte",
    "meta": {
      "en": "Oper Frankfurt, since 2022",
      "sv": "Oper Frankfurt, sedan 2022",
      "de": "Oper Frankfurt, seit 2022",
      "fr": "Oper Frankfurt, depuis 2022"
    },
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "director": "Ted Huffman",
      "withWho": "Michael Porter (Tamino), Danylo Matviienko (Papageno)"
    }
  },
  {
    "role": {
      "en": "Cock & Jay",
      "sv": "Tupp & nötskrika",
      "de": "Hahn & Eichelhäher",
      "fr": "Coq & Geai"
    },
    "work": {
      "en": "The Cunning Little Vixen",
      "sv": "Den listiga lilla räven",
      "de": "Das schlaue Füchslein",
      "fr": "La Petite Renarde rusée"
    },
    "meta": "Oper Frankfurt, 2023",
    "info": {
      "composer": "Leoš Janáček",
      "conductor": "Jonathan Stockhammer",
      "director": "Ute M. Engelhardt",
      "withWho": {
        "en": "Elizabeth Reiter (the Vixen)",
        "sv": "Elizabeth Reiter (räven)",
        "de": "Elizabeth Reiter (Füchsin)",
        "fr": "Elizabeth Reiter (la Renarde)"
      }
    }
  },
  {
    "role": "Isaura",
    "work": "Francesca da Rimini",
    "meta": "Tiroler Festspiele Erl & Oper Frankfurt, 2022/23",
    "info": {
      "composer": "Saverio Mercadante",
      "conductor": "Giuliano Carella (Erl) / Ramón Tebar (Frankfurt)",
      "director": "Hans Walter Richter",
      "withWho": {
        "en": "Jessica Pratt (Francesca, Frankfurt), Anna Nekhames (Francesca, Erl)",
        "sv": "Jessica Pratt (Francesca, Frankfurt), Anna Nekhames (Francesca, Erl)",
        "de": "Jessica Pratt (Francesca, Frankfurt), Anna Nekhames (Francesca, Erl)",
        "fr": "Jessica Pratt (Francesca, Francfort), Anna Nekhames (Francesca, Erl)"
      }
    }
  },
  {
    "role": "Nerina & Diana",
    "work": "La fedeltà premiata",
    "meta": "Haydn Festival, Brühl, 2022",
    "info": {
      "composer": "Joseph Haydn",
      "conductor": "Andreas Spering, Capella Augustina",
      "withWho": "Sophie Harmsen (Celia), Ylva Stenberg (Amaranta), Bruno Taddia (Perrucchetto)",
      "note": {
        "en": "Concert performances, also at the Tage Alter Musik Herne",
        "sv": "Konsertanta föreställningar, även vid Tage Alter Musik Herne",
        "de": "Konzertante Aufführungen, auch bei den Tagen Alter Musik Herne",
        "fr": "Versions de concert, également aux Tage Alter Musik de Herne"
      }
    }
  },
  {
    "role": "Frasquita",
    "work": "Carmen",
    "meta": "Oper Frankfurt, 2021",
    "info": {
      "composer": "Georges Bizet",
      "note": {
        "en": "Opera Studio years",
        "sv": "Operastudioåren",
        "de": "Opernstudio-Jahre",
        "fr": "Années d'Opera Studio"
      }
    }
  },
  {
    "role": "Suor Osmina",
    "work": "Suor Angelica",
    "meta": "Oper Frankfurt, 2021",
    "info": {
      "composer": "Giacomo Puccini",
      "note": {
        "en": "Opera Studio years",
        "sv": "Operastudioåren",
        "de": "Opernstudio-Jahre",
        "fr": "Années d'Opera Studio"
      }
    }
  },
  {
    "role": "Donna Anna",
    "work": "Don Giovanni",
    "meta": {
      "en": "in concert, Alte Oper, 2021",
      "sv": "konsertant, Alte Oper, 2021",
      "de": "konzertant, Alte Oper, 2021",
      "fr": "en concert, Alte Oper, 2021"
    },
    "info": {
      "composer": "Wolfgang Amadeus Mozart",
      "note": {
        "en": "Concert performance at the Alte Oper, Frankfurt",
        "sv": "Konsertant föreställning i Alte Oper, Frankfurt",
        "de": "Konzertante Aufführung in der Alten Oper Frankfurt",
        "fr": "Version de concert à l'Alte Oper de Francfort"
      }
    }
  }
];

const REP_CONCERT = [
  {
    "work": {
      "en": "Death and Juliet",
      "sv": "Döden & Julia",
      "de": "Death and Juliet",
      "fr": "Death and Juliet"
    },
    "meta": {
      "en": "Daniel Nelson, 2018",
      "sv": "Daniel Nelson, 2018",
      "de": "Daniel Nelson, 2018",
      "fr": "Daniel Nelson, 2018"
    },
    "info": {
      "composer": "Daniel Nelson",
      "withWho": {
        "en": "Malin Broman (violin) and Musica Vitae",
        "sv": "Malin Broman (violin) och Musica Vitae",
        "de": "Malin Broman (Violine) und Musica Vitae",
        "fr": "Malin Broman (violon) et Musica Vitae"
      },
      "noteHtml": {
        "en": "Concert work, 2018, to a libretto by Tuva-Lisa Rangström. Watch it under <a href=\"#media\">Music & Video</a>",
        "sv": "Konsertverk från 2018, till libretto av Tuva-Lisa Rangström. Se den under <a href=\"#media\">Musik & video</a>",
        "de": "Konzertwerk, 2018, auf ein Libretto von Tuva-Lisa Rangström. Zu sehen unter <a href=\"#media\">Musik & Video</a>",
        "fr": "Œuvre de concert, 2018, sur un livret de Tuva-Lisa Rangström. À voir sous <a href=\"#media\">Musique & vidéo</a>"
      }
    }
  },
  {
    "work": "Förklädd Gud",
    "meta": {
      "en": "Lars-Erik Larsson (God in Disguise)",
      "sv": "Lars-Erik Larsson",
      "de": "Lars-Erik Larsson (Der verkleidete Gott)",
      "fr": "Lars-Erik Larsson (Dieu déguisé)"
    },
    "info": {
      "composer": "Lars-Erik Larsson",
      "note": {
        "en": "Lyric suite to Hjalmar Gullberg's poem",
        "sv": "Lyrisk svit till Hjalmar Gullbergs dikt",
        "de": "Lyrische Suite nach Hjalmar Gullbergs Gedicht",
        "fr": "Suite lyrique sur le poème de Hjalmar Gullberg"
      }
    }
  },
  {
    "work": "Ein deutsches Requiem",
    "meta": "Brahms",
    "info": {
      "composer": "Johannes Brahms"
    }
  },
  {
    "work": {
      "en": "Die Schöpfung",
      "sv": "Skapelsen",
      "de": "Die Schöpfung",
      "fr": "La Création"
    },
    "meta": "Haydn",
    "info": {
      "composer": "Joseph Haydn"
    }
  },
  {
    "work": {
      "en": "Die Jahreszeiten",
      "sv": "Årstiderna",
      "de": "Die Jahreszeiten",
      "fr": "Les Saisons"
    },
    "meta": "Haydn",
    "info": {
      "composer": "Joseph Haydn"
    }
  },
  {
    "work": {
      "en": "St Matthew Passion",
      "sv": "Matteuspassionen",
      "de": "Matthäus-Passion",
      "fr": "Passion selon saint Matthieu"
    },
    "meta": "Bach",
    "info": {
      "composer": "Johann Sebastian Bach"
    }
  },
  {
    "work": "Stabat Mater",
    "meta": "Pergolesi",
    "info": {
      "composer": "Giovanni Battista Pergolesi"
    }
  }
];

const SEASON = [
  {
    "dates": {
      "en": "23 Aug – 21 Jan",
      "sv": "23 aug – 21 jan",
      "de": "23. Aug. – 21. Jan.",
      "fr": "23 août – 21 janv."
    },
    "work": "Così fan tutte",
    "role": "Fiordiligi",
    "sub": {
      "en": "Mozart, revival",
      "sv": "Mozart, nypremiär",
      "de": "Mozart, Wiederaufnahme",
      "fr": "Mozart, reprise"
    }
  },
  {
    "dates": {
      "en": "30 Sep – 18 Oct",
      "sv": "30 sep – 18 okt",
      "de": "30. Sep. – 18. Okt.",
      "fr": "30 sept. – 18 oct."
    },
    "work": "Zaide",
    "role": {
      "en": "Title role",
      "sv": "Titelrollen",
      "de": "Titelpartie",
      "fr": "Rôle-titre"
    },
    "sub": "Mozart, Bockenheimer Depot",
    "premiere": true
  },
  {
    "dates": {
      "en": "13 Nov – 26 Dec",
      "sv": "13 nov – 26 dec",
      "de": "13. Nov. – 26. Dez.",
      "fr": "13 nov. – 26 déc."
    },
    "work": "Hänsel und Gretel",
    "role": "Gretel",
    "sub": {
      "en": "Humperdinck, revival",
      "sv": "Humperdinck, nypremiär",
      "de": "Humperdinck, Wiederaufnahme",
      "fr": "Humperdinck, reprise"
    }
  },
  {
    "dates": {
      "en": "20 Feb – 27 Mar",
      "sv": "20 feb – 27 mars",
      "de": "20. Feb. – 27. März",
      "fr": "20 févr. – 27 mars"
    },
    "work": "Alcina",
    "role": "Oberto",
    "sub": {
      "en": "Händel, conducted by Julia Jones",
      "sv": "Händel, dirigent Julia Jones",
      "de": "Händel, Leitung Julia Jones",
      "fr": "Händel, direction Julia Jones"
    }
  }
];

function lookup(key) {
  var parts = key.split(".");
  var cur = COPY;
  for (var i = 0; i < parts.length; i++) {
    if (cur == null) return;
    cur = cur[parts[i]];
  }
  return cur;
}

function decorateLinks(root, lang) {
  var tipText = M(COPY.newtab, lang);
  root.querySelectorAll("a[href]").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
    a.target = "_blank";
    a.rel = "noreferrer";
    var tip = a.querySelector(".visually-hidden");
    if (!tip) {
      tip = document.createElement("span");
      tip.className = "visually-hidden";
      a.appendChild(tip);
    }
    tip.textContent = tipText;
  });
}

function detectLang() {
  try {
    var stored = window.localStorage.getItem(STORE);
    if (LANGS.indexOf(stored) !== -1) return stored;
  } catch (e) {}
  var nav = (navigator.language || "").slice(0, 2).toLowerCase();
  return LANGS.indexOf(nav) !== -1 ? nav : "sv";
}

function applyChrome(lang) {
  document.documentElement.lang = lang;
  document.title = M(COPY.title, lang);
  var desc = M(COPY.desc, lang);
  var meta = document.querySelector("meta[name=\"description\"]");
  if (meta) meta.setAttribute("content", desc);
  var ogt = document.querySelector("meta[property=\"og:title\"]");
  if (ogt) ogt.setAttribute("content", M(COPY.title, lang));
  var twt = document.querySelector("meta[name=\"twitter:title\"]");
  if (twt) twt.setAttribute("content", M(COPY.title, lang));
  var ogd = document.querySelector("meta[property=\"og:description\"]");
  if (ogd) ogd.setAttribute("content", desc);
  var localeMap = { en: "en_US", sv: "sv_SE", de: "de_DE", fr: "fr_FR" };
  var locales = ["en_US", "sv_SE", "de_DE", "fr_FR"];
  var currentLocale = localeMap[lang] || "en_US";
  var ogl = document.querySelector("meta[property=\"og:locale\"]");
  if (ogl) ogl.setAttribute("content", currentLocale);
  document.querySelectorAll("meta[property=\"og:locale:alternate\"]").forEach(function (el) {
    el.parentNode.removeChild(el);
  });
  locales.forEach(function (code) {
    if (code === currentLocale) return;
    var alt = document.createElement("meta");
    alt.setAttribute("property", "og:locale:alternate");
    alt.setAttribute("content", code);
    if (ogl && ogl.parentNode) ogl.parentNode.insertBefore(alt, ogl.nextSibling);
  });

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var val = lookup(el.getAttribute("data-i18n"));
    if (val != null) el.textContent = M(val, lang);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var val = lookup(el.getAttribute("data-i18n-html"));
    if (val != null) el.innerHTML = M(val, lang);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    var val = lookup(el.getAttribute("data-i18n-alt"));
    if (val != null) el.setAttribute("alt", M(val, lang));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var val = lookup(el.getAttribute("data-i18n-aria"));
    if (val != null) el.setAttribute("aria-label", M(val, lang));
  });

  document.querySelectorAll(".lang").forEach(function (group) {
    group.setAttribute("aria-label", M(COPY.langLabel, lang));
  });
  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });

  var nav = document.getElementById("site-nav");
  if (nav) nav.setAttribute("aria-label", M(COPY.navLabel, lang));

  var menu = document.getElementById("menu-btn");
  if (menu) {
    var open = menu.getAttribute("aria-expanded") === "true";
    menu.textContent = M(open ? COPY.menuClose : COPY.menu, lang);
  }
}

function renderNews(lang) {
  var host = document.getElementById("news-list");
  if (!host) return;
  var items = [NEWS[0], NEWS[1], NEWS[4]];
  var lead = items[0];
  var rest = items.slice(1);
  var display = lead.display ? "<p class=\"news-display\">" + M(lead.display, lang) + "</p>" : "";
  var splash = "<article class=\"news-lead\">" + display +
    "<p class=\"news-date\">" + M(lead.date, lang) + "</p>" +
    "<h3>" + M(lead.headline, lang) + "</h3>" +
    "<p class=\"body\">" + M(lead.body, lang) + "</p></article>";
  var briefs = "<div class=\"news-rest\">" + rest.map(function (item) {
    return "<article class=\"news-item\"><p class=\"news-date\">" + M(item.date, lang) +
      "</p><h3>" + M(item.headline, lang) + "</h3><p class=\"body\">" +
      M(item.body, lang) + "</p></article>";
  }).join("") + "</div>";
  host.innerHTML = splash + briefs;
  decorateLinks(host, lang);
  rewriteOperFrankfurtLinks(lang);
}

function entryHtml(entry, lang, prizeWord) {
  if (entry.award) {
    return "<li><span><span class=\"prize\">" + prizeWord + "</span> " + M(entry.text, lang) + "</span></li>";
  }
  if (entry.html) return "<li><span>" + M(entry.html, lang) + "</span></li>";
  if (entry.text) return "<li><span>" + M(entry.text, lang) + "</span></li>";
  var note = entry.note ? " <span class=\"hint\">" + M(entry.note, lang) + "</span>" : "";
  var venue = entry.venue ? "<span class=\"venue\">" + M(entry.venue, lang) + "</span>" : "";
  return "<li><span>" + M(entry.role, lang) + ", <em>" + M(entry.work, lang) + "</em>" + note + "</span>" + venue + "</li>";
}

function yearBlockHtml(block, lang, prizeWord) {
  var rows = block.entries.map(function (entry) {
    return entryHtml(entry, lang, prizeWord);
  }).join("");
  return "<div class=\"year-block\"><p class=\"year\">" + block.year + "</p><ul class=\"year-entries\">" + rows + "</ul></div>";
}

function isSelectedEntry(block, entry) {
  var year = block.year;
  if (year === "2026/27") return true;
  if (year === "2025/26") {
    if (M(entry.work, "en") === "Così fan tutte") return true;
    if (entry.html && /Ifigenia/.test(M(entry.html, "en"))) return true;
    return false;
  }
  if (year === "2025") {
    if (M(entry.role, "en") === "Camille") return true;
    if (M(entry.role, "en") === "Dori") return true;
    if (entry.award && /Birgit Nilsson/.test(M(entry.text, "en"))) return true;
    return false;
  }
  if (year === "2023/24") {
    return !!(entry.text && /soloist ensemble/.test(M(entry.text, "en")));
  }
  return false;
}

function renderChronology(lang) {
  var host = document.getElementById("chrono-list");
  var fullHost = document.getElementById("chrono-full");
  if (!host) return;
  var prizeWord = M(COPY.chrono.prize, lang);
  host.innerHTML = CHRONOLOGY.map(function (block) {
    var entries = block.entries.filter(function (entry) { return isSelectedEntry(block, entry); });
    if (!entries.length) return "";
    return yearBlockHtml({ year: block.year, entries: entries }, lang, prizeWord);
  }).join("");
  if (fullHost) {
    fullHost.innerHTML = CHRONOLOGY.map(function (block) {
      return yearBlockHtml(block, lang, prizeWord);
    }).join("");
  }
  decorateLinks(host, lang);
  if (fullHost) decorateLinks(fullHost, lang);
  rewriteOperFrankfurtLinks(lang);
}

function repRow(label, value) {
  if (!value) return "";
  return "<div class=\"rep-row\"><span class=\"k\">" + label + "</span><span>" + value + "</span></div>";
}

function workKey(item) {
  if (item.work == null) return "";
  return typeof item.work === "string" ? item.work : (item.work.en || "");
}

var SELECTED_OPERA = ["Zaide", "Così fan tutte", "Louise", "Ifigenia in Tauride", "Blühen", "Ascanio in Alba"];
var SELECTED_CONCERT = ["Death and Juliet", "Ein deutsches Requiem", "Die Schöpfung", "Die Jahreszeiten"];

function renderRepItem(item, lang, concert) {
  var work = M(item.work, lang);
  var who = concert
    ? "<span class=\"work\">" + work + "</span>"
    : "<span class=\"who\">" + M(item.role, lang) + " <span class=\"work\">" + work + "</span></span>";
  var info = item.info || {};
  var note = info.noteHtml ? M(info.noteHtml, lang) : M(info.note, lang);
  var rows = [
    repRow(M(COPY.rep.composer, lang), info.composer),
    info.conductor ? repRow(M(COPY.rep.conductor, lang), info.conductor) : "",
    info.director ? repRow(M(COPY.rep.director, lang), info.director) : "",
    info.withWho ? repRow(M(COPY.rep.withWho, lang), M(info.withWho, lang)) : "",
    note ? repRow(M(COPY.rep.about, lang), note) : ""
  ].join("");
  return "<details class=\"rep\"><summary>" + who + "<span class=\"chevron\" aria-hidden=\"true\"></span></summary>" +
    "<div class=\"rep-body\"><p class=\"meta rep-meta\">" + M(item.meta, lang) + "</p>" + rows + "</div></details>";
}

function renderRepertoire(lang) {
  var operaHost = document.getElementById("rep-opera");
  var concertHost = document.getElementById("rep-concert");
  if (!operaHost || !concertHost) return;
  var selectedOp = REP_OPERA.filter(function (item) { return SELECTED_OPERA.indexOf(workKey(item)) !== -1; });
  var selectedCo = REP_CONCERT.filter(function (item) { return SELECTED_CONCERT.indexOf(workKey(item)) !== -1; });
  operaHost.innerHTML = selectedOp.map(function (item) { return renderRepItem(item, lang, false); }).join("");
  concertHost.innerHTML = selectedCo.map(function (item) { return renderRepItem(item, lang, true); }).join("");
  var operaFull = document.getElementById("rep-opera-full");
  var concertFull = document.getElementById("rep-concert-full");
  if (operaFull) operaFull.innerHTML = REP_OPERA.map(function (item) { return renderRepItem(item, lang, false); }).join("");
  if (concertFull) concertFull.innerHTML = REP_CONCERT.map(function (item) { return renderRepItem(item, lang, true); }).join("");
  decorateLinks(operaHost, lang);
  decorateLinks(concertHost, lang);
  if (operaFull) decorateLinks(operaFull, lang);
  if (concertFull) decorateLinks(concertFull, lang);
  rewriteOperFrankfurtLinks(lang);
}

function renderSeason(lang) {
  var host = document.getElementById("season-list");
  if (!host) return;
  var tickets = M(COPY.season.tickets, lang);
  var venue = M(COPY.season.venue, lang);
  var ticketHref = lang === "de" ? "https://www.oper-frankfurt.de/de/" : "https://www.oper-frankfurt.de/en/";
  var cards = SEASON.map(function (item) {
    var flag = item.premiere ? "<span class=\"season-card-flag\">" + M(COPY.season.flag, lang) + "</span>" : "";
    return "<article class=\"season-card\">" +
      "<div class=\"season-card-head\">" +
        "<span class=\"season-card-dates\">" + M(item.dates, lang) + "</span>" +
        flag +
      "</div>" +
      "<h3 class=\"season-card-work\"><em>" + item.work + "</em></h3>" +
      "<p class=\"season-card-role\">" + M(item.role, lang) + "</p>" +
      "<div class=\"season-card-foot\">" +
        "<span class=\"season-card-venue\">" + venue + "</span>" +
        "<a class=\"season-card-ticket\" href=\"" + ticketHref + "\" target=\"_blank\" rel=\"noreferrer\">" + tickets + " <span aria-hidden=\"true\">→</span></a>" +
      "</div>" +
    "</article>";
  }).join("");
  host.innerHTML = "<div class=\"season-cards\">" + cards + "</div>";
  decorateLinks(host, lang);
  rewriteOperFrankfurtLinks(lang);
}

function rewriteOperFrankfurtLinks(lang) {
  var want = lang === "de" ? "de" : "en";
  document.querySelectorAll("a[href]").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href.indexOf("oper-frankfurt.de") === -1) return;
    a.setAttribute("href", href.replace(/\/(?:en|de)\//, "/" + want + "/"));
  });
}

function syncLangGliders(lang) {
  var rootFs = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  var barW = 1.15 * rootFs;
  document.querySelectorAll(".lang").forEach(function (group) {
    var glider = group.querySelector(".lang-glider");
    var btn = group.querySelector('button[aria-pressed="true"]') ||
      group.querySelector('[data-lang="' + lang + '"]');
    if (!glider || !btn) return;
    var groupBox = group.getBoundingClientRect();
    var labelBox;
    var node = btn.firstChild;
    if (node && node.nodeType === 3) {
      var range = document.createRange();
      range.selectNodeContents(node);
      labelBox = range.getBoundingClientRect();
    } else {
      labelBox = btn.getBoundingClientRect();
    }
    var center = labelBox.left + labelBox.width / 2 - groupBox.left;
    glider.style.width = barW + "px";
    glider.style.transform = "translateX(" + (center - barW / 2) + "px)";
  });
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

var langFadeTimer = 0;

function applyLang(lang) {
  var y = window.scrollY;
  currentLang = lang;
  try { window.localStorage.setItem(STORE, lang); } catch (e) {}
  applyChrome(lang);
  renderNews(lang);
  renderChronology(lang);
  renderRepertoire(lang);
  renderSeason(lang);
  decorateLinks(document, lang);
  rewriteOperFrankfurtLinks(lang);
  syncLangGliders(lang);
  window.scrollTo(0, y);
}

function setLang(lang, opts) {
  var animate = opts && opts.animate && lang !== currentLang;
  var main = document.getElementById("main");
  if (langFadeTimer) {
    window.clearTimeout(langFadeTimer);
    langFadeTimer = 0;
  }
  if (animate && main && !prefersReducedMotion()) {
    main.classList.add("is-lang-fading");
    langFadeTimer = window.setTimeout(function () {
      langFadeTimer = 0;
      applyLang(lang);
      requestAnimationFrame(function () {
        main.classList.remove("is-lang-fading");
      });
    }, 140);
    return;
  }
  if (main) main.classList.remove("is-lang-fading");
  applyLang(lang);
}

function isMobileNav() {
  return window.innerWidth <= 959;
}

function setMenuOpen(open) {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  var header = document.getElementById("top");
  if (!btn || !nav) return;
  nav.classList.toggle("is-open", open);
  if (header) header.classList.toggle("is-menu-open", open);
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  btn.textContent = M(open ? COPY.menuClose : COPY.menu, currentLang);
  syncMenuInert();
}

function syncMenuInert() {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  if (!nav) return;
  var open = btn && btn.getAttribute("aria-expanded") === "true";
  if (isMobileNav() && !open) {
    nav.setAttribute("inert", "");
    nav.setAttribute("aria-hidden", "true");
  } else {
    nav.removeAttribute("inert");
    nav.removeAttribute("aria-hidden");
  }
}

function setupMenu() {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  setMenuOpen(false);
  btn.addEventListener("click", function () {
    setMenuOpen(!(nav.classList.contains("is-open")));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenuOpen(false); });
  });
  window.addEventListener("resize", function () {
    if (!isMobileNav()) setMenuOpen(false);
    else syncMenuInert();
  });
}

function setupCompact() {
  var header = document.getElementById("top");
  if (!header) return;
  function onScroll() {
    header.classList.toggle("is-compact", window.scrollY > 72);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupSectionWatch() {
  var nav = document.getElementById("site-nav");
  if (!nav || !("IntersectionObserver" in window)) return;
  var links = nav.querySelectorAll('a[href^="#"]');
  var map = {};
  links.forEach(function (a) {
    var id = (a.getAttribute("href") || "").slice(1);
    if (id && document.getElementById(id)) map[id] = a;
  });
  var ids = Object.keys(map);
  if (!ids.length) return;
  var visible = [];
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.id;
      var idx = visible.indexOf(id);
      if (entry.isIntersecting) {
        if (idx === -1) visible.push(id);
      } else if (idx !== -1) {
        visible.splice(idx, 1);
      }
    });
    links.forEach(function (a) { a.removeAttribute("aria-current"); });
    var current = visible[0];
    ids.forEach(function (id) {
      if (visible.indexOf(id) !== -1) current = id;
    });
    if (current && map[current]) map[current].setAttribute("aria-current", "page");
  }, { rootMargin: "-22% 0px -62% 0px", threshold: 0.01 });
  ids.forEach(function (id) { io.observe(document.getElementById(id)); });
}

function loadEmbed(btn) {
  if (!btn || btn.getAttribute("data-loaded") === "1") return;
  var kind = btn.getAttribute("data-embed");
  var src = btn.getAttribute("data-src");
  if (!src) return;
  var iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.title = btn.getAttribute("data-title") || "";
  iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  iframe.setAttribute("loading", "lazy");
  if (kind === "spotify") {
    iframe.height = "352";
    iframe.setAttribute("allow", "clipboard-write; encrypted-media; fullscreen; picture-in-picture");
  } else {
    iframe.setAttribute("allow", "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");
  }
  var host = btn.parentNode;
  btn.setAttribute("data-loaded", "1");
  if (host) {
    host.classList.add("is-playing");
    host.replaceChild(iframe, btn);
  }
}

function setupMedia() {
  document.querySelectorAll("[data-embed]").forEach(function (btn) {
    btn.addEventListener("click", function () { loadEmbed(btn); });
  });
}

function setupReveal() {
  var nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  nodes.forEach(function (el) { io.observe(el); });
}

var currentLang = "sv";

document.addEventListener("DOMContentLoaded", function () {
  currentLang = detectLang();
  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"), { animate: true });
    });
  });
  setupMenu();
  setupCompact();
  setupSectionWatch();
  setupMedia();
  setupReveal();
  setLang(currentLang);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      syncLangGliders(currentLang);
    });
  });
  window.addEventListener("resize", function () {
    syncLangGliders(currentLang);
  });
});
