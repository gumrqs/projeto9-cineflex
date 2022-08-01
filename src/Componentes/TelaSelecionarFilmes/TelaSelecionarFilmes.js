import './style.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Filmes from './Filmes'

export default function TelaSelecionarFilmes(){

    const[listaFilmes, setListaFilmes]= useState([])

	useEffect(() => {
		const promessa = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		promessa.then(resposta => {
		setListaFilmes(resposta.data);
	
		});
	}, []);
    console.log(listaFilmes)

    return(

        <>
        <div className='conteudo'>
            <div className='filmes'>
                <p>Selecione o filme</p>
            </div>
        </div>

        <div className='todos-posters'>
           {listaFilmes.map((filme, index)=>  <Filmes key={index} filmes={filme.posterURL} id={filme.id} />)}
        </div>
        </>
    )
}

