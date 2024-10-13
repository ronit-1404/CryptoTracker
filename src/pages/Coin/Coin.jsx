import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {

  const { coinId } = useParams();
  const [coindata, setCoindata] = useState(null);
  const [historicaldata, setHistoricaldata] = useState(null); // If you're going to use it later
  const { currency } = useContext(CoinContext);

  const fetchcoindata = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://pro-api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoindata(response))
      .catch(err => console.error(err));
  }

  const fetchhistoricaldata = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://pro-api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricaldata(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchcoindata();
    // If you want to fetch historical data as well, uncomment the next line
    fetchhistoricaldata();
  }, [currency]); // Re-fetch data when currency changes

  if (coindata, historicaldata) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coindata.image.large} alt="" />
          <p><b>{coindata.name} ({coindata.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-chart">
          <LineChart historicaldata={historicaldata}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
}

export default Coin;
