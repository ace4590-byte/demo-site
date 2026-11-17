/* Mischief front end.
   Everything you will want to change lives in HUB below: the games on the left, the tabs, the headline text, the news cards and the sample
   members. Images are optional: give a game heroImage / logo / iconImg and it is used instead of the placeholder art. */

const hero = (h) => `radial-gradient(48% 62% at 64% 40%, hsl(${h} 72% 62% / .85), transparent 64%), radial-gradient(34% 44% at 80% 58%, hsl(${(h + 40) % 360} 80% 60% / .5), transparent 66%), radial-gradient(70% 90% at 28% 92%, hsl(${(h + 200) % 360} 55% 26% / .85), transparent 70%), linear-gradient(135deg, hsl(${h} 48% 15%), hsl(${(h + 30) % 360} 52% 7%))`;
const art = (h) => `linear-gradient(135deg, hsl(${h} 62% 46%), hsl(${(h + 55) % 360} 60% 24%))`;
const news = (h, a, b, c, price = "2,250", dur = "02:16") => [
  { kind: "shop", tag: "Shop bundle", price, title: a, art: art(h) },
  { kind: "video", dur, title: b, art: art(h + 70) },
  { kind: "tag", tag: "Game updates", title: c, art: art(h + 150) },
];
const TABS = [["Overview"], ["Latest News", 1], ["Events"], ["Media"]];   // these only highlight for now; they do not open anything yet

const HUB = {
  name: "Mischief",
  music: "assets/home-music.mp3",     // plays on every page until someone turns it off
  user: { name: "zane", invites: 11 },
  launch: { label: "Updating...", issues: "Login Issues" },
  games: [
    { id: "home", name: "Home", icon: "home", layout: "home", wordmark: ["Mischief"], h: 232, tabs: TABS,
      logoImg: "assets/mischief-logo.gif", logoStill: "assets/mischief-logo-still.png",
      /* the looping scene behind the logo: scene plays, sceneStill shows when it is switched off. animated: true once scene is a real GIF or animated image. */
      scene: "assets/home-scene.gif", sceneStill: "assets/home-scene-still.webp", animated: true,
      featured: { tag: "Featured", title: "We are currently playing Aion 2 as TWICE, join us!", link: { text: "TWICE", href: "https://twice-legion-hub.onrender.com/" }, image: "assets/news-aion2.webp" },
      news: [
        { kind: "tag", tag: "Coming soon", title: "Minecraft Cobblemon coming soon!", image: "assets/news-cobblemon.webp", art: art(150) },
        { kind: "tag", tag: "Coming soon", title: "Chrono Odyssey, Q2 2027", image: "assets/news-chrono.webp", art: art(20) },
        { kind: "tag", tag: "Coming soon", title: "Guild Wars 3, Q4 2027", image: "assets/news-gw3.webp", art: art(300) },
      ] },
    { id: "aion2", name: "Aion 2", letter: "A", color: "#e0b04b", iconImg: "assets/icon-aion2.webp", wordmark: ["Aion 2"], h: 262, tabs: TABS,
      headline: "Aion 2", text: "", cta: "TWICE Website", ctaHref: "https://twice-legion-hub.onrender.com/",
      /* the photos that rotate behind the page. Add more here as { src: "assets/your-photo.webp" } */
      media: [{ src: "assets/media-raids.webp" }, { src: "assets/media-abyss.webp" }, { src: "assets/media-photoshoot.webp" }],
      /* bottom left: how long we have been playing (counts up by itself every day) and a link to the game's own news */
      launch: { since: "2026-09-30", sinceLabel: "September 30", newsText: "Game News", newsHref: "https://aion2.plaync.com/en-us/board/notice/list" },
      news: [
        { kind: "plain", title: "Raids", image: "assets/media-raids.webp", art: art(262) },
        { kind: "plain", title: "Abyss Sieges", image: "assets/media-abyss.webp", art: art(220) },
        { kind: "plain", title: "Photo shoots", image: "assets/media-photoshoot.webp", art: art(330) },
      ] },
  ],
  /* Sample members. Later this comes from Discord: status is online / idle / dnd / offline, and activity is the game they are playing. */
  members: [
    { name: "Semiij", status: "idle" },
    { name: "Kaito", status: "online", activity: "Aion 2", details: "Abyss Siege" },
    { name: "Mira", status: "online", activity: "Aion 2", details: "Ludra raid" },
    { name: "Dahyun", status: "online", activity: "Aion 2" },
    { name: "Ripley", status: "online" },
    { name: "Tzuyu", status: "online", activity: "Aion 2", details: "Raid prep" },
    { name: "Nova", status: "dnd", activity: "Aion 2", details: "Photo shoot" },
    { name: "Basil", status: "online" },
    { name: "Orion", status: "online" },
    { name: "Lyra", status: "online" },
    { name: "Vex", status: "idle" },
    { name: "Juno", status: "dnd" },
    { name: "Fake R", status: "offline" },
    { name: "Generously", status: "offline" },
    { name: "Sagajay", status: "offline" },
    { name: "Thinking Enjoyer", status: "offline" },
    { name: "Psi Psi", status: "offline" },
  ],
};

