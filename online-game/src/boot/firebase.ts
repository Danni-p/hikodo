import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBLNTpeTfoZOfIRMOSbWs9S_CmTCzEbAYg',
  authDomain: 'hikodo-e16e5.firebaseapp.com',
  projectId: 'hikodo-e16e5',
  storageBucket: 'hikodo-e16e5.appspot.com',
  messagingSenderId: '1057746049366',
  appId: '1:1057746049366:web:7e8a339ff3099e376a5ef7'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()

const firebaseDB = firebaseApp.firestore()
const firebaseStore = firebaseApp.storage()

export { firebaseAuth, firebaseDB, firebaseApp, firebaseStore, firebaseConfig }
