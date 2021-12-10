import { useState } from 'react'; 
  import axios from 'axios';

  import { url } from '../../config/config'; 
    
  import './Contact.css';
  
  function Contact() {

    const [name, setName] = useState([]); 
    const [email, setEmail] = useState([]);
    const [subject, setSubject] = useState([]);
    const [message, setMessage] = useState([]);

	
    const data = { 
      name, email, subject, message
    }


    const sendEmail = async (event) => { 
      try{
// essa função abaixo é usada para cancelar o efeito padrão de envio de um 
// formulario, que no caso é de atualizar a página
       event.preventDefault() 
        await axios.post(`${url}/emails`, data); // aqui usamos o axios para fazer uma requisição post
// usando o url que está em config e a rota "emails" que nos criamos anteriormente, como é um método post, precisamos enviar algo junto
// e nesse caso é o objeto data que nós definimos algumas linhas acima
        alert("Sucesso! Sua mensagem foi enviada!") // alerta de sucesso
        setName("") // limpando os estados
        setEmail("")
        setSubject("")
        setMessage("")
      } catch (error) {
        alert(`Algo deu errado: ${error}`) // aviso de erro caso algo dê errado
      }
    }
	
			// Abaixo estamos criando o nosso componente com html, usamos a tag especial form que é usada
// para criar formulários (que é nosso objetivo), adicionamos o atributo onSubmit passando a função
// sendEmail que definimos mais para cima, ou seja, quando o formulário for enviado a função é chamada
// depois definimos os inputs de texto onde cada letra inserida é salva nos estados que definimos anteriorment
      return (
        <section className='contact' id="contact">
          <div className='contact-content'>
            <div className='forms'>
              <form className='Form' onSubmit={sendEmail}> 
                <input
                value={name} 
                type="text" 
                name="name" 
                placeholder="Digite seu nome"
                required
                onChange={(e) => setName(e.target.value)}
                 />
                <input
                value={email}  
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input
                value={subject} 
                type="text" 
                name="subject"
                placeholder="Digite o assunto"
                required
                onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                value={message} 
                name="message"
                placeholder="Tire suas dúvidas ou nos mande uma mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-buttom" type='submit'>ENVIAR</button>
              </form>
            </div>
          </div>
        </section>
      );
    }
  
  export default Contact;