/* ---------------------------------------------------------------- icons */
const I = (body, extra = "") => `<svg viewBox="0 0 24 24" ${extra} aria-hidden="true">${body}</svg>`;
const S = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const ICON = {
  logo: '<img src="assets/mischief-m.svg" alt="Mischief" width="40" height="28">',
  home: I('<path d="M12 3.2l9 8h-2.6V20h-4.9v-6h-3v6H5.6v-8.8H3l9-8z"/>', 'fill="currentColor"'),
  grid: I('<rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/>', 'fill="currentColor"'),
  collapse: I('<path d="M4 12h11M11 7l5 5-5 5M20 5v14"/>', S),
  list: I('<path d="M4 6h1.5M9 6h11M4 12h1.5M9 12h11M4 18h1.5M9 18h11"/>', S),
  chat: I('<path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6l-4 3.5V15H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M20 9.5V16a2 2 0 0 1-2 2h-1"/>', S),
  invite: I('<circle cx="10" cy="8" r="3.4"/><path d="M3.5 19c0-3.2 2.9-5 6.5-5s6.5 1.8 6.5 5"/><path d="M19 8v6M16 11h6"/>', S),
  search: I('<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>', S),
  user: I('<circle cx="12" cy="8.5" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/>', 'fill="currentColor"'),
  warn: I('<path d="M12 2l10 10-10 10L2 12z" fill="currentColor"/><path d="M12 7v6M12 16v1.4" stroke="#1a1204" stroke-width="2.2" stroke-linecap="round"/>'),
  camoff: I('<path d="M3 6h9a2 2 0 0 1 2 2v8M2 8v8a2 2 0 0 0 2 2h8M14 11l7-4v10l-4-2.3M3 3l18 18"/>', S),
  cam: I('<rect x="2.5" y="6" width="12" height="12" rx="2.4"/><path d="M14.5 10.5l7-3.8v10.6l-7-3.8"/>', S),
  play: I('<path d="M7 4.5v15l13-7.5z"/>', 'fill="currentColor"'),
  monitor: I('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>', S),
  chev: I('<path d="M6 9l6 6 6-6"/>', S),
  expand: I('<path d="M20 12H9M13 7l-5 5 5 5M4 5v14"/>', S),
  muted: I('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4zM16 9.5l5 5M21 9.5l-5 5"/>', S),
  sound: I('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4zM16 9a4 4 0 0 1 0 6M18.6 6.5a7.5 7.5 0 0 1 0 11"/>', S),
  people: I('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.1 2.7-4.8 6-4.8s6 1.7 6 4.8"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.6c1.9.6 3 2 3 4.4"/>', S),
};

/* ---------------------------------------------------------------- state */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const keep = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
const state = { game: "home", tab: 0, logged: keep("hub-demo-login") === "1", ptab: "list", q: "", shut: {},
  unmuted: keep("hub-muted") !== "1",   // music is on from the start; it stays off for people who turned it off before
  waiting: false,                       // true while the browser is holding the music back until the first click
  volOpen: false, scene: false,         // the Home scene starts paused (a still picture)
  vol: Math.min(1, Math.max(0, Number(keep("hub-vol")) || 0.2)), closed: window.innerWidth <= 960 };
