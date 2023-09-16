import { FacebookAuthProvider } from "firebase/auth";

const credential = FacebookAuthProvider.credential(
    response.authResponse.accessToken);