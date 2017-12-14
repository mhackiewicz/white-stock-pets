import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyB5nYPy3Ebdpup-ilx4kNvWmH8sM9ymcrc",
    authDomain: "vue-firebase-tuturial.firebaseapp.com",
    databaseURL: "https://vue-firebase-tuturial.firebaseio.com",
    projectId: "vue-firebase-tuturial",
    storageBucket: "vue-firebase-tuturial.appspot.com",
    messagingSenderId: "600191187025"
});


export const db = firebaseApp.database();