import React, { useEffect, useState} from 'react';
import MainPage from '../all-in-one/MainPage';
import banner from '../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg';
import EmojiMenu from './EmojiMenu';
import '../Components/CardTooltip.css'

interface props{
  EmojiMenuId: number;
  // emoji: string;
}

function YourComponent(props: props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeLi, setActiveLi] = useState<HTMLLIElement | null>(null);
  const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
  const [mouseOverEmojiButton, setMouseOverEmojiButton] = useState(false);

  const handleMouseEnter = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    setActiveLi(currentTarget);
    if (!emojiMenuOpen && !mouseOverEmojiButton) {
      setShowTooltip(true);
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

  const handleInputChange = () => {
    // Prevent resetting showTooltip when input changes
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
              <input type="text" placeholder='Nome' onChange={handleInputChange}/>
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
