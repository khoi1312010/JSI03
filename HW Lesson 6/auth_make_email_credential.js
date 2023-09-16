import { EmailAuthProvider } from "firebase/auth";

const credential = EmailAuthProvider.credential(email, password);