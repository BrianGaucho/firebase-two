import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAVHO49LV_QzXSlBr9_4hxVqwAbqcnOVEk",
  authDomain: "fir-two-57053.firebaseapp.com",
  projectId: "fir-two-57053",
  storageBucket: "fir-two-57053.appspot.com",
  messagingSenderId: "244502965924",
  appId: "1:244502965924:web:21b20b3f93ed5e11564031",
  measurementId: "G-68J6SPPEQ8"
};



const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
