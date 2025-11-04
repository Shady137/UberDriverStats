// IMPORTS (Firebase v10+ CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth, onAuthStateChanged, GoogleAuthProvider,
  signInWithPopup, signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// 🔹 Tu configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDew-FRJUd7kscx51_OvKrVt2PPoqhEHV0",
  authDomain: "uberdriverstats.firebaseapp.com",
  projectId: "uberdriverstats",
  storageBucket: "uberdriverstats.firebasestorage.app",
  messagingSenderId: "591109495",
  appId: "1:591109495:web:b112d8edd2008495699572",
  measurementId: "G-6JVRB2N22K"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();

// Funciones auxiliares
export function loginWithGoogle() {
  return signInWithPopup(auth, GoogleProvider);
}

export function logout() {
  return signOut(auth);
}

export function onReady(cb) {
  return onAuthStateChanged(auth, cb);
}

export { doc, setDoc, getDoc, serverTimestamp };
