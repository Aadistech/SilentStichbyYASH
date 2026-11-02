/* =========================================================
   Silent Stitch Studio — script
   Crafted with love for @silentstitch_studio
   ========================================================= */
const CONFIG = {
  instagram: "silentstitch_studio",
  whatsapp: "910000000000",          // WhatsApp number (country code + digits, e.g. 919876543210)
  email: "silentstitchstudio@gmail.com",
  primaryContact: "instagram",        // "whatsapp" | "instagram" | "email"
  currency: "₹",
};

/* ---------- REAL STUDIO DROPS & PIECES ---------- */
const DROPS = [
  {
    id: "gajra",
    label: "Gajra Mohabbat Wala",
    tag: "Festive & Bridal",
    caption: "Everlasting white crochet floral gajra with pearl accents. Inspired by traditional jasmine blooms — made to treasure forever.",
    price: "₹699",
    image: "assets/drops/crochet-gajra.jpg",
    badge: "Bestseller",
    details: "Handmade with soft milk cotton yarn, delicate pearl beads, and adjustable secure tie cord. Never wilts, completely washable, and lightweight."
  },
  {
    id: "lotus",
    label: "Lotus Bloom Hairpiece",
    tag: "Hair Accessory",
    caption: "Layered crochet lotus petals with delicate pearl center & dangling tassel bells. Adds royal elegance to festive hairstyles.",
    price: "₹499",
    image: "assets/drops/lotus-hair-accessory.jpg",
    badge: "Handmade",
    details: "Sculpted petal layers in blush rose, magenta and cream with lustrous pearl center and twin braided cords ending in crochet bell drops."
  },
  {
    id: "evil-eye",
    label: "Nazar Evil Eye Charm",
    tag: "Charm & Keyring",
    caption: "Classic royal blue crochet evil eye with scalloped edge, protective nazar eye, pearl bead, and lush flowing tassel.",
    price: "₹349",
    image: "assets/drops/evil-eye-charm.jpg",
    badge: "Protection",
    details: "Deep royal blue outer scalloped petals with concentric white, mint, and noir pupil. Finished with silver key ring and flowing silky yarn tassel."
  },
  {
    id: "love-charms",
    label: "Love Letter & Heart Charms",
    tag: "Bag Charm / Keyring",
    caption: "Small charms, big joy: plush crochet heart, dainty pink bow, and woven love envelope with mini heart charm.",
    price: "₹449",
    image: "assets/drops/love-charms-keychain.jpg",
    badge: "Gift Favorite",
    details: "Set of 3 charming elements: 3D puffy stuffed heart, ribbon bow, and miniature envelope with heart appliqué. Perfect gift for yourself or loved ones."
  }
];

const OFFERS = [
  {
    id: "hair",
    title: "Crochet Hair Accessories",
    blurb: "From eternal blooming gajras to delicate lotus hairpins, designed to elevate festive and everyday hairstyles.",
    points: ["Everlasting floral gajras", "Lotus & floral hair clips", "Custom color matching for outfits"],
    detail: "Hand-crocheted with skin-friendly yarns and pearl accents. Unlike real flowers, these bloom forever and become keepsake heirlooms.",
    items: [["Material", "Soft cotton & micro-acrylic yarn with faux pearls."], ["Customization", "Choose your petal colors, tassel length and clip type."], ["Lead time", "2-4 days handcrafted with care."]],
    angle: "120deg",
  },
  {
    id: "charms",
    title: "Amulets, Charms & Keyrings",
    blurb: "Whimsical evil eye protectors, love letter envelopes, and plush hearts to clip onto your favorite bags and keys.",
    points: ["Evil eye / Nazar amulets with tassels", "Love letter & heart keyrings", "Mini bow & mascot charms"],
    detail: "Lightweight, washable, and intensely detailed. Perfect personal gifts for best friends, loved ones, and yourself.",
    items: [["Details", "Stitched eyes, textured petals, and reinforced keyrings."], ["Gifting", "Packaged with studio tags, ready to gift."], ["Custom charms", "Initials and custom colorways available."]],
    angle: "75deg",
  },
  {
    id: "bespoke",
    title: "Custom Atelier Orders",
    blurb: "Have a design in mind? Share your reference photo or vision and we'll hand-crochet it into reality.",
    points: ["Bespoke color palettes", "Custom flowers and bouquets", "Personalized gifts & wedding favors"],
    detail: "We work with you one-on-one on WhatsApp or Instagram DM to pick shades, stitches, and accents.",
    items: [["Consultation", "Send your reference image and color requirements."], ["Preview", "We share work-in-progress photos before dispatching."], ["Delivery", "Packed securely and shipped across India."]],
    angle: "150deg",
  },
];

