import React from 'react';
import "./Login.css";

import Signin from "./Signin";


function Login() {
  return (
 
 <div className='login'>

<div className='login_container'> 
<a href='/'>
      <img src="https://ik.imagekit.io/amazonshop/icons8-twitter-144_68G7g0lX7y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659423699315"  alt='' className='logoo'/>
</a>

<div className='login_text'>
  <h1> Sign in to Twitter </h1>
</div>

<Signin />
</div>

    

    </div>
  )
}

export default Login