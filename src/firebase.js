import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };
const firebaseConfig = {
  apiKey: "",
  authDomain: "chat-72be0.firebaseapp.com",
  projectId: "chat-72be0",
  storageBucket: "chat-72be0.appspot.com",
  messagingSenderId: "882270507287",
  appId: "1:882270507287:web:fba36b2dca422136e5a752",
  measurementId: "G-R4MDYMKKX7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
