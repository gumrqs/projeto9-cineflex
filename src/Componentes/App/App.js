import TelaSelecionarFilmes from "./TelaSelecionarFilmes/TelaSelecionarFilmes.js";
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaSelecionarHorario from "../TelaSelecionarHorario/TelaSelecionarHorario.js";
import TelaSelecionarAssento from "../TelaSelecionarAssento/TelaSelecionarAssento.js"
export default function App(){
    return (
        <>
        <div className='topo'>
            <p>CINEFLEX</p>
        </div>
        <BrowserRouter>
		
			<Routes>
				<Route path="/" element={<TelaSelecionarFilmes />} />
				{/* <Route path="/TelaPerguntas" element={<TelaPerguntas />}/> */}
			</Routes>
		</BrowserRouter>
        </>
    )
}