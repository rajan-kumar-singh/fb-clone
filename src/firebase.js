import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase/app';
import 'firebase/compat/storage';

const firebaseConfig =  {
  apiKey: "AIzaSyCVhO-1UFUQq_vUpV8DIeX_2tV9ohPLbVw",
  authDomain: "fb-clone-d959e.firebaseapp.com",
  projectId: "fb-clone-d959e",
  storageBucket: "fb-clone-d959e.appspot.com",
  messagingSenderId: "148685443629",
  appId: "1:148685443629:web:069c7f4f524edcd52ddea4",
  gs:"fb-clone-d959e.appspot.com"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const storage=firebase.storage();



  const auth=firebase.auth();
  const provider=new firebase.auth.FacebookAuthProvider();
export {auth,provider,db,storage  }
