import axios from 'axios';
import {mainUrl} from '../../assets/index.ts';
import React, { useEffect, useState } from 'react';
import "./style.css";

export const Campanha = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    

    const getInfos = async () => {
        const res = await axios.get(`${mainUrl}/campanhas`);
        console.log(res)
      const {descricao, foto} = res.data[0];
      setText(descricao);
      setImage(foto.url);
      
    };
      useEffect(() => {
        getInfos();
      }, [])

    return(
            
        <div className = "containerCampanha">
            
            <div className = "infosCampanha">
                <h2 className = "tituloCampanha">Campanha</h2>
                <p className = "subtituloCampanha">{text}</p>
            </div>
                <img src={image} alt="foto de uma das campanhas" className = "imgCampanha"/>
        </div>
            
      
    )
}
export default Campanha;
