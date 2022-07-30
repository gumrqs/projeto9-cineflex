
import { Link } from "react-router-dom";
export default function Filmes ({filmes, id}){

	let idRotaFilme= `/sessoes/${id}`;
	return(
		<>	
			
            <div className='posters'>
			<Link to={idRotaFilme}>
                <img src={filmes}/>
			</Link>
			</div>
		</>
	)
}