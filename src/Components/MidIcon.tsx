import './MidIcon.css'
import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
    className?: string;
}

function MidIcon(props: Props){
    return(
        <div id='MidIconOutside' className={props.className}>
            <img alt="🏛️" id='MidIconInside' src={imgplace} onClick={props.onClick}></img>
        </div>
    )
}

export default MidIcon