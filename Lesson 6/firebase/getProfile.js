import { auth } from './config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const photo = document.getElementById('avatar')

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          fullName.textContent = user.displayName;
          photo.src = user.photoURL;
          console.log(user.photoURL)
        }
      });
    };

handleGetProfile();
