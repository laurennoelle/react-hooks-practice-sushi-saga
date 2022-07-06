import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const displaySize = 4;
const startMoney = 100;

function App() {
  const [sushis, setSushis] = useState([])
  const [startSushi, setStartSushi] = useState(0)
  const [money, setMoney] = useState(startMoney);

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(setSushis);
}, []);

  function nextSushis() {
    setStartSushi((startSushi + displaySize) % sushis.length)
  }

  function eatSushi(sushi) {
    if (sushi.price <= money) {
    setSushis(
      sushis.map(s => sushi.id === s.id ? {...s, eaten: true} : s)
      )
    setMoney(money - sushi.price);
  }
}
  
  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis.slice(startSushi, startSushi + displaySize)} 
      nextSushis={nextSushis}
      eatSushi={eatSushi} 
      />
      <Table plates={sushis.filter((s) => s.eaten)} money={money}/>
    </div>
  );
}

export default App;
