import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeOrder from './pages/coffeeorder';
import BraadOrder from './pages/breadorder';

function App() {
  const [coffee, setCoffee] = useState<number>(0)
  const [bread, setBread] = useState<number>(0)
  return (
    <div className="App">
      <CoffeeOrder coffee={coffee} setCoffee={setCoffee} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BraadOrder bread={bread} setBread={setBread}/>
    </div>
  );
}

export default App;
