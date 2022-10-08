import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import {Link} from "react-router-dom";

import "./Signin.css";

const SignIn=() => {

    const SignInWithFirebase =() => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then ((re)=> {
            console.log(re);
        })
        .catch((err)=> {
            console.log(err);
        })
    }

return(
    <div className=' sid'>
   
    <button onClick={SignInWithFirebase} className="btn">
           <img src="https://ik.imagekit.io/amazonshop/icons8-google-48__1__aCVmhpilG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659771590598" className='imaag'  alt=''/>
            
           {/* <Link className="link" to="/">

<a> SIGN OUT </a>
</Link> */}
            
<Link className="link" to="/home">
           <p>SignIn </p>    
 </Link>          
    </button>
    </div>
)}


export default SignIn