import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPjhVc3WX1wqr2x0uxlAlInaQZdhVHf0Q",
  authDomain: "photo-tagging-game-6d738.firebaseapp.com",
  projectId: "photo-tagging-game-6d738",
  storageBucket: "photo-tagging-game-6d738.appspot.com",
  messagingSenderId: "976514231143",
  appId: "1:976514231143:web:bc812c7f127f108c219dc2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
