import './style.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Horarios from './Horarios'
import Footer from './Footer'


export default function TelaSelecionarHorario(){
    const {idFilme} = useParams();

    const[listaHorarios, setListaHorarios]= useState([]);
    const[urlFooter, setUrlFooter]= useState([]);
    

	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

		promessa.then(resposta => {
        setListaHorarios(resposta.data.days);
        setUrlFooter(resposta.data);
	
		});
        
	}, []);
    
    

    
    return (
        <>
            <div className='conteudo'>
                <div className='filmes'>
                    <p>Selecione o horário</p>
                </div>
            </div>
            <div>
                {listaHorarios.map((data,index) => <Horarios key={index} data={data.date} dia={data.weekday} disponiveis={data.showtimes} />)}
            </div>
            <div>
                 <Footer titulo={urlFooter.title} url={urlFooter.posterURL}/>
            </div>
                
        </>
    );
}