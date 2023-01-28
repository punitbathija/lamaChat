import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXsDQyzRLjIY3-IozikGP-qri9sJoAP1E",
  authDomain: "lama-chat-5f659.firebaseapp.com",
  projectId: "lama-chat-5f659",
  storageBucket: "lama-chat-5f659.appspot.com",
  messagingSenderId: "614873982100",
  appId: "1:614873982100:web:3bafb9dc8a7db9ecc28081",
};
// Initialize Firebase Authentication, Firebase Storage, Firebase Database(Firestore)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
