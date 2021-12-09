import React from 'react';

import './style.css';
import Contato from './Views/Contato/Contato';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
const App = () => {
  return (
    <div className="App">
      <NossosParceiros/>
      <Contato/>
      
  </div>
)
  }

export default App;
