import './MidIcon.css'
import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
}

function MidIcon(props: Props){
    return(
        <div id='MidIconOutside'>
            <img alt="🏛️" id='MidIconInside' src={imgplace} onClick={props.onClick}></img>
        </div>
    )
}

export default MidIcon