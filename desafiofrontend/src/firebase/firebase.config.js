import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKFRW9QrpHohHzE5jLexAC02ot6OI6huQ",
    authDomain: "capking-e96c2.firebaseapp.com",
    projectId: "capking-e96c2",
    storageBucket: "capking-e96c2.appspot.com",
    messagingSenderId: "957486594490",
    appId: "1:957486594490:web:5b39b1434a0be9e5650583",
    measurementId: "G-H31308D90P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();