
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA5d49Z6RTWU7XZVJkS7lrt7g3THXdELG8",
  authDomain: "drive-clone-fab1b.firebaseapp.com",
  projectId: "drive-clone-fab1b",
  storageBucket: "drive-clone-fab1b.appspot.com",
  messagingSenderId: "43719609455",
  appId: "1:43719609455:web:e372d5a5ebec3d22f7d19a"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();