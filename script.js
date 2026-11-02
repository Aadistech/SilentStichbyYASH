/* =========================================================
   Silent Stitch Studio — Web Application
   Real-Time Firestore Orders & Direct UPI Payments
   Crafted with love for @silentstitch_studio
   ========================================================= */

const CONFIG = {
  instagram: "silentstitch_studio",
  whatsapp: "910000000000",          // WhatsApp number (country code + digits, e.g. 919876543210)
  email: "silentstitchstudio@gmail.com",
  upiId: "silentstitch@upi",          // GPay/PhonePe/Paytm UPI ID (e.g. name@okhdfcbank, 9876543210@paytm)
  upiName: "Silent Stitch Studio",
  adminPin: "1234",                  // Passcode to unlock Studio Admin Order Manager
  primaryContact: "upi",
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
    rawPrice: 699,
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
    rawPrice: 499,
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
    rawPrice: 349,
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
    rawPrice: 449,
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
const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2800);
}

/* =========================================================
   Contact Links & Footer Initializer
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
   Header & Mobile Menu
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
   Generic Modal Manager
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
   Instagram / Drops Grid
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
          <button class="btn btn-primary" onclick="startCheckout({
            id: '${d.id}',
            title: '${esc(d.label)}',
            price: ${d.rawPrice},
            quantity: 1,
            accents: 'Standard Artisan Finish',
            colorway: 'Original Studio Palette',
            image: '${d.image}'
          })">Pay &amp; Order with UPI 🌸</button>
          <a class="btn btn-ghost" href="${igUrl}" target="_blank" rel="noopener">DM on Instagram ↗</a>
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
   CHECKOUT & UPI PAYMENT ENGINE
   ========================================================= */

let currentCheckoutItem = null;
let currentCheckoutCustomer = null;

function generateOrderId() {
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  return `SS-${dateStr}-${rand}`;
}

/**
 * Step 1: Open checkout modal for customer delivery details
 */
window.startCheckout = function(itemData) {
  currentCheckoutItem = itemData;
  renderCheckoutStep1();
};

function renderCheckoutStep1() {
  const item = currentCheckoutItem;
  openModal(`
    <div class="checkout-wrapper">
      <div class="checkout-header">
        <span class="eyebrow">Checkout · Step 1 of 2</span>
        <h3>Delivery Details</h3>
      </div>

      <div class="checkout-summary-card glass">
        ${item.image ? `<img src="${item.image}" alt="${esc(item.title)}" class="checkout-thumb" />` : ""}
        <div class="checkout-item-details">
          <strong>${esc(item.title)}</strong>
          <span class="muted small">${esc(item.accents || "Standard finish")} · ${esc(item.colorway || "Studio standard")}</span>
          <div class="checkout-qty-price">
            <span class="small">Qty: <strong>${item.quantity || 1}</strong></span>
            <strong class="checkout-price">${money(item.price * (item.quantity || 1))}</strong>
          </div>
        </div>
      </div>

      <form class="checkout-form" id="checkoutForm" onsubmit="event.preventDefault(); proceedToUpiPayment();">
        <div class="field-grid">
          <div class="field full">
            <label for="cName">Full Name *</label>
            <input id="cName" required placeholder="e.g. Aditi Sharma" />
          </div>
          <div class="field">
            <label for="cPhone">WhatsApp / Mobile Number *</label>
            <input id="cPhone" type="tel" required pattern="[0-9]{10}" placeholder="10-digit number" />
          </div>
          <div class="field">
            <label for="cEmail">Email Address (for invoice)</label>
            <input id="cEmail" type="email" placeholder="Optional" />
          </div>
          <div class="field full">
            <label for="cAddress">Complete Shipping Address *</label>
            <textarea id="cAddress" required placeholder="Flat/House No., Building, Street name, Locality..."></textarea>
          </div>
          <div class="field">
            <label for="cCity">City *</label>
            <input id="cCity" required placeholder="e.g. Mumbai, Bengaluru" />
          </div>
          <div class="field">
            <label for="cPincode">Pincode *</label>
            <input id="cPincode" pattern="[0-9]{6}" required placeholder="6-digit pincode" />
          </div>
        </div>

        <div class="checkout-actions">
          <button type="submit" class="btn btn-primary full-width">Proceed to UPI Payment →</button>
        </div>
      </form>
    </div>
  `);
}

