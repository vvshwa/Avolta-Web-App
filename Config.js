// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhvw8R_tOQDxKfDZH08urld1tMSrS95G4",
  authDomain: "avolta-rough-app.firebaseapp.com",
  projectId: "avolta-rough-app",
  storageBucket: "avolta-rough-app.appspot.com",
  messagingSenderId: "1017771061304",
  appId: "1:1017771061304:web:056387982931d82bcc36cd"
};

// // AVOLTA CONFIG
// const firebaseConfig = {
//   apiKey: "AIzaSyCEb8ZCRMDYeVXnbnOarvnMVZJZSdjztMw",
//   authDomain: "avolta-mobile-app-v1.firebaseapp.com",
//   databaseURL: "https://avolta-mobile-app-v1-default-rtdb.firebaseio.com",
//   projectId: "avolta-mobile-app-v1",
//   storageBucket: "avolta-mobile-app-v1.appspot.com",
//   messagingSenderId: "983786882841",
//   appId: "1:983786882841:web:89e4d4b21a7a8740fae788"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);
