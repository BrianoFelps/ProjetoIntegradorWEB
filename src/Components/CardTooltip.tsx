import React, { useState } from 'react';
import MainPage from '../all-in-one/MainPage';
import banner from '../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg';
import EmojiMenu from './EmojiMenu';
import '../Components/CardTooltip.css'

function YourComponent() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeLi, setActiveLi] = useState(null);

  const handleMouseEnter = () => {
    setActiveLi(event.currentTarget);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setActiveLi(null);
    setShowTooltip(false);
  };

  const handleClick = () => {
    setShowTooltip(prevState => !prevState); // Manter a tooltip ativa quando clicado
  };

  return (
    <div id='ContainerCardT'>
        <li 
        className='list-group-item list-group-item-action' 
        // onMouseEnter={handleMouseEnter} 
        // onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        >
        <div>
            <EmojiMenu />
            <a href="#" className='navbar-link'>
            <input type="text" />
            </a>
        </div>

        </li>
        {showTooltip && (
            <div className='custom-tooltip' id='custom-tooltip' style={{
                top: activeLi.getBoundingClientRect().bottom + 'px', 
                left: activeLi.getBoundingClientRect().left + 'px',
            }}>
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
