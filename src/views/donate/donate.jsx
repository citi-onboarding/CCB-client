import React from "react";
import './style.css'

function Donate(){
    return(
        <div className='container'>
            <svg className='svg'/>
        <h1 className='title'>
            Deseja nos Ajudar?
        </h1>
        <p className='text'>
            Ajude-nos a alcançar grandes resultados e mudar
        a vida de mais pessoas
        </p>

        <button type="button" className='button'>Faça uma doação</button>
        <p className='pix'> PIX: 0000000000</p>
        
        </div>
    );
}
export default Donate;