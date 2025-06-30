// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrd9mPP2LzYz95qkkNMWy14oY9baCoyY",
  authDomain: "freshly-mobile.firebaseapp.com",
  projectId: "freshly-mobile",
  storageBucket: "freshly-mobile.firebasestorage.app",
  messagingSenderId: "1011626398567",
  appId: "1:1011626398567:web:58f288b46db3d00420d5c2",
  measurementId: "G-YYXXC4VJXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

export{storage, app};