import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrowicon from '../../assets/arrow_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="navright">
            <select>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src={arrowicon} alt="Arrow Icon" /></button>
        </div>
    </div>
  );
}

export default Navbar;
