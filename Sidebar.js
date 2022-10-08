import React from 'react';
import "./Sidebar.css";
import Sideoption from './Sideoption';

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArticleIcon from '@mui/icons-material/Article';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebarr'>
    
    <TwitterIcon className="twitter_icon" />
    
<Sideoption active Icon={HomeIcon}  text="Home" />
<Sideoption Icon={SearchIcon} text="Explore" />
<Sideoption Icon={NotificationsNoneIcon} text="Notifications" />
<Sideoption Icon={MailOutlineIcon} text="Messages" />
<Sideoption Icon={BookmarkBorderIcon} text="Bookmarks"  />
<Sideoption Icon={ArticleIcon} text="Lists"  />
<Sideoption Icon={PermIdentityIcon} text="Profile"  />
<Sideoption Icon={PendingIcon} text="More"  />
 
<a href='/'>
<Button variant='outlined' className='tweet'>
SignOut</Button>
</a>

  </div>
  )
}
export default Sidebar