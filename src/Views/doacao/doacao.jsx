import foto from '../../assets/foto.jpeg'
import {ReactComponent as IconSVG} from '../../assets/a.svg'
import './style.css'
import {mainUrl} from '../../assets/index'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ReactComponent as SetaSVG} from '../../assets/seta.svg'



export const Donate = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [pix, setPix] = useState('');

    const getInfos = async () => {
      const res = await axios.get(`${mainUrl}/deseja-nos-ajudars`);
      console.log(res)
      const { descricao, imagem, pix } = res.data[0];
      setText(descricao);
      setImage(imagem[0].url)
      setPix(pix);
    };
      useEffect(() => {
        getInfos();
      }, []);

    
        return(
           <div className='container'>
                <div className='card'>
                < IconSVG className='svg'/>
                <img src={image} className='image'/>
                    <h1>Deseja nos ajudar?</h1>
                    <p>{text}</p>
                    
        <button type="button" className='doacao'><a href='https://escolacriarerecriar.com/ccb_donate' className='link'>            
            Faça uma doação</a>
            <SetaSVG className='seta'/>
            </button>

        <p className='pix'> PIX: {pix}</p>
                    
                </div>
            </div>
        )
    }
    export default Donate;
    

