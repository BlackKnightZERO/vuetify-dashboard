import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "",
    authDomain: "vuetify-dashboard-6d687.firebaseapp.com",
    databaseURL: "https://vuetify-dashboard-6d687.firebaseio.com",
    projectId: "vuetify-dashboard-6d687",
    storageBucket: "vuetify-dashboard-6d687.appspot.com",
    messagingSenderId: "684882425878",
    appId: "1:684882425878:web:4bc8439dcf15e593925d37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // db.settings({
  //   timestampsInSnapshots:true
  // });

  export default db;