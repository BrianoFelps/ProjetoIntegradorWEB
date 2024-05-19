import "./FavoriteIcon.css"
import "../assets/FontAwesome/font-awesome-4.7.0/css/font-awesome.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

interface Props{
    src?: string;
    onClick: ()=> void;
}

function FavoriteIcon(props:Props){
    return(
        <div id="FavoriteIcon" onClick={props.onClick}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
    )
}

export default FavoriteIcon