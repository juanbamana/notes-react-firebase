import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA8jr4jQJOvD-rzitupf3vtjzvnslfj6DA",
    authDomain: "notes-react-firebase-23e6f.firebaseapp.com",
    projectId: "notes-react-firebase-23e6f",
    storageBucket: "notes-react-firebase-23e6f.appspot.com",
    messagingSenderId: "193377730977",
    appId: "1:193377730977:web:4dabc4ee4fabf963418be0"
};

export default firebase.initializeApp(firebaseConfig)