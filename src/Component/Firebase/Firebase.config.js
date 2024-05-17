// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ePE-VNJ8W0xsuf5SsByVp7DLYxywbJw",
  authDomain: "log-in-react.firebaseapp.com",
  projectId: "log-in-react",
  storageBucket: "log-in-react.appspot.com",
  messagingSenderId: "146186905975",
  appId: "1:146186905975:web:ec223d6d4012c434c15972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;