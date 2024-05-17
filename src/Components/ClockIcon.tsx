import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './ClockIcon.css'

interface Props{
    onClick: () => void;
}

function ClockIcon(props: Props){
    return(
        <div id='ClockI'>
            <div id='ClockIconOption' onClick={props.onClick}>
                {/* Defina o ícone usando uma string que representa o nome do ícone */}
                <FontAwesomeIcon icon={faClock} />
            </div>
        </div>
    )
}

export default ClockIcon