import React, { useContext } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);



  return (
    <div className='sidebar'>
      <div className="top">
       <Link to="/" style={{textDecoration:"none" , cursor:"pointer"}}>
       <span className="logo">Arvind Kathare</span>
       </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
          <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
        <p className="title">LISTS</p>
        <Link to="/users" style={{textDecoration:"none"}}>
          <li>
          <PeopleIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
          <LocalMallOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          
          <li>
          <ShoppingCartOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <BarChartIcon className='icon'/>
            <span>Stats</span>
          </li>
           <li>
           <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </li> 
        <p className="title">SERVICE</p>
          <li>
          <HealthAndSafetyIcon className='icon'/>
            <span>System Health</span>
          </li> 
          <li>
          <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
           <li>
           <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li> 
        <p className="title">USER</p>
          <li>
          <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li> 
          <li>
          <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
       <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
       <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar