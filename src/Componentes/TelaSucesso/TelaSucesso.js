
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import { Link } from 'react-router-dom';

export default function TelaSucesso(){
    const {cpf,nome,assentosSelecionados, idSessao} = useParams();
    
   
    const[dadosFilme, setDadosFilme]= useState([]);
    const[horaFilme, setHoraFilme]= useState([]);
    const[diaFilme, setDiaFilme]= useState([]);
	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        
		promessa.then(resposta => {
            
            setDadosFilme(resposta.data.movie);
            setHoraFilme(resposta.data);
            setDiaFilme(resposta.data.day);
            

	
		});
        
	}, []);
    return(
        <>
                <div className='sucesso'>
                    <div className='texto'>
                    <p>Pedido feito com sucesso!</p>
                    </div>
                </div>
                <div className='tela-sucesso'>
                    <div className='dados-sessao'>
                        Filme e sessão
                        <div className='dados-filme2'>
                           <div className='texto-filme'>{dadosFilme.title}</div> 
                            <div className='texto-filme'>{diaFilme.date} {horaFilme.name}</div>
                        </div>
                    </div>
                    
                    <div className='dados-sessao'>
                           <h4> Ingressos </h4>
                        <div className='dados-filme2'>
                            <div className='texto-final'>Seu(s) Assento(s): {assentosSelecionados}</div>
                        </div>
                    </div>
                    <div className='dados-sessao'>
                        <h4>Comprador</h4>
                        <div className='dados-filme3'>
                            <div className='texto-final'>Nome:{nome}</div> 
                            <div className='texto-final'>CPF:{cpf}</div>
                        </div>
                    </div>
                </div>
                <Link to='/' className='inicio'>
                <div>
                       VOLTAR PARA HOME
                </div>
                </Link>
        </>
    )
}