/**
 * Step 2: Render UPI payment options (Intent for mobile, Dynamic QR for desktop)
 */
window.proceedToUpiPayment = function() {
  const name = $("#cName").value.trim();
  const phone = $("#cPhone").value.trim();
  const email = $("#cEmail").value.trim();
  const address = $("#cAddress").value.trim();
  const city = $("#cCity").value.trim();
  const pincode = $("#cPincode").value.trim();

  currentCheckoutCustomer = { name, phone, email, address, city, pincode };

  const item = currentCheckoutItem;
  const totalAmount = item.price * (item.quantity || 1);
  const orderId = generateOrderId();

  // NPCI UPI Specification URL
  const upiUrl = `upi://pay?pa=${encodeURIComponent(CONFIG.upiId)}&pn=${encodeURIComponent(CONFIG.upiName)}&am=${totalAmount}&cu=INR&tn=${encodeURIComponent("Order " + orderId)}`;
  
  // Public high-speed QR endpoint
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUrl)}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  openModal(`
    <div class="checkout-wrapper">
      <div class="checkout-header">
        <span class="eyebrow">Checkout · Step 2 of 2</span>
        <h3>Scan &amp; Pay via UPI</h3>
        <p class="muted small">Order ID: <strong class="order-id-highlight">${orderId}</strong></p>
      </div>

      <div class="upi-pay-card glass">
        <div class="upi-amount-pill">
          <span class="muted small">Total to Pay:</span>
          <span class="upi-big-price">${money(totalAmount)}</span>
        </div>

        ${isMobile ? `
          <div class="upi-mobile-box">
            <a href="${upiUrl}" class="btn btn-primary full-width btn-upi-intent">
              <span class="upi-sparkle">⚡</span> Pay with GPay / PhonePe / Paytm
            </a>
            <p class="muted small" style="margin-top:10px;">Tap above to open your UPI app, complete payment, then enter the UTR below.</p>
          </div>
        ` : `
          <div class="upi-qr-box">
            <div class="qr-frame">
              <img src="${qrApiUrl}" alt="Scan UPI QR Code" class="upi-qr-image" />
            </div>
            <p class="small muted">Scan with any UPI app: <strong>Google Pay · PhonePe · Paytm · CRED · BHIM</strong></p>
          </div>
        `}

        <div class="upi-id-pill" onclick="copyUpiId()">
          <span>UPI ID: <strong id="upiDisplay">${CONFIG.upiId}</strong></span>
          <span class="copy-badge">Copy 📋</span>
        </div>

        <div class="field full" style="margin-top:16px;">
          <label for="upiRefInput">UPI Transaction ID / UTR No. (optional)</label>
          <input id="upiRefInput" placeholder="12-digit number from your payment app" />
        </div>

        <button class="btn btn-primary full-width" onclick="finalizeOrder('${orderId}', ${totalAmount})">
          I Have Paid — Confirm Order 🌸
        </button>

        <p class="fine" style="text-align:center;">
          🔒 Once submitted, your order is recorded in real-time to Google Cloud Firestore and live tracking starts immediately.
        </p>
      </div>
    </div>
  `);
};

window.copyUpiId = function() {
  navigator.clipboard.writeText(CONFIG.upiId).then(() => {
    toast("UPI ID copied to clipboard!");
  });
};

/**
 * Step 3: Finalize order and save to Firestore
 */
window.finalizeOrder = async function(orderId, totalAmount) {
  const upiRef = $("#upiRefInput") ? $("#upiRefInput").value.trim() : "";

  const orderData = {
    orderId,
    items: [currentCheckoutItem],
    totalAmount,
    currency: "INR",
    customer: currentCheckoutCustomer,
    payment: {
      method: "UPI",
      status: upiRef ? "PENDING_VERIFICATION" : "PAID",
      upiRef: upiRef || "Direct UPI",
      vpa: CONFIG.upiId,
      paidAt: new Date().toISOString()
    },
    orderStatus: "CONFIRMED", // CONFIRMED | IN_PRODUCTION | DISPATCHED | DELIVERED
    trackingNote: "Order placed and payment received. Crafting in studio will begin shortly.",
  };

  try {
    toast("Recording order in real-time...");
    await saveOrderToFirestore(orderData);
    openLiveTracker(orderId);
  } catch (err) {
    console.error("Order completion error:", err);
    openLiveTracker(orderId);
  }
};

