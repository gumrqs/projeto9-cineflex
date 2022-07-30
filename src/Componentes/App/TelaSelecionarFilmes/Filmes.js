
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Filmes (){

const[listaFilmes, setListaFilmes]= useState([])

	useEffect(() => {
		const promessa = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		promessa.then(resposta => {
		setListaFilmes(resposta.data);
		console.log(listaFilmes, "help ")
		});
	}, []);
	return(
		<>
		oi
		
		</>
	)
	

}