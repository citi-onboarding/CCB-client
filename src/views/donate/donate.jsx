import React, {useState, useEffect} from "react";
import './style.css'
import IconSVG from './icons/icon.svg';
import {mainUrl} from '../../assets'
import axios from 'axios';
import foto from './icons/pta.jpeg'


const Donate = () => {
    /*const [text, setText] = useState('');
    const [image, setImage] = useState('');
  
    const getInfos = async () => {
      const res = await axios.get(`${mainUrl}/deseja-nos-ajudars`);
      const { Subtitulo, Imagens } = res.data;
      setText(Subtitulo);
      setImage(Imagens[0].url);
    };

    useEffect(() => {
      getInfos();
    }, []);
*/
    return(
        <div className='container'>

           <div className='card'> 
        <img src='./icons/icon.svg' className='svg'/>
        <h1 className='title'>
            Ajude-nos!
        </h1>
        <p className='text'>
            texto
        </p>
        <img src='./icons/pta.jpeg' className='img' alt='imagem de fundo'/>
        <button type="button" className='button'>Faça uma doação</button>
        <p className='pix'> PIX: 0000000000</p>
        
        </div>
        </div>
    );
}
export default Donate;