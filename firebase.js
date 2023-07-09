import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL:
//     "https://carrot-a9ec3-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   storageBucket: "gs://carrot-a9ec3.appspot.com",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA_hmWZzFH14YTxnYJRZgYlBtC0qpSb6dY",
  authDomain: "carrot-a9ec3.firebaseapp.com",
  databaseURL:
    "https://carrot-a9ec3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-a9ec3",
  storageBucket: "carrot-a9ec3.appspot.com",
  messagingSenderId: "930197978652",
  appId: "1:930197978652:web:7743f953f204f8adf5a9d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// @ts-ignore
const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const auth = getAuth(app);
