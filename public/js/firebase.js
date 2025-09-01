// public/js/firebase.js
// Firebase v9+ modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove,
    onValue,
    push
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Konfigurasi Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN40NJ04QR03uF54k3rQGph81kEhKthtM",
    authDomain: "lapakkita.id",
    databaseURL: "https://lapakkita-8a21d-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "lapakkita-8a21d",
    storageBucket: "lapakkita-8a21d.firebasestorage.app",
    messagingSenderId: "961001666741",
    appId: "1:961001666741:web:01925c86163780bc93e6fc",
    measurementId: "G-N9T7CQ59S3"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Export supaya bisa dipakai di file lain
export {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref,
    set,
    get,
    child,
    update,
    remove,
    onValue,
    push
};
