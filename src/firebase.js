// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxQ4bC6a7prN6AaQGNFjrnMcxZQ2ROGdc",
  authDomain: "webpushotificationdemo.firebaseapp.com",
  projectId: "webpushotificationdemo",
  storageBucket: "webpushotificationdemo.appspot.com",
  messagingSenderId: "465336260907",
  appId: "1:465336260907:web:50d29decb40c25833a4d6e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