const ITEMS = [
  { id: "gajra", name: "Floral Gajra (Everlasting)", base: 699 },
  { id: "lotus", name: "Lotus Hairpiece / Clip", base: 499 },
  { id: "evil-eye", name: "Evil Eye Nazar Charm", base: 349 },
  { id: "charms", name: "Love Letter & Heart Keyring", base: 449 },
  { id: "bouquet", name: "Crochet Blossom Stem / Bunch", base: 399 },
  { id: "custom", name: "Custom Handmade Design", base: 450 },
];

const STYLES = [
  { id: "pearls", name: "Pearl & Bead Accents", add: 99, desc: "Lustrous pearl droplets & centerpieces" },
  { id: "tassel", name: "Plush Flowing Tassel", add: 80, desc: "Handcrafted matching yarn tassel" },
  { id: "layered", name: "Multi-layered Petals", add: 120, desc: "Two-tone 3D sculpted crochet stitch" },
  { id: "giftbox", name: "Gift Box Packaging", add: 75, desc: "Studio box with ribbon & handwritten note" },
];

const PLACEMENTS = ["Hair Accessory / Clip", "Bag Charm / Keychain", "Floral Gajra", "Car Hanging / Amulet", "Custom placement"];
const THREADS = ["Rose Pink & Cream", "Royal Blue & Mint", "Pearl White", "Pastel Lavender", "Olive & Sage", "Custom colorway"];

const CRAFT = [
  { id: "yarn", name: "Premium Soft Yarns", text: "We hand-select pill-resistant, vibrant cotton & acrylic yarns that hold their shape and keep rich color over years.", stat: "100%", unit: "Hand-selected fiber" },
  { id: "hook", name: "Tight Tension Hooking", text: "Every petal, leaf, and charm is hooked with meticulous stitch density so it never loosens or deforms.", stat: "±0.2mm", unit: "Stitch consistency" },
  { id: "pearl", name: "Hand-Secured Pearls", text: "Each pearl, bead, and bell is individually double-knotted and reinforced for lifelong durability.", stat: "By hand", unit: "Every detail locked" },
  { id: "keepsake", name: "Everlasting Flowers", text: "Unlike natural flowers that fade in hours, our crochet creations remain as fresh as the day they were crafted.", stat: "Forever", unit: "Keepsake heirloom" },
];

