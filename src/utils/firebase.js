// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyApZjxoCg3FliFjdBLQMUJuMy4cx9Ishak',
  authDomain: 'birthday-f0f8c.firebaseapp.com',
  projectId: 'birthday-f0f8c',
  storageBucket: 'birthday-f0f8c.appspot.com',
  messagingSenderId: '649996067355',
  appId: '1:649996067355:web:54df256f34c9096f86cebe',
};

// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
