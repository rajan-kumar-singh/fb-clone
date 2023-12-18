import { Avatar } from "@mui/material";
import React from "react";
import './css/post.css'
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';



export default function Posts({name,Time,title,image ,profileURL}) {
  
  return (
    <div className="post">
      <div className="post_top">
        <div className="post_topLeft">
          <Avatar src={profileURL}/>
          <div className="postInfo">
            <h4>{name}</h4>
            <p>{Time} <PublicIcon />
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_middle">
        
        <p>
         {title}

        </p>
        {image && <img src={image}/>}
        
        

      </div>
      <div className="post_button">
        <div className="post_buttomOptoin">
<ThumbUpOffAltIcon/><p>Like</p>
</div>
<div className="post_buttomOptoin">
<ChatBubbleOutlineIcon/><p>Comment</p>
</div>
<div className="post_buttomOptoin">
<ShareIcon/><p>Share</p>

        </div>

      </div>
    </div>
  );
}
