import React from 'react';
import './style.css';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
import NavBar from './Views/NavBar';
import Rodape from './Views/Rodape';
import {Donate} from './Views/doacao/doacao';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>   
      <Donate/>
      <Rodape></Rodape>  
  </div>
)
  }

export default App;
