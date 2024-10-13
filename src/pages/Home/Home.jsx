import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom'; // Correct import here

const Home = () => {
  const { allcoin, currency } = useContext(CoinContext);
  const [displaycoin, setdisplaycoin] = useState([]);
  const [input, setinput] = useState('');

  const inputhandler = (e) => {
    setinput(e.target.value);
    if (e.target.value === "") {
      setdisplaycoin(allcoin);
    }
  };

  const searchhandler = async (e) => {
    e.preventDefault();
    const coins = await allcoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setdisplaycoin(coins);
  };

  // When allcoin changes, it will update displaycoin
  useEffect(() => {
    setdisplaycoin(allcoin);
  }, [allcoin]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>largest <br />Crypto Marketplace</h1>
        <p>Welcome..!! Sign up to explore more about cryptos.</p>
        <form onSubmit={searchhandler}>
          <input onChange={inputhandler} list='coinlist' value={input} type="text" placeholder='Search crypto..' required />
          <datalist id='coinlist'>
            {allcoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hr Change</p>
          <p className='market-cap'>MarketCap</p>
        </div>
        {displaycoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}> {/* Correct component here */}
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
