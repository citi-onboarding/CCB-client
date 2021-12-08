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
      slidesToShow: 3,
      slidesToScroll: 1
    }


    return (
        <div className='divCarousel' id='footer'>
          <h1 id='h1'>Projetos</h1>
            <Slider {...settings}>
              {fotos.map((value) => (
                <div
                  className='cardC'
                  key={value.url}
                >
                  <img src={value.url} alt="" className='imgC'/>
                  <h1 className='h1C'>{subtitle}</h1>
                  <p className='pC'>{value.caption}</p>
                </div>
              ))}
            </Slider>
        </div>
    );
  };

export default Somos;