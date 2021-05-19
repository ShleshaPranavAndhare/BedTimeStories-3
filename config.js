import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCArqndhg6W5eghZ-bWXDOcHAnB5flf7Mo",
  authDomain: "bedtime-stories-d2282.firebaseapp.com",
  projectId: "bedtime-stories-d2282",
  storageBucket: "bedtime-stories-d2282.appspot.com",
  messagingSenderId: "747862974521",
  appId: "1:747862974521:web:20d31d5862b63efac7ade8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();