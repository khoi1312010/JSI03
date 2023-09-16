import { getAuth, linkWithCredential } from "firebase/auth";

const auth = getAuth();
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    const user = usercred.user;
    console.log("Anonymous account successfully upgraded", user);
  }).catch((error) => {
    console.log("Error upgrading anonymous account", error);
  });