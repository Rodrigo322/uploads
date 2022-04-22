import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALHtLDAuKf9NaEFaeGhDn0o6l2FNPG00I",
  authDomain: "uploads-4a87e.firebaseapp.com",
  projectId: "uploads-4a87e",
  storageBucket: "uploads-4a87e.appspot.com",
  messagingSenderId: "80239410084",
  appId: "1:80239410084:web:e1ae8aec8b94db0f4d9f31",
  measurementId: "G-C6H6CTN4YR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
