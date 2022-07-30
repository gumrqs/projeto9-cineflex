import { Link } from "react-router-dom";

export default function HorarioDasSessoes({horaSessoes, idsessoes}){
    let idSessoes= `/assentos/${idsessoes}`
    return(
        <>
            <Link to={idSessoes} className="horasecao">
            <div >{horaSessoes}</div>
            </Link>
        </>
    )

}