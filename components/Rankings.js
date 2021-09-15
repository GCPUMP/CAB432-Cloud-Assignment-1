import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Coin from './Coin';
import axios from 'axios';


export default function App() {

  const [findCoin, setFindCoin] = useState('');
  const [currency, setCurrency] = useState([]);
  const [news, setNews] = useState([]);
  const [rowData, setRowData] = useState([]);


  //News API Call
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=ai&apiKey=edbb14c4a3c441aea6386fa9e3523b84"
      )
      .then(response =>
        response.data.articles.map(article => ({
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`
        }))
      )
    .then((finaldata) => setRowData(finaldata));
  }, []);

  //Coin API Call
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCurrency(res.data);
      })
  }, []);


function printArticles(){

console.log("herro" + rowData);

}

// Searching Coin
  const searchCoin = e => {
    setFindCoin(e.target.value);
  };


//Converting User Search to lowercase
  const lowerSearch = currency.filter(coin =>
    coin.name.toLowerCase().includes(findCoin.toLowerCase())
  );



//console.log("heello" + rowData.title)

console.log("herro" + rowData);
console.log("coindata - " + lowerSearch.map)


    return (

      <div className = "body" >
<div className="Table-Section">
<div class="currency-search">
       <button onClick={() => printArticles()}>Print</button>
<a>{rowData.title}</a>

        <h1 class="search-text">Search a Crypto Currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={searchCoin}
            placeholder='Search'
          />
        </form>
</div>

{rowData.map(news => {
        return (
        <a>{news.title}</a>
        );
      })}

      {lowerSearch.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}

  
</div>
       </div>
    );
}
