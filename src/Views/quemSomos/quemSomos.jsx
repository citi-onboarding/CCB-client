import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {mainUrl} from '../../assets/index.ts'
import './style.css'



const Somos = () => {
    const [fotos, setFotos] = useState([{url: ''}]);
    const [subtitle, setText] = useState('');
  
    const getInfos = async () => {

    const res = await axios.get(`${mainUrl}/quem-somos`);
    console.log(res)
    const { carrousel, subtitle } = res.data;
    setFotos(carrousel);
    setText(subtitle);
  };
      useEffect(() => {
        getInfos();
      }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1
    }


    return (
        <div className='divCarousel' id='footer'>
          <fotos/>
        </div>
    );
  };

export default Somos;