const gameOf = (id) => HUB.games.find((g) => g.id === id) || HUB.games[0];
const gameByName = (n) => HUB.games.find((g) => g.name === n);

/* ---------------------------------------------------------------- left rail */
function renderRail() {
  $("rail").innerHTML = `<div class="brand" title="${esc(HUB.name)}">${ICON.logo}</div><div class="rail-items">${HUB.games.map((g) => {
    const glyph = g.iconImg ? `<img src="${esc(g.iconImg)}" alt="" width="26" height="26">` : g.icon ? ICON[g.icon] : `<span class="gbadge" style="--c:${esc(g.color)}">${esc(g.letter)}</span>`;
    return `<button class="rbtn ${g.id === state.game ? "on" : ""}" type="button" data-game="${g.id}" title="${esc(g.name)}" aria-label="${esc(g.name)}" aria-pressed="${g.id === state.game}">${glyph}</button>`;
  }).join("")}</div><div class="rail-foot">${soundHtml()}</div>`;
}

/* ---------------------------------------------------------------- centre */
const cardsHtml = (list) => list.map((n) => `<a class="card" href="#"><div class="thumb" style="background-image:${n.image ? `url('${esc(n.image)}'), ` : ""}${n.art}">
      ${n.kind === "plain" ? "" : n.kind === "shop" ? `<span class="pill">${esc(n.tag)}</span><span class="price">${esc(n.price)}</span>` : n.kind === "video" ? `<span class="dur">${ICON.play}${esc(n.dur)}</span>` : `<span class="pill">${esc(n.tag)}</span>`}
    </div><h4>${esc(n.title)}</h4></a>`).join("");

/* ---------------------------------------------------------------- days played, and the rotating photos you can drag */
const daysSince = (iso) => { const [y, m, d] = iso.split("-").map(Number), now = new Date(); return Math.max(0, Math.round((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(y, m - 1, d)) / 86400000)); };
const playedText = (iso) => { const n = daysSince(iso); return n === 0 ? "Started today" : `Playing for <b class="days">${n} ${n === 1 ? "day" : "days"}</b>`; };
function updateDays() { const g = gameOf(state.game), el = document.querySelector(".update.played .p1"); if (g.launch && el) el.innerHTML = playedText(g.launch.since); }

const car = { n: 0, pos: 1, dx: 0, timer: null, drag: null, paused: false, on: false, game: null };
function placeGallery(animate) { const t = $("track"); if (!t) return; t.style.transition = animate ? "" : "none"; t.style.transform = `translate3d(calc(${-car.pos * 100}% + ${car.dx}px), 0, 0)`; }
function updateDots() { if (!car.on) return; const cur = (car.pos - 1 + car.n) % car.n; document.querySelectorAll("#dots .dot-i").forEach((d, i) => d.classList.toggle("on", i === cur)); }
function galleryTimer() { clearInterval(car.timer); if (car.on && !car.paused && !calm()) car.timer = setInterval(() => { if (!car.drag && !document.hidden) goGallery(1); }, 6500); }
function goGallery(step) { if (!car.on) return; car.pos = Math.max(0, Math.min(car.n + 1, car.pos + step)); placeGallery(true); updateDots(); }
function toGallery(i) { if (!car.on) return; car.pos = i + 1; placeGallery(true); updateDots(); galleryTimer(); }
function mountGallery(g) {
  if (car.game === g.id && $("track")) return;                 // tab clicks redraw the text, not the photos
  stopGallery();
  const list = g.media;
  car.n = list.length; car.on = car.n > 1; car.pos = car.on ? 1 : 0; car.dx = 0; car.paused = false; car.game = g.id;
  const slides = car.on ? [list[car.n - 1], ...list, list[0]] : list;   // a copy of the last photo in front and the first behind, so it loops without a jump
  $("hero").innerHTML = `<div class="track" id="track">${slides.map((m) => `<div class="slide" style="background-image:url('${esc(m.src)}')"></div>`).join("")}</div>`;
  $("stage").classList.add("has-media");
  $("track").addEventListener("transitionend", (e) => {
    if (e.target !== e.currentTarget) return;
    if (car.pos === 0) { car.pos = car.n; placeGallery(false); } else if (car.pos === car.n + 1) { car.pos = 1; placeGallery(false); }
  });
  placeGallery(false); galleryTimer();
}
function stopGallery() { clearInterval(car.timer); car.on = false; car.game = null; car.drag = null; car.dx = 0; const h = $("hero"); if (h) h.innerHTML = ""; $("stage").classList.remove("has-media", "dragging"); }
function bindGallery() {
  const stage = $("stage");
  stage.addEventListener("pointerdown", (e) => {
    if (!car.on || e.button || e.target.closest("a, button, input, label, .tabs, .launch, .news")) return;
    car.drag = { x: e.clientX, id: e.pointerId, t: performance.now(), w: stage.clientWidth, moved: false };
  });
  stage.addEventListener("pointermove", (e) => {
    const d = car.drag; if (!d || e.pointerId !== d.id) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) { d.moved = true; try { stage.setPointerCapture(e.pointerId); } catch (x) { /* fine */ } stage.classList.add("dragging"); }
    if (d.moved) { car.dx = dx; placeGallery(false); }
  });
  const end = (e) => {
    const d = car.drag; if (!d || e.pointerId !== d.id) return;
    car.drag = null; stage.classList.remove("dragging");
    if (d.moved) {
      const dx = car.dx, v = Math.abs(dx) / Math.max(1, performance.now() - d.t);
      car.dx = 0;
      if (Math.abs(dx) > Math.max(60, d.w * 0.1) || (Math.abs(dx) > 40 && v > 0.5)) goGallery(dx < 0 ? 1 : -1); else placeGallery(true);   // a long drag, or a quick flick
    }
    galleryTimer();
  };
  stage.addEventListener("pointerup", end); stage.addEventListener("pointercancel", end);
}

