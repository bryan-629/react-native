// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCZ6bf_BbeMFaj1cUvRtZO2PhuEyBoiUgU",
    authDomain: "reactnativeprueba-a065c.firebaseapp.com",
    projectId: "reactnativeprueba-a065c",
    storageBucket: "reactnativeprueba-a065c.appspot.com",
    messagingSenderId: "865215521886",
    appId: "1:865215521886:web:4b77ac40d37550faf780cf",
    measurementId: "G-CLKVR9JYYB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
    firebase,
    db
}