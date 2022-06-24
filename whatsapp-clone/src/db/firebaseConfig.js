import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// to hold the firbase details for connecting to database
const firebaseConfig = {

    apiKey: "AIzaSyDs1P9rL3o6zHM8L003lqicQMktv-skRsg",
  
    authDomain: "whatsapp-clone--react-97b09.firebaseapp.com",
  
    projectId: "whatsapp-clone--react-97b09",
  
    storageBucket: "whatsapp-clone--react-97b09.appspot.com",
  
    messagingSenderId: "567124678863",
  
    appId: "1:567124678863:web:abdd10d201e566799e3fba",
  
    measurementId: "G-TVCTY4RHZW"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider() 

export {auth,provider}
export default db