// Import the functions you need from the SDKs you need
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZJ9r3oBjI7wMbFFHLkmdglONF6sBEn4",
  authDomain: "igclone-4c621.firebaseapp.com",
  projectId: "igclone-4c621",
  storageBucket: "igclone-4c621.appspot.com",
  messagingSenderId: "238828626673",
  appId: "1:238828626673:web:308b583dcce32d1984bf50",
  measurementId: "G-3803YR77EH",
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const FirebaseAuth = getAuth(app);
const analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);
const auth = getAuth(app);
export { FirebaseAuth, analytics, db, auth };
// export default firebase;
