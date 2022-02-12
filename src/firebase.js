import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqlyxnV-ybT1lcjiLW1X0bQOuPkFyBASs",
  authDomain: "chatit-e1806.firebaseapp.com",
  databaseURL: "https://chatit-e1806-default-rtdb.firebaseio.com",
  projectId: "chatit-e1806",
  storageBucket: "chatit-e1806.appspot.com",
  messagingSenderId: "305243815359",
  appId: "1:305243815359:web:72e624e63403af91efb50a",
  measurementId: "G-YMK52J30RH"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }