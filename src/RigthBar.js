import React from 'react'
import "./css/rigthbar.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';


export default function RigthBar() {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <div className='widget_headerLeft'>
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon/>

      </div>
      <div className='widget_body'>
        <div className='widget_bodyOption ml10'>
          <Avatar src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_1280.jpg"/>
          <h4>Rajan</h4>
        </div>
        <div className='widget_bodyOption ml10'>
          <NotificationsActiveIcon/>
          
          <p>amit </p>
        </div>
        <div className='widget_bodyOption ml10'>
          <VolumeUpIcon/>
          <p>Dhiraj singh</p>
        </div>
      </div>
      <hr/><br/>
      <div className='widget_header'>
        <div className='widget_headerLeft'>
        <h4>Contact</h4>
        </div>
        <div className='widget_headerRight'>
          <VideocamIcon/>
          <SearchIcon/>
          <MoreHorizIcon/>

        </div>

      </div>
      <div className='widget_bodyOption ml10'>
          <Avatar src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_1280.jpg"/>
          <h4>Rajan</h4>
        </div>
        <div className='widget_bodyOption ml10'>
          <Avatar src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_1280.jpg"/>
          <h4>Rajan</h4>
        </div>



      </div>
  )
}
