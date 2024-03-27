import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUiZs-AjCeTh21snCg8agMJTfoFWGwuIs",
  authDomain: "iescworldwide.firebaseapp.com",
  projectId: "iescworldwide",
  storageBucket: "iescworldwide.appspot.com",
  messagingSenderId: "17350585038",
  appId: "1:17350585038:web:9f164bb62d766e11947e9f",
  measurementId: "G-F7W4F9N1WS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
