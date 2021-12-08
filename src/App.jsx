import React from 'react';
import './style.css';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
import {Donate} from './Views/doacao/doacao';
import {Banner} from './Views/Banner/Banner';

const App = () => {
  return (
    <div className="App">
      <Banner/>
      <Donate/>

  </div>
)
  }

export default App;
