// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDyQHrnbMnr5zHNCjf7MSCBshChor-Pqf0",
    authDomain: "beyond-the-pages.firebaseapp.com",
    projectId: "beyond-the-pages",
    storageBucket: "beyond-the-pages.appspot.com",
    messagingSenderId: "14078383385",
    appId: "1:14078383385:web:8b9ec7ff214e2db215e188",
    measurementId: "G-3L2NKWX8NC"
};
       
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth instances
export const db = getFirestore(app);
export const auth = getAuth(app);
