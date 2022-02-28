import { useState } from 'react'; 
import axios from 'axios';
import { url } from '../../config/config'; 
import './Contact.css';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  
export const Contact = () => {
    const [name, setName] = useState([]); 
    const [email, setEmail] = useState([]);
    const [telefone, setTelefone] = useState([]);
    const [message, setMessage] = useState([]);

	
    const data = { 
      name, email, telefone, message
    }
    const sendEmail = async (event) => { 
      try{

       event.preventDefault() 
        await axios.post(`${url}/emails`, data); 
        alert("Sucesso! Sua mensagem foi enviada!") 
        setName("") 
        setEmail("")
        setTelefone("")
        setMessage("")
      } catch (error) {
        alert(`Algo deu errado: ${error}`) 
      }
    }
	
			
      return (
        <section className='contact' id="contact">
          <div className='title'>Contato</div>
          <div className='contact-content'>
            <div className='forms'>
              <form className='Form' onSubmit={sendEmail}> 
                <input
                value={name} 
                type="text" 
                name="name" 
                placeholder="Nome"
                required
                onChange={(e) => setName(e.target.value)}
                 />
                <input
                value={telefone} 
                type="text" 
                name="telefone"
                placeholder="Telefone"
                required
                onChange={(e) => setTelefone(e.target.value)}
                />

                <input
                value={email}  
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)} 
                />

                
                <textarea
                value={message} 
                name="message"
                placeholder="Mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-buttom" type='submit'>Enviar</button>
              </form>
            </div>
          </div>
            <section className='info'>
              <button type="button" className='insta-button'>
                      <i class="fa fa-instagram"></i>
                      <a href='https://www.instagram.com/ccb_social/' className='insta-button'> Siga o nosso Instagram</a>
              </button>        
            
            <i class="location_on"></i>
            <div className='edress'>
              
              Rua Professor Lins e Silva, 161-A. Prado
              <br/>
              Recife, Pernambuco.
              <br/>
              50720-320
            </div>
            <div className='tel'>
              (81) 9 8796 8014
            </div>
            <div className='email'>
              casasocialdacomunidade@yahoo.com
            </div>
            </section>

        </section>
      );
    }
  
    