import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_ouRpqhZmKSwT5wKdHGsSyyI7KN5cVdk",
    authDomain: "lab4-8e944.firebaseapp.com",
    projectId: "lab4-8e944",
    storageBucket: "lab4-8e944.appspot.com",
    messagingSenderId: "813418334122",
    appId: "1:813418334122:web:d739314a0bb0fa51464dd3",
    measurementId: "G-Y1DSM8MSZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth();