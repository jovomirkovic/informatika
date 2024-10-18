// src/firebase/firebaseConfig.js
return;
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCTXKhIABahQpW9oslsB8JMzaRUhZYSHN0",
  authDomain: "com.informatika.kartarasta1",
  projectId: "prococah11",
  storageBucket: "prococah11.appspot.com",
  messagingSenderId: "1095826578642",
  appId: "1:1095826578642:android:1982425dc0b13ffdf6e10b",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
