import { useState, useEffect } from 'react';

export default function SalaAssentos({ assento, situacao }){
    const[verificandoAssento, setVerificandoAssento]= useState("poltronas");
function verificarAssento(resposta){
    if(resposta==="clicado" && situacao===false){
        setVerificandoAssento("selecionada")
    } 
    
    if(resposta=="indisponivel"){
        alert("da nao brother")
    }
    if(resposta==="reservada"){
        setVerificandoAssento("poltronas")
    }
    
}

    return(
        <>
        {
            situacao == true
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