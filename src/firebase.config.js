// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLQy6TD5pmP1CAl-tgxLc9cRpYg_JLyw",
  authDomain: "useful-music-403206.firebaseapp.com",
  databaseURL: "https://useful-music-403206-default-rtdb.firebaseio.com/",
  projectId: "useful-music-403206",
  storageBucket: "useful-music-403206.appspot.com",
  messagingSenderId: "550246769289",
  appId: "1:550246769289:web:14c9cbd0b7c1e44d421c58",
  measurementId: "G-05RC8TVE5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);