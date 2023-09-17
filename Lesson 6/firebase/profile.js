import { auth } from './config.js';
import { updateProfile } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const name = document.getElementById('name');
const photo = document.getElementById('photo');


photo.src = photo.value;