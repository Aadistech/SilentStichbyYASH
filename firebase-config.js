// =========================================================
// Silent Stitch Studio — Firebase Realtime Integration
// Supports BOTH Cloud Firestore & Firebase Realtime Database (RTDB)
// Project: silentstitch-studio
// =========================================================

// Paste your Firebase Web App credentials below:
// (Found in Firebase Console -> Project Settings -> General -> Your apps -> Web app)
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "silentstitch-studio.firebaseapp.com",
  databaseURL: "https://silentstitch-studio-default-rtdb.firebaseio.com",
  projectId: "silentstitch-studio",
  storageBucket: "silentstitch-studio.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

const isLiveFirebaseConfigured = () => {
  return FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.includes("YOUR_API_KEY_HERE");
};

let firestoreDb = null;
let realtimeDb = null;

// Initialize Firebase if configured
if (isLiveFirebaseConfigured() && typeof firebase !== "undefined") {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    // Initialize Firestore if available
    if (typeof firebase.firestore === "function") {
      firestoreDb = firebase.firestore();
      console.log("🌸 Connected to Cloud Firestore!");
    }
    // Initialize Realtime Database (RTDB) if available
    if (typeof firebase.database === "function") {
      realtimeDb = firebase.database();
      console.log("🌸 Connected to Firebase Realtime Database (silentstitch-studio-default-rtdb)!");
    }
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
  window.dispatchEvent(new CustomEvent("silentstitch_order_updated"));
}

/**
 * Save a new order to Realtime Database / Firestore (with local fallback)
 * @param {Object} orderData
 * @returns {Promise<string>} orderId
 */
async function saveOrderToFirestore(orderData) {
  const order = {
    ...orderData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  let saved = false;

  // 1. Write to Realtime Database if connected
  if (realtimeDb) {
    try {
      await realtimeDb.ref("orders/" + order.orderId).set(order);
      console.log("✅ Order saved to Realtime Database:", order.orderId);
      saved = true;
    } catch (err) {
      console.error("RTDB write notice:", err);
    }
  }

  // 2. Write to Firestore if connected
  if (firestoreDb) {
    try {
      await firestoreDb.collection("orders").doc(order.orderId).set(order);
      console.log("✅ Order saved to Cloud Firestore:", order.orderId);
      saved = true;
    } catch (err) {
      console.error("Firestore write notice:", err);
    }
  }

  // Always keep in local reactive store as well
  const existing = getLocalOrders();
  existing.unshift(order);
  setLocalOrders(existing);

  if (!saved) {
    console.log("💾 Order stored in local reactive store:", order.orderId);
  }
  return order.orderId;
}

/**
 * Real-time listener for a single order (Customer Live Tracker)
 * @param {string} orderId
 * @param {function} onUpdate Callback receiving order document
 * @returns {function} Unsubscribe function
 */
function listenToOrder(orderId, onUpdate) {
  // Realtime Database listener
  if (realtimeDb) {
    const orderRef = realtimeDb.ref("orders/" + orderId);
    const callback = (snapshot) => {
      onUpdate(snapshot.val());
    };
    orderRef.on("value", callback);
    return () => orderRef.off("value", callback);
  }

  // Firestore listener
  if (firestoreDb) {
    const unsub = firestoreDb.collection("orders").doc(orderId).onSnapshot((doc) => {
      onUpdate(doc.exists ? doc.data() : null);
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
  // Realtime Database listener
  if (realtimeDb) {
    const ordersRef = realtimeDb.ref("orders");
    const callback = (snapshot) => {
      const val = snapshot.val();
      if (!val) {
        onUpdate([]);
        return;
      }
      const list = Object.values(val).reverse();
      onUpdate(list);
    };
    ordersRef.on("value", callback);
    return () => ordersRef.off("value", callback);
  }

  // Firestore listener
  if (firestoreDb) {
    const unsub = firestoreDb.collection("orders").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
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

  if (realtimeDb) {
    try {
      await realtimeDb.ref("orders/" + orderId).update(updateData);
    } catch (err) {
      console.error("RTDB update error:", err);
    }
  }

  if (firestoreDb) {
    try {
      await firestoreDb.collection("orders").doc(orderId).update(updateData);
    } catch (err) {
      console.error("Firestore update error:", err);
    }
  }

  const orders = getLocalOrders();
  const idx = orders.findIndex((o) => o.orderId === orderId);
  if (idx !== -1) {
    orders[idx] = { ...orders[idx], ...updateData };
    setLocalOrders(orders);
  }
  return true;
}
