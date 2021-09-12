import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBP5s8d9gr2mHomYt5_rQNdmNSs414Tnjk",
  authDomain: "showtime-5720a.firebaseapp.com",
  projectId: "showtime-5720a",
  storageBucket: "showtime-5720a.appspot.com",
  messagingSenderId: "112230973607",
  appId: "1:112230973607:web:acfac73a8c048e767c9b82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;