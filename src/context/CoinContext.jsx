import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextPovider = (props) => {

    const [allcoin,setallcoin] = useState([]);
    const [currency,setcurrency] = useState({
        name: "usd",
        Symbol: "$"
    })

    const fetchallcoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-KYjeMSsyRp7d8L9uiyRKcsRR'}
          };
          
          fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    const contextValue = {

    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextPovider;
