import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0ke3AdJ8aSkyGgvlmO61azhoO2Sybf-0",
  authDomain: "harmony-fdbb8.firebaseapp.com",
  databaseURL: "https://harmony-fdbb8.firebaseio.com",
  projectId: "harmony-fdbb8",
  storageBucket: "harmony-fdbb8.appspot.com",
  messagingSenderId: "772366885910",
  appId: "1:772366885910:web:cd3b11d173f03110fd4137",
  measurementId: "G-YNDFY0LZ9L"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
