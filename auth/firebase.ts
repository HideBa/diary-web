import "firebase/auth";
import firebase from "firebase/app";

export const config = {
  apiKey: process.env.FIREBASE_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  authDomain: process.env.FIREBASE_DOMAIN,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

// !firebase.app.length ? firebase.initializeApp(config) : firebase.app();

// if (!firebase.app.length) {
//   firebase.initializeApp(config);
// }
firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;
