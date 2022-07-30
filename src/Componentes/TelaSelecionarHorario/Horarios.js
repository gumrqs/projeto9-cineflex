import { Link } from "react-router-dom";
import HorarioDasSessoes from "./HorarioDasSessoes";

export default function Horarios({disponiveis, data, dia}){
   
    
    return (
    <>
    
    <div className="dados-filme">
        <div className="data">
            {dia} - {data}
        </div>
        <div className="horas">
        {disponiveis.map(horario => <HorarioDasSessoes horaSessoes={horario.name} idsessoes={horario.id}/>)}
        </div>
    </div>
    </>
    )
}
