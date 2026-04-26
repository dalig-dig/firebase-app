import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDArHT8lOY7QOZIk5Npip17sLmlA-Bdu-E",
  authDomain: "fir-auth-42e73.firebaseapp.com",
  projectId: "fir-auth-42e73",
  storageBucket: "fir-auth-42e73.firebasestorage.app",
  messagingSenderId: "696215780537",
  appId: "1:696215780537:web:52752b99460e0a7a7aef68",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);