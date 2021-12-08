import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {mainUrl} from '../../assets/index.ts'
import './carousel.css'



const Carousel = () => {
  const [slickPhotos, setSlickPhotos] = useState([{ url: '', caption: '', name: '' }]);
  
    const getInfos = async () => {
    
    const res = await axios.get(`${mainUrl}/carrossel-projetos`);
    console.log(res)
    const { images } = res.data[0];
    setSlickPhotos(images);
  };
      useEffect(() => {
        getInfos();
      }, []);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    }


    return (
        <div className='divCarousel' id='footer'>
            <Slider {...settings}>
              {slickPhotos?.map((value) => (
                <div
                  className='cardC'
                  key={value.url}
                >
                  <img src={value.url} alt="" className='imgC'/>
                  <h1 className='h1C'>{value.name}</h1>
                  <p className='pC'>{value.caption}</p>
                </div>
              ))}
            </Slider>
        </div>
    );
  };

export default Carousel;