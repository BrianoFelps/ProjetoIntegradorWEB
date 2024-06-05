import "./FavoriteIcon.css";
import "../assets/FontAwesome/font-awesome-4.7.0/css/font-awesome.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "axios";

interface FavoriteIconProps{
    userId: number;
    pageId: number;
    initialIsFavorite: boolean;
}

function FavoriteIcon({ userId, pageId, initialIsFavorite }: FavoriteIconProps){
    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

    const handleIconClick = async () => {
        try {
            if(isFavorite) {
                await axios.delete('http://localhost:8080/pages/Favorite', { data: {userId, pageId} });
            } else{
                await axios.post('http://localhost:8080/pages/Favorite', { userId, pageId});
            }
            setIsFavorite(!isFavorite);
        } catch(error) {
            console.error('Erro ao atualizar o favorito:', error);
        }
    };

    return(
        <div id="FavoriteIcon" onClick={handleIconClick}>
            <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStarRegular}></FontAwesomeIcon>
        </div>
    )
}

export default FavoriteIcon;