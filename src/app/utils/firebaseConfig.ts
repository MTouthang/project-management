import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// web app configuration 
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
}

// initialize firebase app
const app = initializeApp(firebaseConfig)

// initialize firestore and export it
export const db = getFirestore(app)