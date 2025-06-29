import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvTdeBbheYGqWxWXVFAAnY-UkIoECVyjM",
  authDomain: "casilang-qr-app.firebaseapp.com",
  projectId: "casilang-qr-app",
  storageBucket: "casilang-qr-app.appspot.com", // ✅ correct domain
  messagingSenderId: "567470883187",
  appId: "1:567470883187:web:c3e9b0438813a6f3390506"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }