// React from 'react'
import './Navbar.css';
import {logo,flag} from "../../assets/index";
const Navbar = () => {
  return (
    <nav className='nav-frame'>
        <img className='logo' src={logo} alt="logo" />
        <div className='flagsection'>
        <img className='flag' src={flag} alt="flag" />
        </div>   
    </nav>
  )
}

export default Navbar