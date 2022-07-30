export default function Footer({titulo, url}){
    return(
        <>
        <div className="dados-footer">

               <div className="fundo-img-footer"> 
                    <img className="img-footer" src={url}/>
               </div>
                <div> 
                    <p>{titulo}</p> 
                </div>
        </div>
        </>
    )
}