import React from 'react';
import "./Widget.css";
import SearchIcon from '@mui/icons-material/Search';

function Widget() {
  return (
    <div className='widgets'>
    
    <div className='widget_input'>
        <SearchIcon  className='searchicon'/>
        <input placeholder='Search tweet' type='text' />
    </div>

    <div className='widget_container'>
    
    <iframe 
                className = "widget__scroll"
                title = "facebook-post"
                src="https://en.wikipedia.org/wiki/Twitter" 
                width="295" 
                height= "100%"
                style= {{ border: "none" , overflow: "hidden"  }} 
                scrolling="no" 
                frameBorder="1" 
                // mar ginLeft="0rem"
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>    
    
    </div>
 </div>
  )}
export default Widget


