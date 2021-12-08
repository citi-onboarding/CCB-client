import React from 'react';
import './style.css';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
import Carousel from './Views/Projetos/carousel';
import Campanha from './Views/Campanha';
import Donate from './Views/doacao/doacao';

const App = () => {
  return (
    <div className="App">
      <Campanha/>
      <Donate/>
      <Carousel/>
      <NossosParceiros/>
      
      
  </div>
)
  }

export default App;
