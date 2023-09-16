import { GoogleAuthProvider } from "firebase/auth";

const credential = GoogleAuthProvider.credential(
  googleUser.getAuthResponse().id_token);