import './InputTypeText.css'

interface Props{
    placeholder?: string;
}

function Input(props: Props){
    return(
        <textarea id="Input" placeholder={props.placeholder}></textarea>
    )
}

export default Input;