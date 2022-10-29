import React, { useContext } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);


  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
          <NightlightIcon className='icon' onClick={() => dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
          <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
           <NotificationsIcon className='icon'/>
           <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
           <div className="counter">2</div>

          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon'/>
          </div>
          <div className="item">
           <img
            src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" 
            alt="" 
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar