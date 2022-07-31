import './style.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SalaAssentos from './SalaAssentos';



export default function TelaSelecionarAssento(){
    const {idSessao} = useParams();
        console.log(idSessao, "id sessao aqui")
    const[listaAssentos, setListaAssentos]= useState([]);
   /*  const[urlFooter, setUrlFooter]= useState([]); */
    

	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        console.log(promessa, "prometido");
		promessa.then(resposta => {
            setListaAssentos(resposta.data.seats);
       /*  setUrlFooter(resposta.data); */
	
		});
        
	}, []);
    console.log(listaAssentos, "to aqui o")
    
    return(
        <>
            <div className='conteudo'>
                <div className='filmes'>
                    <p>Selecione o(s) assento(s)</p>
                </div>
            </div>
            <div className="sala">
            {listaAssentos.map((assento,index)=> <SalaAssentos key={index} situacao={assento.isAvailable} assento={assento.name}/>)}
            </div>
        </>
    )
}