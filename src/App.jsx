import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'
import './style.css';
import {Banner, NavBar, NossaMissao, Projetos, Campanha, Rodape, Doacao, NossosParceiros} from './Views';



const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <NossaMissao/>
      <Projetos/>
      <Campanha/>
      <NossosParceiros/>
      <Doacao/>
      <Rodape/>
    </div>
)
  }

export default App;
