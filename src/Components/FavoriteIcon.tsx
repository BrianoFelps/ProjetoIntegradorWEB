import "./FavoriteIcon.css"
import "../assets/FontAwesome/font-awesome-4.7.0/css/font-awesome.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function FavoriteIcon(){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(!isFavorite);
    };

    return(
        <div id="FavoriteIcon" onClick={handleIconClick}>
            <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStarRegular}></FontAwesomeIcon>
        </div>
    )
}

export default FavoriteIcon