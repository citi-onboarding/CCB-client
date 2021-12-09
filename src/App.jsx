import React from 'react';
import './style.css';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
import Carousel from './Views/Projetos/carousel';
import Campanha from './Views/Campanha';
import Donate from './Views/doacao/doacao';
import NossaMissao from './Views/NossaMissao/index'

const App = () => {
  return (
    <div className="App">
      <NossaMissao/>
      <Carousel/>
      <Campanha/>
      <Donate/>

  </div>
)
  }

export default App;
