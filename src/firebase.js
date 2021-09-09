import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAo-bMCQoEJl3rxIOqEx8hSdHFJ4HCynJ8",
    authDomain: "netflix-clone-84910.firebaseapp.com",
    projectId: "netflix-clone-84910",
    storageBucket: "netflix-clone-84910.appspot.com",
    messagingSenderId: "750893698981",
    appId: "1:750893698981:web:cf8089e3a9129e8a73224c"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
