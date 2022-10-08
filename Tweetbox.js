import React from 'react';
import { useState } from 'react';
import './Tweetbox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';
import firebase from 'firebase/compat/app';

function Tweetbox() {
  console.log('working inpujt')
const [tweetMessage, setTweetMessage] = useState("");
const [tweetImage, setTweetImage] = useState("");


const sendTweet = e => {
console.log ('yessss')
console.log('TIMESTAMP:::',firebase.firestore.FieldValue.serverTimestamp())
db.collection ('posting').add ({
 displayName: 'SUSHAN',
 username: 'suji',
 verified: true,
 text: tweetMessage,
 image: tweetImage,
 avatar: "https://ik.imagekit.io/amazonshop/269810262_4695284143881480_9138399916022005110_n_zY3REu1sK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643358383173",
 timestamp: firebase.firestore.FieldValue.serverTimestamp(),  //saved for sorting

});
// db.collection('posting').add({
//   name: user.displayName,
//   description: user.email,
//   message: input,
//   photoUrl: user.photoUrl || '',
//   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// });

setTweetImage("");
setTweetMessage("");


}


  return (
    <div className='tweetbox'>
    <form  >

        <div className='box_input'>
        <Avatar src="https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114" />


<input onChange={(e) => setTweetMessage(e.target.value)}
       value={tweetMessage} name="tweetMessage"
       placeholder="What's happening?"
       type="text" 
 />
    </div>

<input onChange={(e) => setTweetImage(e.target.value)}
       value={tweetImage} name="tweetImage"
       
 className=" image " placeholder=' Optional: Enter image URL please' type="text" />
 
        <Button  onClick={sendTweet}
        className='tweetbutton'>TWEET</Button>
    </form>
    
    
    </div>
  )
}

export default Tweetbox