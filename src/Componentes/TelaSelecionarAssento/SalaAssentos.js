import { useState, useEffect } from 'react';
import axios from 'axios'

export default function SalaAssentos({ setArrAssentosSelecionados, assento, situacao, idAssento, setAssentosSelecionados, assentosSelecionados}){
    
    const[verificandoAssento, setVerificandoAssento]= useState("poltronas");

function verificarAssento(resposta){

    
    if(resposta==="clicado" || situacao===true){
        const novArray=[...assentosSelecionados, idAssento]
        setAssentosSelecionados(novArray);
        setVerificandoAssento("selecionada")
          
    } 
    
    if(resposta=="indisponivel"){
        alert("da nao brother")
    }
    if(resposta==="reservada"){
        setVerificandoAssento("poltronas");
        const arrVerificar = assentosSelecionados.filter(verificador);
        const novArray=[...arrVerificar]
        setAssentosSelecionados(novArray);
        /* setArrAssentosSelecionados(novArray) */
        
    }
    
}
function verificador(obj){
    if(obj !== idAssento){
        
        return true;
    }


}


    return(
        <>
        {
            situacao == false
            ?
            <div onClick={()=> verificarAssento("indisponivel")} className="poltronas-indisponivel">
                <p>{assento}</p>
            </div>
            : 
            verificandoAssento ==="selecionada"
                ?
                <div onClick={()=> verificarAssento("reservada")}className="poltronas-reservadas">
                    <p>{assento}</p>
                 </div>
            :

            <div onClick={()=> verificarAssento("clicado")} className={verificandoAssento}>
                <p>{assento}</p>
            </div>

        }
        </>
    )
}