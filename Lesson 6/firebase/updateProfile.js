import { auth } from './config.js';
import { updateProfile } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const submitBtn = document.getElementById('submit-btn');

const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
        displayName: name.value, photoURL: photo.value,
      }).then(() => {
        alert('Updated profile successfully')
      }).catch((error) => {
        alert(error.code)
      });
}

submitBtn.addEventListener('click', handleUpdateProfile);