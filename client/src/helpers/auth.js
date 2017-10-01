import { provider, firebaseAuth } from '../config/constants';

export function signOut(){
  return firebaseAuth.signOut()
}

export function signIn(){
  return firebaseAuth.signInWithPopup(provider)
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
