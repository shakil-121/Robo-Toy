import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) =>  {
    const [user, setuser] = useState(null);  
    const [loadding,setloadding]=useState(true);
  
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
      console.log(currentuser);
      setuser(currentuser)
      setloadding(false)
     })
     return ()=>{
      unsubscribe();
     }
    },[])
  
    const registration = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const  Loginprocess=(email,password)=>{ 
      return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut=()=>{
      return signOut(auth);
    };
   
    const passwordreset=(email)=>{ 
    return sendPasswordResetEmail(auth,email)
    }; 
  
    const loginWithGoogle=(googleProvider)=>{ 
      return signInWithPopup(auth,googleProvider)
    };
  
    const loginWithGithub=(githubProvider)=>{
      return signInWithPopup(auth,githubProvider)
    };
    const authinfo = {
      registration, 
      user,
      Loginprocess,
      logOut,
      passwordreset, 
      loginWithGoogle,
      loginWithGithub, 
      loadding,
    };
  
    return (
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    );
  };

export default Authprovider;