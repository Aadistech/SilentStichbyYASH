// =========================================================
// Silent Stitch Studio — Firebase & Firestore Integration
// Real-time Order Management & Live Tracking
// =========================================================

// Paste your Firebase Web App credentials below:
// (Found in Firebase Console -> Project Settings -> General -> Your apps -> Web app)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "silentstitch-studio.firebaseapp.com",
  projectId: "silentstitch-studio",
  storageBucket: "silentstitch-studio.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// State flag to detect whether live Firebase credentials have been configured
const isLiveFirebaseConfigured = () => {
  return FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.includes("YOUR_API_KEY_HERE");
};

let db = null;

// Initialize Firebase if configured
if (isLiveFirebaseConfigured() && typeof firebase !== "undefined") {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    db = firebase.firestore();
    console.log("🌸 Connected to live Google Cloud Firestore!");
  } catch (err) {
    console.warn("Firebase initialization notice:", err);
  }
}

// Local storage fallback order store (for instant zero-setup testing & offline simulation)
const LOCAL_ORDERS_KEY = "silentstitch_local_orders";
function getLocalOrders() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_ORDERS_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function setLocalOrders(orders) {
  localStorage.setItem(LOCAL_ORDERS_KEY, JSON.stringify(orders));
  // Notify any active local listeners
  window.dispatchEvent(new CustomEvent("silentstitch_order_updated"));
}

/**
 * Save a new order to Cloud Firestore (with local fallback)
 * @param {Object} orderData
 * @returns {Promise<string>} orderId
 */
async function saveOrderToFirestore(orderData) {
  // Add server timestamps
  const order = {
    ...orderData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (db) {
    try {
      await db.collection("orders").doc(order.orderId).set(order);
      console.log("✅ Order saved to Cloud Firestore:", order.orderId);
      return order.orderId;
    } catch (err) {
      console.error("Firestore write failed, falling back to local store:", err);
    }
  }

  // Fallback to local storage
  const existing = getLocalOrders();
  existing.unshift(order);
  setLocalOrders(existing);
  console.log("💾 Order stored in local reactive store:", order.orderId);
  return order.orderId;
}

/**
 * Real-time listener for a single order (Customer Live Tracker)
 * @param {string} orderId
 * @param {function} onUpdate Callback receiving order document
 * @returns {function} Unsubscribe function
 */
function listenToOrder(orderId, onUpdate) {
  if (db) {
    const unsub = db.collection("orders").doc(orderId).onSnapshot((doc) => {
      if (doc.exists) {
        onUpdate(doc.data());
      } else {
        onUpdate(null);
      }
    }, (err) => {
      console.error("Firestore listener error:", err);
    });
    return unsub;
  }

  // Local real-time emulation
  const handler = () => {
    const orders = getLocalOrders();
    const found = orders.find((o) => o.orderId === orderId);
    onUpdate(found || null);
  };

  // Initial trigger
  handler();
  window.addEventListener("silentstitch_order_updated", handler);
  return () => window.removeEventListener("silentstitch_order_updated", handler);
}

/**
 * Real-time listener for all orders (Studio Admin Dashboard)
 * @param {function} onUpdate Callback receiving array of orders
 * @returns {function} Unsubscribe function
 */
function listenToAllOrders(onUpdate) {
  if (db) {
    const unsub = db.collection("orders").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
      const orders = [];
      snapshot.forEach((doc) => orders.push(doc.data()));
      onUpdate(orders);
    }, (err) => {
      console.error("Firestore admin listener error:", err);
    });
    return unsub;
  }

  // Local real-time emulation
  const handler = () => {
    onUpdate(getLocalOrders());
  };
  handler();
  window.addEventListener("silentstitch_order_updated", handler);
  return () => window.removeEventListener("silentstitch_order_updated", handler);
}

/**
 * Update an order's status (e.g. from CONFIRMED -> IN_PRODUCTION -> DISPATCHED)
 * @param {string} orderId
 * @param {string} newStatus
 * @param {string} [trackingNote]
 */
async function updateOrderStatus(orderId, newStatus, trackingNote = "") {
  const updateData = {
    orderStatus: newStatus,
    updatedAt: new Date().toISOString(),
  };
  if (trackingNote) updateData.trackingNote = trackingNote;

  if (db) {
    try {
      await db.collection("orders").doc(orderId).update(updateData);
      return true;
    } catch (err) {
      console.error("Failed to update status on Firestore:", err);
    }
  }

  const orders = getLocalOrders();
  const idx = orders.findIndex((o) => o.orderId === orderId);
  if (idx !== -1) {
    orders[idx] = { ...orders[idx], ...updateData };
    setLocalOrders(orders);
    return true;
  }
  return false;
}
