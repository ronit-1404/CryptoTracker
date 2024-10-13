import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrowicon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link  } from 'react-router-dom';

const Navbar = () => {
  const {setCuurency} = useContext(CoinContext)

  const currencyHandeler = (e) => {
    switch(e.target.value){
      case "usd":{
        setCuurency({name: "usd", Symbol: "$"})
        break;
      }
      case "inr":{
        setCuurency({name: "inr",Symbol: "₹"})
        break;
      }
      case "eur":{
        setCuurency({name: "eur",Symbol: "€"})
        break;
      }
      default:{
        setCuurency({name: "usd",Symbol: "$"})
        break;
      }
      //whenever we will select the dropdown and choose another currency it will  add another request in coincontext file whenever currency dependency changes then it will call fetchallcoinfunction() and it will add anthoer api request with updated currency
    }
  }
  return (
    <div className='navbar'>
      <link to={'/'}>
        <img src={logo} alt="Logo" className='logo'/>
        <ul>
            <link to={'/'}><li>Home</li></link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="navright">
            <select onChange={currencyHandeler}>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src={arrowicon} alt="Arrow Icon" /></button>
        </div>
        </link>
    </div>
  );
}

export default Navbar;
