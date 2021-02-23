import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

console.log(config);

// if (firebase.app.length === 0) {
//   firebase.initializeApp(config);
// }
export const app = firebase.initializeApp(config);

const auth = firebase.auth();
export { auth };