/* =========================================================
   REAL-TIME LIVE ORDER TRACKER
   ========================================================= */

let activeTrackerUnsub = null;

window.openLiveTracker = function(orderId) {
  if (activeTrackerUnsub) {
    activeTrackerUnsub();
    activeTrackerUnsub = null;
  }

  // Update URL hash for easy bookmarking
  history.replaceState(null, "", `#track=${orderId}`);

  openModal(`
    <div class="tracker-wrapper">
      <div class="tracker-header">
        <div class="live-pill"><span class="pulse-dot"></span> Live Firestore Connection</div>
        <h3>Order Status Tracker</h3>
        <p class="muted">Tracking Order: <strong class="order-id-highlight">${orderId}</strong></p>
      </div>
      <div id="trackerLiveContainer" class="glass tracker-card">
        <p class="muted" style="text-align:center;">Connecting to live database...</p>
      </div>
    </div>
  `);

  activeTrackerUnsub = listenToOrder(orderId, (order) => {
    const container = $("#trackerLiveContainer");
    if (!container) return;

    if (!order) {
      container.innerHTML = `
        <div style="text-align:center; padding: 24px;">
          <p>Order not found. Please verify the Order ID.</p>
          <a class="btn btn-ghost" href="#top" data-close>Return to Home</a>
        </div>
      `;
      return;
    }

    const statuses = [
      { key: "CONFIRMED", label: "Order Confirmed", icon: "🌸", desc: "Payment verified & placed into crafting queue." },
      { key: "IN_PRODUCTION", label: "Hand-Crafting", icon: "🪡", desc: "Stitching petals, crochet hooks & accents in progress." },
      { key: "DISPATCHED", label: "Dispatched", icon: "📦", desc: "Packed with gift wrap and handed over to courier." },
      { key: "DELIVERED", label: "Delivered", icon: "✨", desc: "Arrived at your doorstep with love." }
    ];

    const currentIdx = statuses.findIndex(s => s.key === order.orderStatus);
    const activeIdx = currentIdx !== -1 ? currentIdx : 0;

    container.innerHTML = `
      <div class="tracker-stepper">
        ${statuses.map((s, idx) => `
          <div class="stepper-step ${idx <= activeIdx ? 'done' : ''} ${idx === activeIdx ? 'active' : ''}">
            <div class="step-icon-wrap">
              <span class="step-icon">${s.icon}</span>
            </div>
            <div class="step-info">
              <strong>${s.label}</strong>
              <span class="muted small">${s.desc}</span>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="tracker-details">
        <div class="tracker-row">
          <span class="muted">Piece:</span>
          <strong>${esc(order.items[0]?.title || "Bespoke Crochet")}</strong>
        </div>
        <div class="tracker-row">
          <span class="muted">Total Amount:</span>
          <strong class="price-gold">${money(order.totalAmount)}</strong>
        </div>
        <div class="tracker-row">
          <span class="muted">Recipient:</span>
          <span>${esc(order.customer?.name)} · ${esc(order.customer?.city)}</span>
        </div>
        ${order.trackingNote ? `
          <div class="tracker-note">
            <span class="eyebrow">Studio Update:</span>
            <p>${esc(order.trackingNote)}</p>
          </div>
        ` : ""}
      </div>

      <div class="tracker-actions">
        <a class="btn btn-primary full-width" href="${waUrl(`Hi Silent Stitch Studio! I'm checking on my order ${orderId}`)}" target="_blank" rel="noopener">
          Chat on WhatsApp with Studio ↗
        </a>
      </div>
    `;
  });
};

/* Track Order lookup modal */
window.openTrackSearchModal = function() {
  openModal(`
    <div class="checkout-wrapper">
      <div class="checkout-header">
        <span class="eyebrow">Real-Time Tracking</span>
        <h3>Find Your Order</h3>
        <p class="muted small">Enter your Order ID received during payment (e.g. SS-2601-ABCD).</p>
      </div>

      <form onsubmit="event.preventDefault(); const val = $('#trackIdInput').value.trim(); if(val) openLiveTracker(val);" style="margin-top:20px;">
        <div class="field full">
          <label for="trackIdInput">Order ID</label>
          <input id="trackIdInput" required placeholder="SS-..." />
        </div>
        <div style="margin-top:16px;">
          <button type="submit" class="btn btn-primary full-width">Track Order Status 🔍</button>
        </div>
      </form>
    </div>
  `);
};

$("#navTrack")?.addEventListener("click", (e) => { e.preventDefault(); openTrackSearchModal(); });
$("#navTrackMobile")?.addEventListener("click", (e) => { e.preventDefault(); openTrackSearchModal(); });
$("#footTrack")?.addEventListener("click", (e) => { e.preventDefault(); openTrackSearchModal(); });

// Auto-open live tracker if URL has hash #track=SS-...
if (window.location.hash.startsWith("#track=")) {
  const oId = window.location.hash.replace("#track=", "").trim();
  if (oId) setTimeout(() => openLiveTracker(oId), 400);
}

/* =========================================================
   STUDIO ADMIN ORDER MANAGER (PIN Protected)
   ========================================================= */

window.openAdminModal = function() {
  openModal(`
    <div class="checkout-wrapper">
      <div class="checkout-header">
        <span class="eyebrow">Studio Portal</span>
        <h3>Studio Admin Unlock</h3>
        <p class="muted small">Enter studio PIN to view live orders and manage tracking.</p>
      </div>

      <form onsubmit="event.preventDefault(); verifyAdminPin();" style="margin-top:20px;">
        <div class="field full">
          <label for="adminPinInput">Studio Passcode</label>
          <input id="adminPinInput" type="password" required placeholder="Default: 1234" />
        </div>
        <div style="margin-top:16px;">
          <button type="submit" class="btn btn-primary full-width">Unlock Orders Dashboard 🔐</button>
        </div>
      </form>
    </div>
  `);
};

window.verifyAdminPin = function() {
  const pin = $("#adminPinInput").value.trim();
  if (pin === CONFIG.adminPin) {
    renderAdminDashboard();
  } else {
    toast("Incorrect PIN. Please try again.");
  }
};

let activeAdminUnsub = null;

function renderAdminDashboard() {
  if (activeAdminUnsub) activeAdminUnsub();

  openModal(`
    <div class="admin-dashboard-wrapper">
      <div class="checkout-header" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="eyebrow">Real-Time Studio Feed</span>
          <h3>Live Orders Manager</h3>
        </div>
        <button class="btn btn-sm btn-ghost" onclick="renderAdminDashboard()">Refresh 🔄</button>
      </div>

      <div id="adminOrdersFeed" style="margin-top:20px;">
        <p class="muted" style="text-align:center;">Loading real-time orders...</p>
      </div>
    </div>
  `);

  activeAdminUnsub = listenToAllOrders((orders) => {
    const feed = $("#adminOrdersFeed");
    if (!feed) return;

    if (!orders || !orders.length) {
      feed.innerHTML = `<p class="muted" style="text-align:center; padding: 30px;">No orders found yet. New orders will appear here in real-time!</p>`;
      return;
    }

    feed.innerHTML = orders.map((o) => `
      <div class="admin-order-card glass">
        <div class="admin-order-header">
          <div>
            <strong class="order-id-highlight">${o.orderId}</strong>
            <span class="small muted"> · ${new Date(o.createdAt || Date.now()).toLocaleDateString()}</span>
          </div>
          <span class="status-badge ${o.orderStatus?.toLowerCase()}">${o.orderStatus}</span>
        </div>

        <div class="admin-order-body">
          <div class="admin-col">
            <span class="small muted">Customer:</span>
            <strong>${esc(o.customer?.name)} (${esc(o.customer?.phone)})</strong>
            <p class="small">${esc(o.customer?.address)}, ${esc(o.customer?.city)} - ${esc(o.customer?.pincode)}</p>
          </div>
          <div class="admin-col">
            <span class="small muted">Item &amp; Total:</span>
            <strong>${esc(o.items?.[0]?.title || "Crochet piece")} (Qty: ${o.items?.[0]?.quantity || 1})</strong>
            <strong class="price-gold">${money(o.totalAmount)}</strong>
            <span class="small muted">Ref: ${esc(o.payment?.upiRef || "UPI")}</span>
          </div>
        </div>

        <div class="admin-order-footer">
          <label class="small muted">Change Status:
            <select class="admin-status-select" onchange="changeOrderStatus('${o.orderId}', this.value)">
              <option value="CONFIRMED" ${o.orderStatus === "CONFIRMED" ? "selected" : ""}>🌸 Order Confirmed</option>
              <option value="IN_PRODUCTION" ${o.orderStatus === "IN_PRODUCTION" ? "selected" : ""}>🪡 In Production</option>
              <option value="DISPATCHED" ${o.orderStatus === "DISPATCHED" ? "selected" : ""}>📦 Dispatched</option>
              <option value="DELIVERED" ${o.orderStatus === "DELIVERED" ? "selected" : ""}>✨ Delivered</option>
            </select>
          </label>
          <a class="btn btn-sm btn-ghost" href="${waUrl(`Hi ${o.customer?.name}! This is Silent Stitch Studio regarding your order ${o.orderId}`)}" target="_blank">
            Chat on WhatsApp ↗
          </a>
        </div>
      </div>
    `).join("");
  });
}

window.changeOrderStatus = async function(orderId, newStatus) {
  toast(`Updating status to ${newStatus}...`);
  await updateOrderStatus(orderId, newStatus);
  toast("Order updated live!");
};

$("#footAdmin")?.addEventListener("click", openAdminModal);

/* =========================================================
   Offer Cards
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
    <a class="btn btn-primary" href="#estimator" data-close>Design a Custom Order 🌸</a>`);
});

