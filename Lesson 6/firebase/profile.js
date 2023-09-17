import { auth } from './config.js';
import { updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const name = document.getElementById('name');
const photo = document.getElementById('photo');
const submitBtn = document.getElementById('submit-btn');

photo.src = photo.value;
const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
        displayName: name.value, photoURL: photo.value,
      }).then(() => {
        alert('Updated profile successfully')
      }).catch((error) => {
        alert(error.code)
      });
}

const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.displayName);
        }
      });
    }

submitBtn.addEventListener('click', handleUpdateProfile);
handleGetProfile();