function renderStage() {
  const g = gameOf(state.game);
  const home = g.layout === "home";
  $("stage").classList.toggle("is-home", home);
  if (home) { stopGallery(); renderHome(g); return; }
  if (g.media && g.media.length) mountGallery(g); else stopGallery();
  const bg = g.heroImage ? `url("${esc(g.heroImage)}"), ${hero(g.h)}` : hero(g.h);
  $("hero").style.backgroundImage = bg;
  $("wordmark").className = "wordmark" + (g.wordmark.length === 1 ? " one" : "");
  $("wordmark").innerHTML = g.logo ? `<img src="${esc(g.logo)}" alt="${esc(g.name)}" height="52">` : g.wordmark.map((l) => `<span>${esc(l)}</span>`).join("");
  $("tabs").innerHTML = g.tabs.map(([label, dot], i) => `<button class="tab ${i === state.tab ? "on" : ""}" type="button" role="tab" aria-selected="${i === state.tab}" data-tab="${i}">${esc(label)}${dot ? '<i class="pip"></i>' : ""}</button>`).join("");
  const cta = g.ctaHref ? `<a class="cta" href="${esc(g.ctaHref)}" target="_blank" rel="noopener">${esc(g.cta)}</a>` : `<button class="cta" type="button">${esc(g.cta)}</button>`;
  const dots = car.on ? `<div class="dots" id="dots">${g.media.map((_, i) => `<button class="dot-i" type="button" data-slide="${i}" aria-label="Photo ${i + 1}"></button>`).join("")}</div>` : "";
  $("copy").innerHTML = `<h1>${esc(g.headline)}</h1>${g.text ? `<p>${esc(g.text)}</p>` : ""}${cta}${dots}`;
  const L = g.launch;
  $("launch").innerHTML = L
    ? `<div class="update played"><span class="p1">${playedText(L.since)}</span><span class="p2">since ${esc(L.sinceLabel)}</span></div>
      <a class="issues" href="${esc(L.newsHref)}" target="_blank" rel="noopener">${ICON.warn}<span>${esc(L.newsText)}</span></a>`
    : `<button class="update" type="button"><span class="bar"><i></i></span><span class="lab">${esc(HUB.launch.label.toUpperCase())}</span></button>
      <a class="issues" href="#">${ICON.warn}<span>${esc(HUB.launch.issues)}</span></a>`;
  $("vtoggle").innerHTML = car.on ? (car.paused ? ICON.camoff : ICON.cam) : (state.video ? ICON.cam : ICON.camoff);
  $("cards").innerHTML = cardsHtml(g.news);
  updateDots();
}
const volPct = () => Math.round(state.vol * 100);
// the site-wide music control, at the bottom of the left rail: the speaker opens the volume slider, and the small button inside it mutes
const soundHtml = () => `<div class="r-snd ${state.volOpen ? "open" : ""}"><div class="r-vol"><button class="vmute" type="button" data-toggle="mute" aria-pressed="${!state.unmuted}" aria-label="${state.unmuted ? "Mute the music" : "Unmute the music"}" title="${state.unmuted ? "Mute the music" : "Unmute the music"}">${state.unmuted ? ICON.sound : ICON.muted}</button>
      <label class="sr" for="vol">Music volume</label><input id="vol" type="range" min="0" max="100" value="${volPct()}"><output id="volout">${volPct()}%</output></div>
    <button class="rbtn rsound ${state.waiting ? "wait" : ""}" type="button" data-toggle="volume" aria-expanded="${state.volOpen}" aria-label="Music volume" title="${state.waiting ? "Click anywhere to start the music" : "Music volume"}">${state.unmuted ? ICON.sound : ICON.muted}</button></div>`;
