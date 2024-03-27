interface props{
    src:string
}

function imagem(Props : props){
    return(
        <div id="image">
            <img src={Props.src}/>
        </div>
    )
}

export default imagem