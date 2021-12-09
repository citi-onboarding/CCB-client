import React from 'react';
import './style.css';
import Banner from './Views/Banner/Banner';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
import Carousel from './Views/Projetos/carousel';
import Campanha from './Views/Campanha';
import Donate from './Views/doacao/doacao';
import NossaMissao from './Views/NossaMissao/index'
import NavBar from './Views/NavBar';
import Rodape from './Views/Rodape';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <NossaMissao/>
      <Carousel/>
      <Campanha/>
      <Donate/>
      <Rodape/>

  </div>
)
  }

export default App;
