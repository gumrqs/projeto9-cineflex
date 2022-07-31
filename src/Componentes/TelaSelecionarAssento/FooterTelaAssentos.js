export default function FooterTelaAssentos({titulo, url, hora, dia}){
    return(
        <>
        <div className="dados-footer">

               <div className="fundo-img-footer"> 
                    <img className="img-footer" src={url}/>
               </div>
                <div> 
                    <p>{titulo}</p> 
                 <p>{dia} - {hora}</p>
                </div>
        </div>
        </>
    )
}