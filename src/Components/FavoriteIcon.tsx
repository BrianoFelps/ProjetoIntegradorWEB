import "./FavoriteIcon.css"
import "../assets/FontAwesome/font-awesome-4.7.0/css/font-awesome.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import { EQ_API_URL } from "../utils/EquilibriumApiConfig";

function FavoriteIcon(){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);
        updateBooleanOnBackEnd(newFavoriteState);
    };

    const updateBooleanOnBackEnd = async (newFavoriteState: boolean) =>{
        try{
            await axios.put(`${EQ_API_URL}/pages/`, {
                isFavorited :newFavoriteState, id: 1
            });
            console.log(`Estado atualizado no backEnd. Boolean: ${newFavoriteState} `)
            
        } catch (error){
            console.error(`Erro ao atualizar o estado do isFavorited: ${error}`)
        }
    }

    useEffect(() => {
        const fetchIsFavorited = async () =>{
            try{
                const response = await axios.get(`${EQ_API_URL}/pages/`);
                const page = response.data.find((page: any) => page.id === 1);
                if (page){
                    setIsFavorite(page.isFavorited);
                    console.log(`Valor do isFav: ${page.isFavorited}`)
                }
            } catch (error) {
                console.error("Error fetching boolean: ", error)
            }
        }
        fetchIsFavorited()
    }, [])

    return(
        <div id="FavoriteIcon" onClick={handleIconClick}>
            <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStarRegular}></FontAwesomeIcon>
        </div>
    )
}

export default FavoriteIcon;