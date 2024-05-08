// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIcxfT2hf6HBsUUfPzWGQoRpi7FVZV-TQ",
    authDomain: "zonamobile-f259b.firebaseapp.com",
    projectId: "zonamobile-f259b",
    storageBucket: "zonamobile-f259b.appspot.com",
    messagingSenderId: "1045766243409",
    appId: "1:1045766243409:web:ff485810b7e38134c02470",
    measurementId: "G-FLFYGFMJR9"
};

// Initialize Firebase
export const initFirebaseApp = initializeApp(firebaseConfig);

export const firebaseAuthStatePersistance = initializeAuth(initFirebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(initFirebaseApp);