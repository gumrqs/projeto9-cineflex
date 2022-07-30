import './style.css'
import React from 'react'
import { Link } from "react-router-dom";

import Filmes from './Filmes'

export default function TelaSelecionarFilmes(){

    return(

        <>
        
        <div className='conteudo'>
            <div className='filmes'>
                <p>selecione o filme</p>
            </div>
            
            <div className='img-filme'>
                <img src=''/>
            </div>
            <Filmes/>
        </div>
        </>
    )
}


        {/* <Link to="/TelaPerguntas">
            <button className='botao-inicio'>
                <p>Iniciar recall!</p>
        </button>
        </Link> */}