import React from 'react';
import { Logo } from '../src/assets'
import './style.css';
import NossosParceiros from './Views/Nossos Parceiros/NossosParceiros';
const App = () => {
  return (
    <div className="App">
      NossosParceiros
      <img src={Logo} alt="" />
      <p>
        Made with
        {' '}
        <strong>&lt; &#x0002F; &gt;</strong>
        {' '}
        and
        {' '}
        atualizado
        {''}
        <strong>&hearts;</strong>
        {' '}
        by CITi
      </p>
  </div>
)
  }

export default App;
