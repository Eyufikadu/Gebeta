import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get
} from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";


// 🔥 FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyA3hmr6ir5Sn84SIN9yiyOumq4gJbYvqcE",
  authDomain: "liyu-f14b7.firebaseapp.com",
  databaseURL: "https://liyu-f14b7-default-rtdb.firebaseio.com",
  projectId: "liyu-f14b7",
  storageBucket: "liyu-f14b7.firebasestorage.app",
  messagingSenderId: "958509535849",
  appId: "1:958509535849:web:ad5d42b0a1173c25e208f8"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ===============================
// 🔥 5 NFC USERS WITH PHOTOS
// ===============================
const users = {
  user01: {
    name: "HENOK NIGATU",
    phone: "0928860545",
    photo: "image/Henok.JPG"
  },

  user02: {
    name: "NAHOM TADESSE",
    phone: "0912782463",
    photo: "image/Nahom.JPG"
  },

  user03: {
    name: "BIRUK SHIKURI",
    phone: "0916410815",
    photo: "image/Biruk.JPG"
  },

  user04: {
    name: "SINTAYEHU DARSEMA",
    phone: "0977",
    photo: "image/Sintayehu.JPG"
  },

  user05: {
    name: "BEFIKADU SHIKURI",
    phone: "0955",
    photo: "image/Befike.JPG"
  }
};

// SAVE ONCE (safe check)
Object.keys(users).forEach(id => {
  const userRef = ref(db, "members/" + id);

  get(userRef).then(snapshot => {
    if (!snapshot.exists()) {
      set(userRef, users[id]);
    }
  });
});