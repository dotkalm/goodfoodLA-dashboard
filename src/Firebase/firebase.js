import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyAxwoKChOpNTAsIcuInkLUebyWBBYAoZr0",
    authDomain: "la-food-dashboard.firebaseapp.com",
    databaseURL: "https://la-food-dashboard.firebaseio.com",
    projectId: "la-food-dashboard",
    storageBucket: "la-food-dashboard.appspot.com",
    messagingSenderId: "207500149453",
    appId: "1:207500149453:web:747a44a1b1650828e65f84"
};
class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }
  doCreateUserWithEmailAndPassword = (email, password) => {
    return  this.auth.createUserWithEmailAndPassword(email, password)
  }
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
  
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
  user = uid => this.db.ref(`users/${uid}`)
  users = () => this.db.ref('users')
}
export default Firebase