const refreshSound = () => { const f = document.querySelector(".rail-foot"); if (f) f.innerHTML = soundHtml(); };
function homeToolsHtml() {
  const t = state.scene ? "Turn the background scene off" : "Turn the background scene on";
  return `<button type="button" data-toggle="video" aria-pressed="${state.scene}" aria-label="${t}" title="${t}">${state.scene ? ICON.cam : ICON.camoff}</button>`;
}
const refreshTools = () => { const t = document.querySelector(".h-tools"); if (t) t.innerHTML = homeToolsHtml(); };
const calm = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;   // people who ask for less motion get the still pictures
const sceneBg = (g) => `url('${esc(state.scene && !calm() ? g.scene : g.sceneStill)}'), ${hero(g.h)}`;
function applyScene() {
  const g = gameOf("home"), art = document.querySelector(".h-art"); if (!art) return;
  art.style.backgroundImage = sceneBg(g);
  art.classList.toggle("drift", state.scene && !g.animated);
}
// the music plays on every page, from the start, until someone turns it off. Browsers often refuse sound before the first click, so if that
// happens it waits and starts on the first click, tap or key press
function syncMusic() {
  const a = $("bgm"); if (!a) return;
  if (!a.getAttribute("src")) a.setAttribute("src", HUB.music);
  a.volume = state.vol;
  if (!state.unmuted) { a.pause(); if (state.waiting) { state.waiting = false; refreshSound(); } return; }
  const p = a.play();
  if (p && p.then) p.then(() => { if (state.waiting) { state.waiting = false; refreshSound(); } }).catch(() => { if (!state.waiting) { state.waiting = true; refreshSound(); } });
}

function renderHome(g) {
  const f = g.featured;
  $("home").innerHTML = `<section class="h-hero"><div class="h-art ${state.scene && !g.animated ? "drift" : ""}" style="background-image:${sceneBg(g)}"></div>
      <h2 class="h-title">Home</h2>
      <div class="h-copy"><div class="h-logo"><img src="${esc(calm() ? g.logoStill : g.logoImg)}" alt="${esc(HUB.name)}"></div></div>
      <div class="h-tools">${homeToolsHtml()}</div>
    </section>
    <section class="h-new"><h3>What's New</h3>
      <div class="h-feature"><div class="hf-text"><span class="hf-tag">${esc(f.tag)}</span><h4>${esc(f.title)}</h4><p><a class="hf-link" href="${esc(f.link.href)}" target="_blank" rel="noopener">${esc(f.link.text)}</a></p></div><div class="hf-art" style="background-image:url('${esc(f.image)}')"></div></div>
      <div class="h-row">${cardsHtml(g.news)}</div></section>`;
}

function switchGame(id) {
  if (id === state.game) return;
  state.game = id; state.tab = 0;
  renderRail();
  $("stage").classList.add("fade");
  setTimeout(() => { renderStage(); $("stage").classList.remove("fade"); }, 140);
}

