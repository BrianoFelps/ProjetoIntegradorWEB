import './NItem.css'
import EmojiMenu from './EmojiMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface props{
    onclick?: () => void;
    image: string;
    emojiMenuId: number;
    handleEmojiOpen: () => void;
    handleEmojiClose: () => void;
    NitemId: number;
}

function NItem (props: props){
    const [valueContent, setValueContent] = useState<string>('');
    const [ContentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        // Fica a ideia: caso não dê certo, tente fazer com base no ID
        const fetchValueContent = async () => {
            try{
                const response = await axios.get(`${EQ_API_URL}/pages/Elm/cards`);
                const card = response.data.find((card: { id: number }) => card.id === props.NitemId);
                const cardValue = card ? card.value : '';
                setValueContent(cardValue);
                setContentLoaded(true);
                // console.log(`Card value: ${cardValue}`)
            } catch (error) {
                console.error('Error fetching card:', error)
            }
        }

        fetchValueContent()
    }, [props.NitemId])

    const updateContentToBackend = async (updatedValue: string) => {
        try {

           await axios.put(`${EQ_API_URL}/pages/ElmD`, { id_property: 4, value: updatedValue, id: props.NitemId }); // Enviar o valor completo como string

            console.log(`Valor atualizado no banco de dados. Valor: ${updatedValue}`);

            
        } catch (error) {
            console.error(`Erro ao atualizar o valor: ${error}`);
        }
    };

    const handleInputChange = (newValue: string) => {
        setValueContent(newValue);
        updateContentToBackend(newValue);
      };

    return(
        <div id='NItemContainer' className='card'>
                    
            <img className='card-img-top' onClick={props.onclick} src={props.image} alt="" />
            <div id='NItem' className='card-body'>
                <EmojiMenu
                // emoji = {props.emoji}
                emojiMenuId={props.emojiMenuId}
                onOpen={props.handleEmojiOpen}
                onClose={props.handleEmojiClose}
                />
                <div id='NItemText' className='card-title lead'>
                {/* {Colocar index aqui para fornecer o valor individual de cada input no card} */}
                    <input
                    type="text"
                    value={
                        ContentLoaded !== false ? valueContent : ''
                    }
                    onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default NItem
