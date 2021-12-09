import react from "react";
import "./style.css";
import {ReactComponent as DoarSVG} from '../../assets/doar.svg'
import {ReactComponent as DoeSVG} from '../../assets/doe.svg'
import logo from '../../assets/logo.svg'
export const NavBar = () => {
    
    return (
        <div className="Navbar">
            <header className='spacing'>
                    <img src={logo} className='img_nabavr'/>
                    <a class="home" href="#">Home</a>
                    <a class="quem_somos" href="#">Quem somos</a>
                    <a class="missao" href="#">Missão</a>
                    <a class="projetos" href="#">Projetos</a>
                    <a class="campanha" href="#">Campanha</a>
                    <a class="contato" href="#">Contato</a>
                    <a class="doar" href="https://escolacriarerecriar.com/ccb_donate">
                    <button class="button_navbar">Doar</button></a>
            </header>
        </div>
    )
}