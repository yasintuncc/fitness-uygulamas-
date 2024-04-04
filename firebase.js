import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your domain",
  projectId: "your id",
  storageBucket: "your bucket",
  messagingSenderId: "your sender id",
  appId: "your app id",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };