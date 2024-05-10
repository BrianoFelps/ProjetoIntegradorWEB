import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/LoginButton.css'

interface Props{
    onClick: () => void;
}

function LoginButton(props:Props){

    return(
        <button type="submit" className="btn btn-primary" id="btnEnter" onClick={props.onClick}>Entrar</button>
    )
}

export default LoginButton