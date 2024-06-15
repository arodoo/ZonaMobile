// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRcSENT-xtLidMoOOg7LeRgi8ycjEtJkk",
    authDomain: "zona-admon.firebaseapp.com",
    databaseURL: "https://zona-admon-default-rtdb.firebaseio.com",
    projectId: "zona-admon",
    storageBucket: "zona-admon.appspot.com",
    messagingSenderId: "1051108258363",
    appId: "1:1051108258363:web:c9cf9400d6eadbb356221e",
    measurementId: "G-B2LVZDT3M5"
};

// Initialize Firebase
export const initFirebaseApp = initializeApp(firebaseConfig);

export const firebaseAuthStatePersistance = initializeAuth(initFirebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(initFirebaseApp);