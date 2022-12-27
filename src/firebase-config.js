import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDLrTbLeQryfVbPuPd2XDpGUlneZvm-R7E",
    authDomain: "accounting-cd846.firebaseapp.com",
    projectId: "accounting-cd846",
    storageBucket: "accounting-cd846.appspot.com",
    messagingSenderId: "803381239578",
    appId: "1:803381239578:web:582234d9e9a3a1f35cd6a3",
    measurementId: "G-E4PV9EDLQH"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)
export const analytics = getAnalytics(app);
