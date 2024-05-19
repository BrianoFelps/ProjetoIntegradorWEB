import './ThreeDotIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

interface Props{
    onClick: () => void;
}

function ThreeDotIcon(props: Props){
    return(
        <div id='ThreeDI'>
            <div id='ThreeDotIconOption' onClick={props.onClick}>
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default ThreeDotIcon