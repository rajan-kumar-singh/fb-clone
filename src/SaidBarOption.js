import React from 'react';
import "./css/saidbaroption.css"
import { Avatar, Icon } from '@mui/material';

export default function SaidBarOption({src,title,Icon}) {
 
  return (
    <div className='saidbarRow'>
   {src &&  < Avatar src={src}/>}
{Icon && <Icon/>}
<p>{title}</p>
      </div>
  )
}
