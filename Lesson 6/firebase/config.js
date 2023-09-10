import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaqDujA72F_ZpmdDm3NVAascLxzUQsRCk",
  authDomain: "jsi03-8210d.firebaseapp.com",
  projectId: "jsi03-8210d",
  storageBucket: "jsi03-8210d.appspot.com",
  messagingSenderId: "190786631722",
  appId: "1:190786631722:web:12b5e1bc43d3af6fe4eb53",
  measurementId: "G-LR5RZ8VZ17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);