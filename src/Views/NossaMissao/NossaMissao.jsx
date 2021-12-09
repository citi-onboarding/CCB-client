// import missaofoto from "./missaofoto.jpg"
import axios from 'axios';
import {mainUrl} from '../../assets';
import React, { useEffect, useState } from 'react';
import "./style.css";

export const NossaMissao = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    

    const getInfos = async () => {
        const res = await axios.get(`${mainUrl}/nossa-missaos`);
        console.log(res)
      const {textoNossaMissao, imagemNossaImagem} = res.data[0];
      setText(textoNossaMissao);
      setImage(imagemNossaImagem.url);
      
    };
      useEffect(() => {
        getInfos();
      }, [])

    return(
            
        <div className = "containerMissao" id='missaolink'>
            
            <div className = "infosMissao">
                <h2 className = "tituloMissao">Nossa Missão</h2>
                <p className = "subtituloMissao">{text}</p>
            </div>
                <img src={image} alt="foto de crianças e instrutores" className = "imgMissao"/>
        </div>
            
      
    )
}