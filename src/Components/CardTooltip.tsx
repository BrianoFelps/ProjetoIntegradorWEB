import React, { useEffect, useState} from 'react';
import MainPage from '../all-in-one/MainPage';
import EmojiMenu from './EmojiMenu';
import '../Components/CardTooltip.css'
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface props{
  EmojiMenuId: number;
  InputWcardId: number;
  UserId: number | undefined;
  // emoji: string;
}

function YourComponent(props: props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeLi, setActiveLi] = useState<HTMLLIElement | null>(null);
  const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
  const [mouseOverEmojiButton] = useState(false);

  const [ InputValue, setInputValue ] = useState<string>('');
  const [ valueLoaded, setvalueLoaded ] = useState(false);

  useEffect(() => {

    const fetchInputValue = async () =>{
      try{
        // console.log(props.InputWcardId)
        const response = await axios.get(`${EQ_API_URL}/pages/Elm/IC`);
        const TooltipValue = response.data.find((Tooltip: {id: number}) => Tooltip.id === props.InputWcardId)?.value;
        setInputValue(TooltipValue || '');
        setvalueLoaded(true);
        // console.log(`Tooltip input value: ${TooltipValue}`)
      } catch (error) {
        console.error('Error fetching tooltip input:', error)
      }
    }

    fetchInputValue();
  }, [props.InputWcardId])

  const handleMouseEnter = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    setActiveLi(currentTarget);
    if (!emojiMenuOpen && !mouseOverEmojiButton) {
      setShowTooltip(true);
    }
  };

  const updateValueToBackend = async (updatedValue: string) => {
    try {

       await axios.put(`${EQ_API_URL}/pages/ElmD`, { id_property: 5, value: updatedValue, id: props.InputWcardId }); // Enviar o valor completo como string

      console.log(`Valor atualizado no banco de dados. Valor: ${updatedValue}`);

        
    } catch (error) {
        console.error(`Erro ao atualizar o valor: ${error}`);
    }
};

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleEmojiMenuOpen = () => {
    setEmojiMenuOpen(true);
    setShowTooltip(false); // Feche a tooltip quando o menu de emoji for aberto
  };

  const handleEmojiMenuClose = () => {
    setEmojiMenuOpen(false);
  };

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    updateValueToBackend(newValue);
  };
  return (
    <div id='ContainerCardT'>
        <li 
        className='list-group-item list-group-item-action' 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
        <div id='InsCont'>
            <EmojiMenu
            UserId={props.UserId}
            emojiMenuId={props.EmojiMenuId}
            onOpen={() => handleEmojiMenuOpen()}
            onClose={() => handleEmojiMenuClose()}
            />
              {/* {Aqui é o que tem que receber o valor} */}
              <input type="text" placeholder='Nome' 
                value={
                        valueLoaded !== false ? InputValue : ''
                    }
                onChange={(e) => handleInputChange(e.target.value)}
              />

        </div>

        </li>
        {showTooltip && activeLi &&(
            <div className='custom-tooltip' id='custom-tooltip'>
                <div className='card' id='card'>
                  <MainPage suppressFunctions/>
                </div>
            </div>
        )}
    </div>
  );
}

export default YourComponent;
