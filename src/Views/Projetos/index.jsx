
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller, Thumbs } from 'swiper';
import axios from 'axios';
import {mainUrl} from '../../assets/index.ts';
import './style.css';
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export const Projetos = () => {
  const [slickPhotos, setSlickPhotos] = useState([{ url: '', caption: '', name: '' }]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  
    const getInfos = async () => {

    const res = await axios.get(`${mainUrl}/carrossel-projetos`);
    console.log(res)
    const { images } = res.data[0];
    setSlickPhotos(images);
  };
      useEffect(() => {
        getInfos();
      }, []);



      const slides = [];
      for (let i = 0; i < 5; i += 1) {
        slides.push(
          <SwiperSlide key={`slide-${i}`} tag="li">
            <img
              src={`https://picsum.photos/id/${i + 1}/500/300`}
              style={{ listStyle: 'none' }}
              alt={`Slide ${i}`}
            />
          </SwiperSlide>
        );
      }
    
      const thumbs = [];
      for (let i = 0; i < 5; i += 1) {
        thumbs.push(
          <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
            <img
              src={`https://picsum.photos/id/${i}/163/100`}
              alt={`Thumbnail ${i}`}
            ></img>
          </SwiperSlide>
        );
      }
    
      const slides2 = [];
      for (let i = 9; i < 14; i += 1) {
        slides2.push(
          <SwiperSlide key={`slide-${i}`} tag="li">
            <img
              src={`https://picsum.photos/id/${i + 1}/500/300`}
              style={{ listStyle: 'none' }}
              alt={`Slide ${i}`}
            />
          </SwiperSlide>
        );
      }
    
      return (
        <div className='containerProjetos' id='containerProjetos'>
          <h1 id='h1c'>Projetos</h1>
        <React.Fragment style={{maxWidth: '80%'}}>
          <Swiper
            id="main"
            thumbs={{ swiper: thumbsSwiper }}
            controller={{ control: controlledSwiper }}
            tag="section"
            wrapperTag="ul"
            navigation
            loop
            spaceBetween={30}
            slidesPerView={3}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
              console.log('Slide index changed to: ', swiper.activeIndex);
            }}
            onReachEnd={() => console.log('Swiper end reached')}
            
          >
            {slickPhotos?.map((value) => (
                <SwiperSlide style={{padding: '0 100px 10px'}}>
                  <div
                    className='cardC'
                    key={value.url}
                  >
                    <img src={value.url} alt="" className='imgC'/>
                    <h1 className='h1C'>{value.name}</h1>
                    <p className='pC'>{value.caption}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
    
          {/* <Swiper
            id="thumbs"
            spaceBetween={5}
            slidesPerView={3}
            onSwiper={setThumbsSwiper}
          >
            {thumbs}
          </Swiper>
    
          <Swiper id="controller" onSwiper={setControlledSwiper}>
            {slides2}
          </Swiper> */}
        </React.Fragment>
        </div>
      );
    
  };
