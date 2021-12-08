import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {mainUrl} from '../../assets/index.ts'
import Card from "./component/component.jsx";
import './test.css'


const Test = () => {
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
      slidesToShow: 3,
      slidesToScroll: 1
    }


    return (
        <div className='divC'>
            <Slider {...settings}>
              {slickPhotos?.map((value) => (
                <div
                  className='cardC'
                  key={value.url}
                >
                    <Card image={value.url} desc={value.caption} name={value.name}/>
                </div>
              ))}
            </Slider>
        </div>
    );
  };

export default Test;