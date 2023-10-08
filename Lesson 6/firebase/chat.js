import { db } from './config.js';
import { collection, query, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const ref = collection(db, "messages");
const q = query(ref);

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.data());
});

const inputMessage = document.getElementById('input-message');
const sendBtn = document.getElementById('send-btn');
const addMessage = async () => {
    const message = inputMessage.value;
    await addDoc(ref, {
        content: message,
        sender: 'Me',
        createdAt: serverTimestamp(),
    }); 
}

sendBtn.addEventListener('click', addMessage);