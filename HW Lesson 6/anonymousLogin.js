import { auth } from './config.js';
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

const handleLogin = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
    signInAnonymously(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = './anonymous.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });

}

loginBtn.addEventListener('click', handleLogin);