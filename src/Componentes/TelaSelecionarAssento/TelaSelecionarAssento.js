import './style.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function TelaSelecionarAssento(){
    const {idSessao} = useParams();

    const[listaAssentos, setListaAssentos]= useState([]);
   /*  const[urlFooter, setUrlFooter]= useState([]); */
    

	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		promessa.then(resposta => {
            setListaAssentos(resposta.data);
       /*  setUrlFooter(resposta.data); */
	
		});
        
	}, []);
    console.log(listaAssentos, "to aqui o")
    
    return(
        <>
        ola
        </>
    )
}