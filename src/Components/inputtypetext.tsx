interface Props{
    type: string;
}

function Input(props : Props){
    return(
        <input type={props.type} /> 
    )
}

export default Input;
   
