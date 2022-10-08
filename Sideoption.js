import React from 'react';
import "./Sideoption.css";


function Sideoption({ text , Icon , active}) {
  return (
    <div className={`option ${active && 'option--active' }`}>  
    <Icon />
    <h2>  {text} </h2>
    </div>
  )
}

export default Sideoption