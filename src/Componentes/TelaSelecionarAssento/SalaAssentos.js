import { useState, useEffect } from 'react';
import axios from 'axios'

export default function SalaAssentos({ assentosSelecionadosName, setAssentosSelecionadosName, assento, situacao, idAssento, setAssentosSelecionados, assentosSelecionados}){
    
    const[verificandoAssento, setVerificandoAssento]= useState("poltronas");

function verificarAssento(resposta){

    
    if(resposta==="clicado" || situacao===true){
        const novArray=[...assentosSelecionados, idAssento]
        setAssentosSelecionados(novArray);
        setVerificandoAssento("selecionada")
        const novArrayName=[...assentosSelecionadosName, assento]
        setAssentosSelecionadosName (novArrayName)
    } 
    
    if(resposta=="indisponivel"){
        alert("Assento ocupado")
    }
    if(resposta==="reservada"){
        setVerificandoAssento("poltronas");
        const arrVerificar = assentosSelecionados.filter(verificador);
        const novArray=[...arrVerificar]
        setAssentosSelecionados(novArray);
        const arrVerificarName = assentosSelecionadosName.filter(verificador2);
        const novArrayName=[...arrVerificarName]
        setAssentosSelecionadosName(novArrayName);
        /* setArrAssentosSelecionados(novArray) */
        console.log(novArrayName, "TO AQUI")
    }
    
}
function verificador(obj){
    if(obj !== idAssento){
        
        return true;
    }


}
function verificador2(obj){
    if(obj!== assento){
        
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