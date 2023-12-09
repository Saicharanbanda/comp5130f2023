// Import Firestore and Auth instances
import { db, auth } from "firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// Function to register a new user
export async function registerUser(email, password, firstName, lastName) {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const userId = credentials.user.uid;

        // Save additional user information to Firestore
        // You may customize this part according to your database structure
        const userRef = doc(db, "UserAuthList", userId);
        await setDoc(userRef, {
            firstname: firstName,
            lastname: lastName
        });

        return { success: true, userId };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Function to log in an existing user
export async function loginUser(email, password) {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, userId: credentials.user.uid };
    } catch (error) {
        return { success: false, message: error.message };
    }
}