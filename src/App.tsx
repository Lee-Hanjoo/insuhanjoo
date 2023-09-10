import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeOrder from './pages/coffeeorder';
import Braad from './pages/bread';

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
      <Braad />
    </div>
  );
}

export default App;
