import { Link } from "react-router-dom";

export default function HorarioDasSessoes({horaSessoes, idsessoes}){
    let idSessoesx= `/assentos/${idsessoes}`
    return(
        <>
            <Link to={idSessoesx} className="horasecao">
            <div >{horaSessoes}</div>
            </Link>
        </>
    )

}