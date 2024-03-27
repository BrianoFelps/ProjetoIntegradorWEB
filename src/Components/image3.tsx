interface props{
    src:string
}
function image3(props : props){
    return(
        <div id="image3">
        <img src={props.src}/>
    </div>
    );
}
export default image3;