import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blog-app-790b0.firebaseapp.com",
  projectId: "blog-app-790b0",
  storageBucket: "blog-app-790b0.appspot.com",
  messagingSenderId: "5023423787",
  appId: "1:5023423787:web:211087a5bcf26a1031396e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
