
import HorarioDasSessoes from "./HorarioDasSessoes";

export default function Horarios({disponiveis, data, dia}){
   
    
    return (
    <>
    
    <div className="dados-filme">
        <div className="data">
            {dia} - {data}
        </div>
        <div className="horas">
        {disponiveis.map((horario, index) => <HorarioDasSessoes key={index} horaSessoes={horario.name} idsessoes={horario.id}/>)}
        </div>
    </div>
    </>
    )
}
