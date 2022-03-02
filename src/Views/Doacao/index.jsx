import {ReactComponent as IconSVG} from '../../assets/a.svg'
import './style.css'
import {mainUrl} from '../../assets/index'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ReactComponent as SetaSVG} from '../../assets/seta.svg'



export const Doacao = () => {
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
           <div className='doacaoContainer'>
                <div className='doacaoCard'
                style={{backgroundImage: `url(${image})`}}
                >
                  <div className='doacaoCard'>
                  < IconSVG className='docaoSvg'/>
                  <h1 className='doacaoTitle'>Deseja nos ajudar?</h1>
                  <p className='doacaoText'>{text}</p>
                    
                  <button type="button" className='doacaoButton'>
                    <a href='https://escolacriarerecriar.com/ccb_donate' className='link'>            
                      Faça uma doação
                    </a>
                    <SetaSVG className='doacaoSeta'/>
                  </button>

                  <p className='pix'> PIX: {pix}</p>
                  </div>
                </div>
            </div>
        )
    }
    

