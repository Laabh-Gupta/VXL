// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQUrfWv5MXqzzyQRqDlXeRxVXPbgjGuMA",
  authDomain: "vxl-website.firebaseapp.com",
  projectId: "vxl-website",
  storageBucket: "vxl-website.appspot.com",
  messagingSenderId: "732917504331",
  appId: "1:732917504331:web:6c17f09f78797d085a70ce",
  measurementId: "G-SJ0TGRMRL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);