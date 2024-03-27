interface props{
    src:string
}
function imagem2(props : props){
    return(
        <div id="imagem2">
        <img src={props.src}/>
    </div>
    );
}
export default imagem2