import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
const Home = () => {

  const {allcoin, currency} = useContext(CoinContext);
  const [displaycoin, setdisplaycoin] = useState([]);

  //when ever all coin changes it will execute the function(setdisplaycoin) in usestate allcoin is depedency for useeffect function
  useEffect(()=>{
    setdisplaycoin(allcoin);
  },[allcoin])

  return (
    <div className='home'> 
      <div className='hero'>
        <h1>largest <br/>Crypto Marketplace</h1>
        <p>Welcome..!! Sign up to explore more about cryptos.</p>
        <form>
          <input type="text" placeholder='Search crypto..' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24Hr Change</p>
          <p className='market-cap'>MarketCap</p>
        </div>
        {
          displaycoin.slice(0,10).map((item, index)=>(
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