/* ---------------------------------------------------------------- right panel */
const avatar = (m, cls = "") => `<span class="av ${cls}">${m.avatar ? `<img src="${esc(m.avatar)}" alt="">` : ICON.user}${m.status ? `<i class="dot ${m.status}"></i>` : ""}</span>`;
const STATUS_TEXT = { online: "Online", idle: "Away", dnd: "Do not disturb", offline: "Offline" };

function groups() {
  const q = state.q.trim().toLowerCase();
  const list = HUB.members.filter((m) => !q || m.name.toLowerCase().includes(q));
  const playing = {}, online = [], offline = [];
  list.forEach((m) => { if (m.status === "offline") offline.push(m); else if (m.activity) (playing[m.activity] = playing[m.activity] || []).push(m); else online.push(m); });
  const byName = (a, b) => a.name.localeCompare(b.name);
  const out = Object.entries(playing).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).map(([name, ms]) => ({ key: "play-" + name, title: name, game: gameByName(name), members: ms.sort(byName) }));
  if (online.length) out.push({ key: "online", title: "Online", members: online.sort(byName) });
  if (offline.length) out.push({ key: "offline", title: "Offline", off: true, members: offline.sort(byName) });
  return out;
}
function memberRow(m, off) {
  const sub = m.activity ? `${esc(m.details ? m.details : "Playing " + m.activity)}` : m.status === "idle" ? `${ICON.monitor}Away` : esc(STATUS_TEXT[m.status]);
  return `<div class="mem ${off ? "dim" : ""}">${avatar(m, "sm")}<div class="mi"><b>${esc(m.name)}</b><small>${sub}</small></div></div>`;
}
function renderList() {
  const gs = groups();
  $("slist").innerHTML = gs.length ? gs.map((g) => {
    const shut = state.shut[g.key];
    const icon = g.game ? `<span class="gi" style="--c:${esc(g.game.color)}">${esc(g.game.letter)}</span>` : "";
    return `<button class="grp ${g.off ? "off" : ""} ${shut ? "shut" : ""}" type="button" data-grp="${esc(g.key)}">${icon}<span>${esc(g.title)}</span><em>${g.members.length}</em><span class="chev">${ICON.chev}</span></button>${shut ? "" : g.members.map((m) => memberRow(m, g.off)).join("")}`;
  }).join("") : '<div class="empty">Nobody matches that search.</div>';
}
function renderSocial() {
  renderPill();
  const collapse = `<button class="s-collapse" id="collapse" type="button" aria-label="Hide members panel">${ICON.collapse}</button>`;
  if (!state.logged) {
    $("social").innerHTML = `<div class="s-head"><span class="av">${ICON.user}<i class="dot offline"></i></span><div class="who"><b>Not logged in</b><small>Offline</small></div>${collapse}</div>
      <div class="s-login"><div class="big">${ICON.people}</div><h3>Log in</h3><p>Log in to see who is online and what they are playing right now.</p>
        <button class="btn-login" id="login" type="button">Log in</button>
        <small>Preview mode: this shows sample members until Discord login is connected.</small></div>`;
    return;
  }
  const tab = (id, icon, badge) => `<button class="s-tab ${state.ptab === id ? "on" : ""}" type="button" data-ptab="${id}" aria-label="${id}">${ICON[icon]}${badge ? `<span class="badge">${badge}</span>` : ""}</button>`;
  const body = state.ptab === "list"
    ? `<label class="s-search">${ICON.search}<input id="q" type="text" placeholder="Search" autocomplete="off" value="${esc(state.q)}"></label><div class="s-list" id="slist"></div>`
    : `<div class="s-list"><div class="empty">${state.ptab === "chat" ? "Chat is not set up yet." : "Invites and requests will show here."}</div></div>`;
  $("social").innerHTML = `<div class="s-head">${avatar({ status: "online" })}<div class="who"><b>${esc(HUB.user.name)}</b><small>Online</small></div>${collapse}</div>
    <div class="s-tabs">${tab("list", "list")}${tab("chat", "chat")}${tab("invites", "invite", HUB.user.invites)}</div>${body}
    <div class="s-foot"><span class="demo">Sample data</span><button id="logout" type="button">Log out</button></div>`;
  if (state.ptab === "list") renderList();
}
function renderPill() {
  const el = $("reopen");
  if (!state.logged) { el.innerHTML = `<span class="av sm">${ICON.user}<i class="dot offline"></i></span><b class="pl">Log in</b><span class="pi">${ICON.expand}</span>`; return; }
  const playing = HUB.members.filter((m) => m.activity && m.status !== "offline");
  const counts = {}; playing.forEach((m) => (counts[m.activity] = (counts[m.activity] || 0) + 1));
  const top = gameByName((Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || [])[0]);
  const games = playing.length ? `<span class="pi pgame">${top ? `<span class="gi" style="--c:${esc(top.color)}">${esc(top.letter)}</span>` : ""}<b>${playing.length}</b></span>` : "";
  el.innerHTML = `<span class="pi pchat">${ICON.chat}<i class="pbadge">${HUB.user.invites}</i></span>${games}<span class="av sm">${ICON.user}<i class="dot online"></i></span><span class="pi">${ICON.expand}</span>`;
}
function setClosed(v) { state.closed = v; $("app").classList.toggle("closed", v); }

