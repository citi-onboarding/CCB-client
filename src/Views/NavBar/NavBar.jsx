import react from "react";
import "./style.css";
import image_1 from '../../assets/image_1.png'

export const NavBar = () => {
    
    return (
        <div className="Navbar">
            <header>
                <img src={image_1} alt="logo ccb" height="50" className="img_navbar"></img>
                    <a class="home" href="#">Home</a>
                    <a class="quem_somos" href="#">Quem somos</a>
                    <a class="missao" href="#">Missão</a>
                    <a class="projetos" href="#">Projetos</a>
                    <a class="campanha" href="#">Campanha</a>
                    <a class="contato" href="#">Contato</a>
                    <a class="doar" href="#">----</a>
                    <button class="button_navbar">Doar</button>
            </header>
        </div>
    )
}