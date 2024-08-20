// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCunou550gsiq2nPk2OiQIrmxpHGM4ufZM",
  authDomain: "schooldepi.firebaseapp.com",
  projectId: "schooldepi",
  storageBucket: "schooldepi.appspot.com",
  messagingSenderId: "314070408331",
  appId: "1:314070408331:web:f2762b2140354ae9b3088e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