/* ---------------------------------------------------------------- events */
document.addEventListener("click", (e) => {
  const t = (sel) => e.target.closest(sel);
  let el;
  if (state.volOpen && !t(".r-snd")) { state.volOpen = false; refreshSound(); }   // a click anywhere else closes the volume slider
  if ((el = t("[data-game]"))) return switchGame(el.dataset.game);
  if ((el = t("[data-slide]"))) return toGallery(+el.dataset.slide);
  if ((el = t("[data-tab]"))) { state.tab = +el.dataset.tab; return renderStage(); }
  if ((el = t("[data-ptab]"))) { state.ptab = el.dataset.ptab; return renderSocial(); }
  if ((el = t("[data-grp]"))) { state.shut[el.dataset.grp] = !state.shut[el.dataset.grp]; return renderList(); }
  if (t("#login")) { state.logged = true; keep("hub-demo-login", "1"); return renderSocial(); }
  if (t("#logout")) { state.logged = false; state.q = ""; keep("hub-demo-login", "0"); return renderSocial(); }
  if (t("#collapse")) return setClosed(true);
  if (t("#reopen")) return setClosed(false);
  if ((el = t("[data-toggle]"))) {
    const k = el.dataset.toggle;
    if (k === "mute") { state.unmuted = !state.unmuted; keep("hub-muted", state.unmuted ? "0" : "1"); syncMusic(); refreshSound(); }
    else if (k === "volume") { state.volOpen = !state.volOpen; refreshSound(); }
    else { state.scene = !state.scene; applyScene(); refreshTools(); }
    return;
  }
  if (t("#vtoggle")) {
    if (car.on) { car.paused = !car.paused; galleryTimer(); $("vtoggle").innerHTML = car.paused ? ICON.camoff : ICON.cam; }   // pauses or resumes the rotating photos
    else { state.video = !state.video; $("vtoggle").innerHTML = state.video ? ICON.cam : ICON.camoff; }
    return;
  }
  const link = t("a"); if (link && link.getAttribute("href") === "#") e.preventDefault();   // placeholder links go nowhere
});
document.addEventListener("input", (e) => {
  if (e.target.id === "q") { state.q = e.target.value; renderList(); }
  if (e.target.id === "vol") {
    state.vol = e.target.value / 100; keep("hub-vol", String(state.vol));
    if ($("bgm")) $("bgm").volume = state.vol;
    if ($("volout")) $("volout").textContent = e.target.value + "%";
  }
});

setClosed(state.closed);
renderRail(); renderStage(); renderSocial();
bindGallery();
setInterval(updateDays, 60000);   // the days-played number moves on by itself at midnight
syncMusic();
["pointerdown", "keydown", "touchstart"].forEach((ev) => window.addEventListener(ev, () => { if (state.unmuted && $("bgm").paused) syncMusic(); }, { once: true, passive: true }));
// the panel starts hidden on small screens without sliding away on load
setTimeout(() => $("app").classList.remove("boot"), 50);
