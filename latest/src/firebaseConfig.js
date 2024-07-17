import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjGQe6--vWZr2UV124ciXCG-mWnWNQ0ck",
  authDomain: "tracking-f368a.firebaseapp.com",
  projectId: "tracking-f368a",
  storageBucket: "tracking-f368a.appspot.com",
  messagingSenderId: "97335465548",
  appId: "1:97335465548:web:344a74dc8024f6422f06e9",
  measurementId: "G-F853ZH4H7M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
