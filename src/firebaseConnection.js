import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9t5NHYY6N6NWSG_Hw6-Y-fwCZQikAHWY",
  authDomain: "cursoreact-e2c75.firebaseapp.com",
  projectId: "cursoreact-e2c75",
  storageBucket: "cursoreact-e2c75.appspot.com",
  messagingSenderId: "223575603980",
  appId: "1:223575603980:web:fca073a59e2978a99ea729",
  measurementId: "G-1WKG8R46T3",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
