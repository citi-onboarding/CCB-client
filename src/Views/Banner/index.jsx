import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ReactComponent as SetaSVG} from '../../assets/seta.svg'
import {mainUrl} from '../../assets/index'
import './style.css'

export const Banner = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const getInfos = async () => {
    const res = await axios.get(`${mainUrl}/banners`);
    console.log(res)
    const { BannerSubtitle, BannerImage} = res.data[0];
    setText(BannerSubtitle);
    setImage(BannerImage.url)
  };
    useEffect(() => {
      getInfos();
    }, []);

  
      return(
         <div className='containerBanner'>
              <div 
              className='cardBanner'
              style={{backgroundImage: `url(${image})`}}
              >
                  <div className='infosBanner'>
                      <h1 className = 'tituloBanner'>Casa da Comunidade do Berardo (CCB Social)</h1>
                      <p className ='subtituloBanner'>{text}</p>
                      <button type="button" className='doacaoBanner'>
                      <a href='https://escolacriarerecriar.com/ccb_donate' className='linkBanner'> Doe</a>
                      <SetaSVG className='setaBanner'/></button>
                  </div>
                </div>
          </div>
      )
  }