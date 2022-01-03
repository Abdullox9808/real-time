import reactDom from "react-dom";
import App from './App'
import   './App.css'
import firebase from 'firebase/compat/app'   
import 'firebase/compat/firestore' 
import 'firebase/compat/auth'
import { createContext } from "react";
  firebase.initializeApp(
      {
  apiKey: "AIzaSyCiz9dH_yE7KCKra7uEPtpRNbgAUvOjydo",
  authDomain: "testing-chat-9d576.firebaseapp.com",
  projectId: "testing-chat-9d576",
  storageBucket: "testing-chat-9d576.appspot.com",
  messagingSenderId: "119184781209",
  appId: "1:119184781209:web:b0495fb4bafef35904ed08",
  measurementId: "G-GFXMGW7B1V"
    }
  );

  export const Context = createContext(null)
  const auth = firebase.auth()
  const firestore = firebase.firestore()
reactDom.render(
    <Context.Provider value={ {auth,firestore, firebase}}>
        <App/>  
    </Context.Provider>,
    document.getElementById('root')
)