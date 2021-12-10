import './style.css'
import {ReactComponent as Enviar} from '../../assets/enviar.svg'
import {ReactComponent as Insta} from '../../assets/insta.svg'
import {ReactComponent as Local} from '../../assets/localiza.svg'
import {ReactComponent as Tel} from '../../assets/telefone.svg'
import {ReactComponent as Mail} from '../../assets/mail.svg'
const Contact = () => {
    return(
        <div className="contato">
            <h1 className='nomeContato'>Contato</h1>
            <p className='Nome'>Nome</p>
            <p className='mailNome'>Email</p>
            <p className='Tel'>Telefone</p>
            <p className='Mensagem'>Mensagem</p>
        <Enviar className='caixaEnviar'/>
        <Insta className='Insta'/>
        <Local className='Local'/>
        <Tel className='Telefone'/>
        <Mail className='email'/>
        </div>
    )
}
export default Contact