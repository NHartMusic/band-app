import { ref, provider, firebaseAuth } from '../config/constants';

export function signOut(){
  return firebaseAuth.signOut().then(function() {
    // Sign-out successful.
    console.log("You've signed out");
  }).catch(function(error) {
    // An error happened.
  });
}

export function signIn(){
  return firebaseAuth.signInWithPopup(provider).then(function(result) {
    const token = result.credential.accessToken;
    console.log("you've signed in. Here's your user token:")
    const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;
        const uid = user.uid;
    console.log(`name: ${name}, email:${email}, photo:${photo},
      uid:${uid}`);
  }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
}

export function authStateChange(){
  return firebaseAuth.onAuthStateChanged(function(user) {
   if (user) {
     console.log("logged in");
   } else {
     console.log("not logged in");
   }
 });
}
