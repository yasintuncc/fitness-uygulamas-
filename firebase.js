import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCU0e49tJFIHbOSN-Pi7CJiDPRXZHgBcmA",
  authDomain: "fitnessuygulamasi-c5133.firebaseapp.com",
  projectId: "fitnessuygulamasi-c5133",
  storageBucket: "fitnessuygulamasi-c5133.appspot.com",
  messagingSenderId: "730631215774",
  appId: "1:730631215774:web:93fe6d5b67ca2195a9b98f"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };