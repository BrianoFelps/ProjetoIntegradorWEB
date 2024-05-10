import 'bootstrap/dist/css/bootstrap.min.css';
import imgplace from '../assets/temploemoji100porcentorealfi.svg';
import '../Components/LoginPageLogo.css'

interface Props{
    onClick?: () => void;
}

function LoginPageLogo(props:Props){

    return(
        <div id='logo' onClick={props.onClick}>
                <div id='aniLogo'>
                        <img id='LogoIcon' src={imgplace}></img>
                        <label htmlFor="textLogo" id='textLogo'>Equilibrium</label>
                </div>
        </div>
    )
}

export default LoginPageLogo