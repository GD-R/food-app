
import { initializeApp, getApp } from "firebase/app"



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
}

// const firebaseConfig = {
//     apiKey: "AIzaSyBaIeeRMPuOPhCW56RR5CCY-vy6_awzGQI",
//     authDomain: "geekforgeeksui.firebaseapp.com",
//     projectId: "geekforgeeksui",
//     storageBucket: "geekforgeeksui.appspot.com",
//     messagingSenderId: "295450729940",
//     appId: "1:295450729940:web:45ae02daac6855e9668a41",
//     measurementId: "G-3THBTZWCWK"
//   };
  

initializeApp(firebaseConfig);
console.log(getApp().options)


