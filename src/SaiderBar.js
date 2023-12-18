import React from 'react'
import SaidBarOption from './SaidBarOption'
import "./css/saidbar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';
export default function () {
   const [{user},dispatch]=useStateValue();
  return (
    <div className='saidbar'>
       
       <SaidBarOption src={user.photoURL} title={user.displayName}/>
        <SaidBarOption src='https://cdn-icons-png.flaticon.com/128/11517/11517038.png' title="Covid 19 Information Center"/> 
        <SaidBarOption src="https://img.icons8.com/?size=1x&id=GWVrNWbcMBID&format=png" title="Friends"/> 
        <SaidBarOption src="https://cdn-icons-png.flaticon.com/128/143/143438.png" title="Groups"/>

        <SaidBarOption src="https://cdn-icons-png.flaticon.com/128/4406/4406138.png" title="Watch"/>
        <SaidBarOption src="https://cdn-icons-png.flaticon.com/128/4450/4450277.png" title="Events"/>

        <SaidBarOption Icon={ExpandMoreIcon} title="See More"/>


    </div>
  )
}
