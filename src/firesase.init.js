// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuAO6zWijnl8TkHaqBrpavAD6MdcWVcaE",
  authDomain: "auth-moha-milon-88457.firebaseapp.com",
  projectId: "auth-moha-milon-88457",
  storageBucket: "auth-moha-milon-88457.firebasestorage.app",
  messagingSenderId: "442293708287",
  appId: "1:442293708287:web:b2b36836b8cb0928d173ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app); 