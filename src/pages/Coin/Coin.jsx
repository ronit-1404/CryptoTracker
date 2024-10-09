import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {

   const {coinId} = useParams();
   const [cointdata,setcointdata] = useState();
   const {currency} = useContext(CoinContext);

   const fetchcoindata = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://pro-api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(response => response.json())
  .then(response => setcointdata(response))
  .catch(err => console.error(err));
   }

   useEffect(()=>{
    fetchcoindata();
   },[currency])

  if(cointdata){
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={cointdata.image.large} alt="" />
          <p><b>{cointdata.name} ({cointdata.symbol.toUpperCase()})</b></p>
        </div>
      </div>
    )
  }else{
    return (
        <div className="spinner">
          <div className="spin"></div>
        </div>
    )
  }
}

export default Coin
