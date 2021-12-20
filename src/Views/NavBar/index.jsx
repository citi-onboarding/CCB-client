import React from "react";
import "./style.css";
import logo from '../../assets/logo.svg'

export const NavBar = () => (
    <div className="NavbarContainer">
        <header className='spacing'>
            <img src={logo} alt='logo'/>
            <a class="home" href="#">Home</a>
            <a class="quem_somos" href="#">Quem somos</a>
            <a class="missao" href="#missaolink">Missão</a>
            <a class="projetos" href="#containerProjetos">Projetos</a>
            <a class="campanha" href="#campanhalink">Campanha</a>
            <a class="contato" href="#">Contato</a>
            <a class="doar" href="https://escolacriarerecriar.com/ccb_donate">
                <button class="ButtonNavbar">
                    Doar
                </button>
            </a>
        </header>
    </div>
)
