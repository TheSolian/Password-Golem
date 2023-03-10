import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBklVCoD5bv5jt0OeWzdqFITbOd5X8PlsU",
  authDomain: "password-manager-8b8d7.firebaseapp.com",
  projectId: "password-manager-8b8d7",
  storageBucket: "password-manager-8b8d7.appspot.com",
  messagingSenderId: "615249213289",
  appId: "1:615249213289:web:1fdf678771aa874b75eff8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
