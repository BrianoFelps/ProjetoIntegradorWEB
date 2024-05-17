import React, { useEffect, useState} from 'react';
import MainPage from '../all-in-one/MainPage';
import banner from '../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg';
import EmojiMenu from './EmojiMenu';
import '../Components/CardTooltip.css'
import axios from 'axios';

interface props{
  EmojiMenuId: number;
  InputWcardId: number
  // emoji: string;
}

function YourComponent(props: props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeLi, setActiveLi] = useState<HTMLLIElement | null>(null);
  const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
  const [mouseOverEmojiButton, setMouseOverEmojiButton] = useState(false);

  const [ InputValue, setInputValue ] = useState<string>('');
  const [ valueLoaded, setvalueLoaded ] = useState(false);

  useEffect(() => {

    const fetchInputValue = async () =>{
      try{
        const response = await axios.get(`http://localhost:8080/pages/Elm/IC`);
        const Tooltip = response.data.find((Tooltip: {id: number}) => Tooltip.id === props.InputWcardId);
        const TooltipValue = Tooltip ? Tooltip.value : '';
        setInputValue(TooltipValue);
        setvalueLoaded(true);
        console.log(`Tooltip input value: ${TooltipValue}`)
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

       await axios.put('http://localhost:8080/pages/Elm', { id_property: 5, value: updatedValue, id: props.InputWcardId }); // Enviar o valor completo como string

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
            // emoji={props.emoji}
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
                    <img src={banner} alt="" className='card-img-top'/>
                    <div className='card-body' id='CorpoCard'>
                        <MainPage/>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default YourComponent;
