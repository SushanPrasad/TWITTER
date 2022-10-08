import React, {useEffect , useState} from 'react';
import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from "./Post";
import db from './firebase';

function Feed() {
 
  const [posting, setPosting] = useState([]);
  useEffect(() => {
          db.collection('posting').orderBy('timestamp', 'desc')  //order by latest or new
          .onSnapshot(snapshot => (
setPosting (snapshot.docs.map(doc => doc.data ()))
          ))
  }, []);

  console.log('FEEDS',posting)
    return (
    <div className='feed'>


<div className='feed_header'>
    <h1 className='home_feed'> Home  </h1>
    
<Tweetbox />

<div>
{posting.map(post => (
  <Post
      displayName={post.displayName}
      username=  {post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}

        />


)

)}

</div>
{/* 

<Post displayName="SUSHAN PRASAD"
      username=  "suji"
      verified={true}
      text="I will finish this project asap   🙏🏽 "
      avatar="https://ik.imagekit.io/amazonshop/269810262_4695284143881480_9138399916022005110_n_zY3REu1sK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643358383173"
      image="https://ik.imagekit.io/amazonshop/7a1b84b0d02802cca66d976556d8699d_xoA2F-sYX.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656688943563 "

        />
        <Post displayName="SUSHAN PRASAD"
      username=  "suji"
      verified={true}
      text="I will finish this project asap   🙏🏽 "
      avatar="https://ik.imagekit.io/amazonshop/269810262_4695284143881480_9138399916022005110_n_zY3REu1sK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643358383173"
      image="https://ik.imagekit.io/amazonshop/7a1b84b0d02802cca66d976556d8699d_xoA2F-sYX.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656688943563 "

        />

<Post displayName="SUSHAN PRASAD"
      username=  "suji"
      verified={true}
      text="I will finish this project asap   🙏🏽 "
      avatar="https://ik.imagekit.io/amazonshop/269810262_4695284143881480_9138399916022005110_n_zY3REu1sK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643358383173"
      image="https://ik.imagekit.io/amazonshop/7a1b84b0d02802cca66d976556d8699d_xoA2F-sYX.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1656688943563 "

        />
 */}







    
    </div>
    
    
    </div>


)
}



export default Feed
