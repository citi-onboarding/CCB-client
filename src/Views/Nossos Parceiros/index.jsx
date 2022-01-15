
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mainUrl } from '../../assets/index.ts';
import "./style.css"

export const NossosParceiros = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState([{ url: ''}]);
    

    const getInfos = async () => {
      const res = await axios.get(`${mainUrl}/nossos-parceiros`);
      const { Imagens, Subtitulo  } = res.data[0];
      console.log(res.data)
      setText(Subtitulo);
      setImage(Imagens)
      
    };
      useEffect(() => {
        getInfos();
      }, []);


        return (
            <div class="NossosParceiros">
                <div>
                    <h1 className="parceirosTitle">Nossos Parceiros</h1>
                    <p className="parceirosSubtitle"> {text} </p>
                </div>
                
                <div class= "logos">
                    {image.map((value) => (
                        <div className="fotos">
                            <img src={value.url} alt="" />
                        </div>
                    ) )}
                </div>

            </div>
        )
    }
   