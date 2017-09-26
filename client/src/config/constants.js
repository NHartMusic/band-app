import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB8ijKhAPdzzqCBuDdLzYUS-HbPqRKL3Ts",
   authDomain: "bandstuff-67e97.firebaseapp.com",
   databaseURL: "https://bandstuff-67e97.firebaseio.com",
   projectId: "bandstuff-67e97"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
