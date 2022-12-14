import './style.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SalaAssentos from './SalaAssentos';
import FooterTelaAssentos from './FooterTelaAssentos';
import TelaSucesso from '../TelaSucesso/TelaSucesso';



export default function TelaSelecionarAssento(){
    const {idSessao} = useParams();
    const[listaAssentos, setListaAssentos]= useState([]);
    const[nome, setNome]= useState('');
    const[cpf, setCpf]= useState('');
    const[dadosFilme, setDadosFilme]= useState([]);
    const[horaFilme, setHoraFilme]= useState([]);
    const[diaFilme, setDiaFilme]= useState([]);
    const[assentosSelecionados, setAssentosSelecionados] = useState([]);
    const[assentosSelecionadosName, setAssentosSelecionadosName] = useState([]);
    


		
    const navigate=useNavigate();

   function confirmarAssento(e){
    e.preventDefault();
    if(cpf.length<11 || cpf.length>11 )
    {
        alert("Digite um cpf válido, somente com números: xxxxxxxxxxx");
    }
    else{
        if(assentosSelecionadosName.length===0){
            alert("selecione um assento ai")
        } 
        else{
       const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: assentosSelecionados,
			name: nome,
            cpf: cpf
            
		});
        requisicao.catch(()=>console.log("deu erro"))
       requisicao.then(navigate(`/sucesso/${cpf}/${nome}/${assentosSelecionadosName}/${idSessao}`));
       setCpf('');
       setNome('');
    }
   }
   setCpf('');
   setNome('');

}
    

	useEffect(() => {
		const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        
		promessa.then(resposta => {
            setListaAssentos(resposta.data.seats);
            setDadosFilme(resposta.data.movie);
            setHoraFilme(resposta.data);
            setDiaFilme(resposta.data.day);


	
		});
        
	}, []);
    
    
    return(
        <>
            <div className='conteudo'>
                <div className='filmes'>
                    <p>Selecione o(s) assento(s)</p>
                </div>
            </div>
            <div className="sala">
            {listaAssentos.map((assento,index)=> <SalaAssentos key={index} situacao={assento.isAvailable} assento={+assento.name} idAssento={+assento.id} assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados} setAssentosSelecionadosName={setAssentosSelecionadosName} assentosSelecionadosName={assentosSelecionadosName}/>)}
            </div>
            <div className='legenda'>
                <div className='circ'>
                    <div className='disponivel'>
                    </div>
                    <p>Selecionado</p>
                </div>
                <div className='circ'>
                    <div className='reservada'>
                    </div>
                    <p>Disponível</p>
                </div>
                <div className='circ'>
                    <div className='indisponivel'>
                    </div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className='formulario'>
                <form onSubmit={confirmarAssento}>
                    <div className='dados'>
                        <div className='input-formulario'>
                            <div className='titulo'>
                                <span>Nome do comprador</span>
                                <input type="text" onChange={(e) => setNome(e.target.value)} 
                                    value={nome}
                                    required
                                    placeholder='Digite seu nome...'
                                />
                            </div>
                        </div>
                        <div className='input-formulario'>
                            <div className='titulo'>
                                <span>CPF do comprador</span>
                                <input type="number" onChange={(e) => setCpf(e.target.value)}
                                    value={cpf}
                                    required
                                    placeholder='Digite seu CPF...'
                                />
                            </div>
                        </div>
                        <button className='guardar-dados'> <p>Reservar assento(s)</p></button>
                    </div>
                </form>
            </div>
            <div>
                 <FooterTelaAssentos titulo={dadosFilme.title} url={dadosFilme.posterURL} hora={horaFilme.name} dia={diaFilme.weekday}/>
            </div>

        </>
    )
}