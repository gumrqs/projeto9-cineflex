
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import { Link } from 'react-router-dom';

export default function TelaSucesso(){
    const {cpf,nome,assentosSelecionados, idSessao} = useParams();
    
    const[filmeSessao, setFilmeSessao]= useState([]);
    const[ingresso, setIngresso]= useState('');
    const[listaAssentos, setListaAssentos]= useState([]);
    const[dadosFilme, setDadosFilme]= useState([]);
    const[horaFilme, setHoraFilme]= useState([]);
    const[diaFilme, setDiaFilme]= useState([]);
	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        
		promessa.then(resposta => {
            setListaAssentos(resposta.data.seats);
            setDadosFilme(resposta.data.movie);
            setHoraFilme(resposta.data);
            setDiaFilme(resposta.data.day);
                console.log(horaFilme, "aquis")

	
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
                            <p>{dadosFilme.title} {diaFilme.date} {horaFilme.name}</p>
                        </div>
                    </div>
                    <div className='dados-sessao'>
                            Ingressos
                        <div className='dados-filme2'>
                            <p>{dadosFilme.title} {diaFilme.date} {horaFilme.name}</p>
                        </div>
                    </div>
                    <div className='dados-sessao'>
                        Comprador
                        <div className='dados-filme2'>
                            <p>Nome:{nome} CPF:{cpf}</p>
                        </div>
                    </div>
                </div>
                <Link to='/' className='inicio'>
                <div className='inicio'>
                       VOLTAR PARA HOME
                </div>
                </Link>
        </>
    )
}