/* =========================================================
   Estimator Wizard with Instant UPI Checkout
   ========================================================= */
const S = { step: 0, item: null, style: null, text: "", placement: PLACEMENTS[0], thread: THREADS[0], qty: 1, name: "", notes: "" };
const STEP_LABELS = ["Step 1 of 4 · Item", "Step 2 of 4 · Crochet accents", "Step 3 of 4 · Details & color", "Step 4 of 4 · Review & order"];

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
    html = `<h3>Review your custom request</h3>
      <dl class="summary">
        <div><dt>Piece</dt><dd>${esc(e.item.name)}</dd></div>
        <div><dt>Style / Accents</dt><dd>${esc(e.style.name)}</dd></div>
        <div><dt>Colorway</dt><dd>${esc(S.thread)}</dd></div>
        <div><dt>Format / Type</dt><dd>${esc(S.placement)}</dd></div>
        <div><dt>Quantity</dt><dd>${S.qty}${e.disc ? ` (${e.disc * 100}% set discount)` : ""}</dd></div>
        <div><dt>Total Estimate</dt><dd><strong class="estimate-highlight">${money(e.total)}</strong></dd></div>
      </dl>
      
      <div class="send-grid" style="grid-template-columns: 1fr;">
        <button class="btn btn-primary" onclick="startCheckout({
          id: '${e.item.id}',
          title: '${esc(e.item.name)} (Custom)',
          price: ${Math.round(e.total / S.qty)},
          quantity: ${S.qty},
          accents: '${esc(e.style.name)}',
          colorway: '${esc(S.thread)}',
          image: 'assets/logo.png'
        })">Proceed to Checkout &amp; Pay via UPI 🌸</button>
      </div>

      <div style="display:flex; justify-content:center; gap:14px; margin-top:14px;">
        <a class="muted small" href="${igUrl}" target="_blank">or send via Instagram DM ↗</a>
        <a class="muted small" href="${waUrl(`Hi! I'd like a custom order: ${e.item.name}`)}" target="_blank">or chat on WhatsApp ↗</a>
      </div>`;
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
   Craftsmanship Tabs & Stitch Density Widget
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
   Testimonials Slider
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
   Reveal Observer
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observe(el) { observer.observe(el); }
$$(".reveal").forEach(observe);
