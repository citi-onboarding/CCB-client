import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mainUrl } from '../../assets/index.ts';
import "./style.css"
export const Contato = () => {
    
    const [text, setText] = useState([{ url: ''}]);
    

    const getInfos = async () => {
      const res = await axios.get(`${mainUrl}/contatoes`);
      const { Endereco, Email, InstagramUser, Telefone  } = res.data[0];
      console.log(res.data)
      setText(Endereco);
      setText(Email);
      setText(InstagramUser);
      setText(Telefone);

    };
      useEffect(() => {
        getInfos();
      }, []);


        return (
            <div class="Contato">
                <div class="title">
                    Contato
                </div>
                
                <div className="formulario">
            
                
                  <input type="text" id="fname" name="firstname" placeholder="Nome"/>
              
                  
                  <input type="text" id="lname" name="lastname" placeholder="Telefone"/>
              
                  
                  <input type="text" id="fname" name="firstname" placeholder="Email"/>
              
                  
                  <input type="text" id="lname" name="lastname" placeholder="Mensagem"/>
                
                  <input type="submit" value="Enviar"/>
                </div>
              </div>
          )
    }
  
  export default Contato;