const TESTIMONIALS = [
  { name: "Pooja S.", place: "Mumbai", quote: "The crochet gajra is so stunning! I wore it for my brother's wedding and received non-stop compliments. It looks so fresh and elegant." },
  { name: "Ananya R.", place: "Bengaluru", quote: "Ordered the lotus hair charm and the evil eye keychain. The tension and stitch quality are incredible. Truly feels made with immense love!" },
  { name: "Meera K.", place: "Delhi", quote: "Gifted the love letter charm to my best friend. The packaging and tiny details made her tear up. Silent Stitch Studio is my go-to for gifts now!" },
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => CONFIG.currency + Math.round(n).toLocaleString("en-IN");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================
   Contact links
   ========================================================= */
const igUrl = `https://instagram.com/${CONFIG.instagram}`;
const igDm = `https://ig.me/m/${CONFIG.instagram}`;
const waUrl = (text = "") => `https://wa.me/${CONFIG.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const mailUrl = (subject = "Custom order enquiry", body = "") =>
  `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

$("#followBanner").href = igUrl;
$("#footWhatsapp").href = waUrl();
$("#footInstagram").href = igDm;
$("#footEmail").href = mailUrl();
$("#socIg").href = igUrl;
$("#socWa").href = waUrl();
$("#socMail").href = mailUrl();
$("#year").textContent = new Date().getFullYear();

/* =========================================================
   Header & Mobile menu
   ========================================================= */
const header = $(".site-header");
const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

function toggleMenu(open) {
  const is = open !== undefined ? open : mobileMenu.hidden;
  mobileMenu.hidden = !is;
  menuBtn.setAttribute("aria-expanded", String(is));
}
menuBtn.addEventListener("click", () => toggleMenu());
mobileMenu.addEventListener("click", (e) => {
  if (e.target.matches("a")) toggleMenu(false);
});

/* =========================================================
   Modal
   ========================================================= */
const modal = $("#modal");
const modalBody = $("#modalBody");

function openModal(contentHtml) {
  modalBody.innerHTML = contentHtml;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.hidden = true;
  modalBody.innerHTML = "";
  document.body.style.overflow = "";
}
modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* =========================================================
   Instagram / Studio grid
   ========================================================= */
$("#dropsGrid").innerHTML = DROPS.map((d, i) => `
  <article class="tile reveal" data-i="${i}" tabindex="0" role="button" aria-label="${esc(d.label)} — ${esc(d.tag)}">
    <div class="tile-img-container">
      <img src="${esc(d.image)}" alt="${esc(d.label)}" class="tile-img" loading="lazy" />
      <div class="tile-top">
        <span class="tile-tag">${esc(d.tag)}</span>
        ${d.badge ? `<span class="tile-badge">${esc(d.badge)}</span>` : ""}
      </div>
    </div>
    <div class="tile-cap">
      <div class="tile-meta-row">
        <h3 class="tile-label">${esc(d.label)}</h3>
        <span class="tile-price">${esc(d.price)}</span>
      </div>
      <p class="tile-desc">${esc(d.caption)}</p>
      <span class="tile-action">View piece &amp; order ↗</span>
    </div>
  </article>`).join("");

$("#dropsGrid").addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (!tile) return;
  const d = DROPS[+tile.dataset.i];
  openModal(`
    <div class="modal-product-view">
      <div class="modal-img-wrap">
        <img src="${esc(d.image)}" alt="${esc(d.label)}" class="modal-product-img" />
      </div>
      <div class="modal-info">
        <div class="modal-meta-row">
          <span class="tile-tag">${esc(d.tag)}</span>
          ${d.badge ? `<span class="tile-badge">${esc(d.badge)}</span>` : ""}
        </div>
        <h3 class="modal-title">${esc(d.label)}</h3>
        <div class="modal-price-row">
          <span class="modal-price-val">${esc(d.price)}</span>
          <span class="modal-price-tag">Handcrafted to order</span>
        </div>
        <p class="modal-caption">${esc(d.caption)}</p>
        ${d.details ? `<p class="modal-subtext">${esc(d.details)}</p>` : ""}
        <div class="modal-perks">
          <div class="perk"><span class="perk-icon">🌸</span> Everlasting keepsake</div>
          <div class="perk"><span class="perk-icon">🪡</span> 100% handmade crochet</div>
          <div class="perk"><span class="perk-icon">🎁</span> Studio gift-ready packaging</div>
        </div>
        <div class="modal-actions">
          <a class="btn btn-primary" href="${igUrl}" target="_blank" rel="noopener">Order on Instagram DM ↗</a>
          <a class="btn btn-ghost" href="${waUrl(`Hi Silent Stitch Studio! I'd like to order: ${d.label} (${d.price})`)}" target="_blank" rel="noopener">WhatsApp Studio</a>
        </div>
      </div>
    </div>`);
});

$("#dropsGrid").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    e.target.closest(".tile")?.click();
  }
});

/* =========================================================
   Offer cards
   ========================================================= */
$("#offerCards").innerHTML = OFFERS.map((o, i) => `
  <article class="card glass reveal" style="--angle:${o.angle}">
    <span class="card-num">0${i + 1}</span>
    <h3>${esc(o.title)}</h3>
    <p>${esc(o.blurb)}</p>
    <ul>${o.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    <button class="link-btn" data-offer="${o.id}">Explore details →</button>
  </article>`).join("");

$("#offerCards").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-offer]");
  if (!btn) return;
  const o = OFFERS.find((x) => x.id === btn.dataset.offer);
  openModal(`
    <p class="eyebrow">${esc(o.title)}</p>
    <h3>${esc(o.title)}</h3>
    <p>${esc(o.detail)}</p>
    <ul>${o.items.map(([k, v]) => `<li><strong>${esc(k)}</strong><span>${esc(v)}</span></li>`).join("")}</ul>
    <a class="btn btn-primary" href="#estimator" data-close>Order this custom</a>`);
});

/* =========================================================
   Estimator wizard
   ========================================================= */
const S = { step: 0, item: null, style: null, text: "", placement: PLACEMENTS[0], thread: THREADS[0], qty: 1, name: "", notes: "" };
const STEP_LABELS = ["Step 1 of 4 · Item", "Step 2 of 4 · Crochet accents", "Step 3 of 4 · Details & color", "Step 4 of 4 · Review & send"];

function estimate() {
  const item = ITEMS.find((i) => i.id === S.item);
  const style = STYLES.find((s) => s.id === S.style);
  if (!item || !style) return null;
  const textAdd = S.text.trim() ? Math.min(S.text.trim().length, 30) * 8 : 0;
  let unit = item.base + style.add + textAdd;
  const disc = S.qty >= 10 ? 0.1 : S.qty >= 5 ? 0.05 : 0;
  const total = unit * S.qty * (1 - disc);
  return { item, style, total, low: total * 0.95, high: total * 1.05, disc };
}

function buildMessage() {
  const e = estimate();
  return [
    "Hi Silent Stitch Studio! I'd like to place a custom crochet order:",
    `• Piece: ${e.item.name}`,
    `• Style/Accents: ${e.style.name}`,
    `• Colorway: ${S.thread}`,
    `• Type / Placement: ${S.placement}`,
    S.text.trim() ? `• Custom initial / word: ${S.text.trim()}` : null,
    `• Quantity: ${S.qty}`,
    S.notes.trim() ? `• Notes / References: ${S.notes.trim()}` : null,
    `• Indicative estimate: ${money(e.low)} – ${money(e.high)}`,
    S.name.trim() ? `\nFrom: ${S.name.trim()}` : null,
  ].filter(Boolean).join("\n");
}

const panel = $("#stepPanel");
const backBtn = $("#backBtn");
const nextBtn = $("#nextBtn");

function renderStep() {
  $("#progressBar").style.width = ((S.step + 1) / 4) * 100 + "%";
  $("#stepLabel").textContent = STEP_LABELS[S.step];
  backBtn.style.visibility = S.step === 0 ? "hidden" : "visible";
  nextBtn.hidden = S.step === 3;

  let html = "";
  if (S.step === 0) {
    html = `<h3>What should we crochet for you?</h3><div class="options">${ITEMS.map((i) => `
      <button class="option" data-pick="item" data-id="${i.id}" aria-pressed="${S.item === i.id}">
        <strong>${esc(i.name)}</strong><span>from ${money(i.base)}</span></button>`).join("")}</div>`;
  } else if (S.step === 1) {
    html = `<h3>Choose your artisan accents</h3><div class="options">${STYLES.map((s) => `
      <button class="option" data-pick="style" data-id="${s.id}" aria-pressed="${S.style === s.id}">
        <strong>${esc(s.name)}</strong><span>${esc(s.desc)}</span></button>`).join("")}</div>`;
  } else if (S.step === 2) {
    html = `<h3>Choose your colors &amp; custom specs</h3>
      <div class="field-grid">
        <div class="field full"><label for="fText">Custom initials / letter tag (optional)</label>
          <input id="fText" maxlength="40" value="${esc(S.text)}" placeholder="e.g. 'A' or 'Forever'" /></div>
        <div class="field"><label for="fPlace">Type / Placement</label>
          <select id="fPlace">${PLACEMENTS.map((p) => `<option ${p === S.placement ? "selected" : ""}>${esc(p)}</option>`).join("")}</select></div>
        <div class="field"><label for="fThread">Yarn Colorway</label>
          <select id="fThread">${THREADS.map((p) => `<option ${p === S.thread ? "selected" : ""}>${esc(p)}</option>`).join("")}</select></div>
        <div class="field"><label for="fQty">Quantity</label>
          <input id="fQty" type="number" min="1" max="50" value="${S.qty}" /></div>
        <div class="field"><label for="fName">Your Name</label>
          <input id="fName" value="${esc(S.name)}" placeholder="Optional" /></div>
        <div class="field full"><label for="fNotes">Special requests / outfit matching notes</label>
          <textarea id="fNotes" placeholder="Tell us about color shades, preferred clip type, or event date...">${esc(S.notes)}</textarea></div>
      </div>`;
  } else {
    const e = estimate();
    const order = { instagram: 0, whatsapp: 1, email: 2 };
    const btns = [
      ["instagram", "Send via Instagram DM ↗"],
      ["whatsapp", "Send on WhatsApp ↗"],
      ["email", "Send by Email ↗"],
    ].sort((a, b) => (a[0] === CONFIG.primaryContact ? -1 : b[0] === CONFIG.primaryContact ? 1 : order[a[0]] - order[b[0]]));
    html = `<h3>Review your custom request</h3>
      <dl class="summary">
        <div><dt>Piece</dt><dd>${esc(e.item.name)}</dd></div>
        <div><dt>Style / Accents</dt><dd>${esc(e.style.name)}</dd></div>
        <div><dt>Colorway</dt><dd>${esc(S.thread)}</dd></div>
        <div><dt>Format / Type</dt><dd>${esc(S.placement)}</dd></div>
        <div><dt>Quantity</dt><dd>${S.qty}${e.disc ? ` (${e.disc * 100}% set discount)` : ""}</dd></div>
        <div><dt>Indicative estimate</dt><dd><strong class="estimate-highlight">${money(e.low)} – ${money(e.high)}</strong></dd></div>
      </dl>
      <div class="send-grid">${btns.map(([k, label]) => `
        <button class="btn ${k === CONFIG.primaryContact ? "btn-primary" : "btn-ghost"}" data-send="${k}">${label}</button>`).join("")}</div>
      <p class="fine">Estimates are indicative. We confirm exact shade matching and finalize before crafting begins.
      When sending via Instagram DM, we copy your details to the clipboard for easy pasting.</p>`;
  }
  panel.innerHTML = html;
  panel.style.animation = "none"; panel.offsetHeight; panel.style.animation = "";
  updateFooter();
}

function updateFooter() {
  const e = estimate();
  const box = $("#estimateBox");
  box.hidden = !e || S.step === 3;
  if (e) $("#estimateValue").textContent = `${money(e.low)} – ${money(e.high)}`;
  const ok = S.step === 0 ? !!S.item : S.step === 1 ? !!S.style : S.qty >= 1;
  nextBtn.disabled = !ok;
}

panel.addEventListener("click", (e) => {
  const pick = e.target.closest("[data-pick]");
  if (pick) {
    S[pick.dataset.pick] = pick.dataset.id;
    $$(`[data-pick="${pick.dataset.pick}"]`, panel).forEach((b) => b.setAttribute("aria-pressed", String(b === pick)));
    updateFooter();
    return;
  }
  const send = e.target.closest("[data-send]");
  if (send) {
    const k = send.dataset.send;
    const msg = buildMessage();
    if (k === "whatsapp") {
      window.open(waUrl(msg), "_blank");
    } else if (k === "instagram") {
      navigator.clipboard?.writeText(msg).then(
        () => toast("Request copied! Paste into Instagram DM."),
        () => {}
      );
      window.open(igDm, "_blank");
    } else if (k === "email") {
      window.location.href = mailUrl("Custom crochet order request", msg);
    }
  }
});

panel.addEventListener("input", (e) => {
  const t = e.target;
  if (t.id === "fText") S.text = t.value;
  if (t.id === "fPlace") S.placement = t.value;
  if (t.id === "fThread") S.thread = t.value;
  if (t.id === "fQty") S.qty = Math.max(1, parseInt(t.value) || 1);
  if (t.id === "fName") S.name = t.value;
  if (t.id === "fNotes") S.notes = t.value;
  updateFooter();
});

nextBtn.addEventListener("click", () => {
  if (S.step < 3) { S.step++; renderStep(); }
});
backBtn.addEventListener("click", () => {
  if (S.step > 0) { S.step--; renderStep(); }
});
renderStep();

/* =========================================================
   Craftsmanship tabs
   ========================================================= */
const tabsEl = $("#craftTabs");
const craftPanel = $("#craftPanel");
tabsEl.innerHTML = CRAFT.map((c, i) => `
  <button class="craft-tab" role="tab" id="tab-${c.id}" aria-selected="${i === 0}" aria-controls="craftPanel" data-id="${c.id}">
    ${esc(c.name)}
  </button>`).join("");

function showCraft(id) {
  const c = CRAFT.find((x) => x.id === id);
  $$(".craft-tab", tabsEl).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.id === id)));
  craftPanel.innerHTML = `
    <p class="eyebrow">Studio technique</p>
    <h3>${esc(c.name)}</h3>
    <p>${esc(c.text)}</p>
    <div class="craft-stat">${esc(c.stat)}<small>${esc(c.unit)}</small></div>`;
  craftPanel.style.animation = "none"; craftPanel.offsetHeight; craftPanel.style.animation = "";
}
tabsEl.addEventListener("click", (e) => {
  const t = e.target.closest(".craft-tab");
  if (t) showCraft(t.dataset.id);
});
showCraft(CRAFT[0].id);

/* Stitch density interactive widget */
const range = $("#densityRange");
function updateDensity() {
  const v = +range.value;
  $("#densityValue").textContent = v;
  $("#stitchSample").style.setProperty("--gap", Math.round(220 / v) + "px");
  $("#densityNote").textContent = v < 10 ? "· loose weave" : v < 16 ? "· studio standard" : "· tight luxury tension";
}
range.addEventListener("input", updateDensity);
updateDensity();

/* =========================================================
   Testimonials slider
   ========================================================= */
const slidesEl = $("#slides");
const dotsEl = $("#dots");
slidesEl.innerHTML = TESTIMONIALS.map((t, i) => `
  <figure class="slide glass ${i === 0 ? "active" : ""}" aria-hidden="${i !== 0}" style="margin:0">
    <blockquote>"${esc(t.quote)}"</blockquote>
    <figcaption class="who">
      <span class="avatar">${esc(t.name[0])}</span>
      <span><strong>${esc(t.name)}</strong><br /><span class="muted">${esc(t.place)}</span></span>
    </figcaption>
  </figure>`).join("");

dotsEl.innerHTML = TESTIMONIALS.map((_, i) => `<button class="dot-btn ${i === 0 ? "active" : ""}" data-i="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join("");

$("#clientPhotos").innerHTML = [
  { img: "assets/drops/lotus-hair-accessory.jpg", cap: "Lotus Clip in hair" },
  { img: "assets/drops/crochet-gajra.jpg", cap: "Bridal floral gajra" },
  { img: "assets/drops/evil-eye-charm.jpg", cap: "Evil eye on window" },
  { img: "assets/drops/love-charms-keychain.jpg", cap: "Love charms keychain" }
].map((p) => `
  <div class="client-photo" style="background-image:url('${p.img}');background-size:cover;background-position:center;">
    <span class="client-photo-tag">${esc(p.cap)}</span>
  </div>`).join("");

let cur = 0, timer;
function goTo(n) {
  cur = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
  $$(".slide", slidesEl).forEach((s, i) => { s.classList.toggle("active", i === cur); s.setAttribute("aria-hidden", String(i !== cur)); });
  $$(".dot-btn", dotsEl).forEach((d, i) => d.classList.toggle("active", i === cur));
}
function auto() { clearInterval(timer); timer = setInterval(() => goTo(cur + 1), 6500); }
$("#prevSlide").addEventListener("click", () => { goTo(cur - 1); auto(); });
$("#nextSlide").addEventListener("click", () => { goTo(cur + 1); auto(); });
dotsEl.addEventListener("click", (e) => { const d = e.target.closest(".dot-btn"); if (d) { goTo(+d.dataset.i); auto(); } });
$("#slider").addEventListener("mouseenter", () => clearInterval(timer));
$("#slider").addEventListener("mouseleave", auto);
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) auto();

/* =========================================================
   Reveal observer
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observe(el) {
  observer.observe(el);
}
$$(".reveal").forEach(observe);
