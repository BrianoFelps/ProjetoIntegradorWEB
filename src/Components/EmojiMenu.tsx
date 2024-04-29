import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './EmojiMenu.css'; // Arquivo de estilos CSS

interface EmojiMenuProps {
  onOpen: () => void;
  onClose: () => void;
}

function EmojiMenu({ onOpen, onClose }: EmojiMenuProps){
  const [menuOpen, setMenuOpen] = useState(false);
  const [TooltipOpen, setTooltipOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && buttonRef.current && !menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    if (!menuOpen) {
      onOpen();
      setTooltipOpen(false);
    } else {
      onClose();
    }
  };
  const [buttonContent, setButtonContent] = useState('');

  const emojiIdMap: { [key: string]: number } = {
    '😊': 1,
    '😂': 2,
    '😍': 3,
    '🥴': 4,
    '😁': 5,
    // Adicione mais emojis conforme necessário
  };

  // const SendOrUpdateEmojiToBackend = (emoji:string) =>{
  //   const emojiId = emojiIdMap[emoji];
  //   axios.post('http://localhost:8080/pages', {emojiId})
  //   .then(response => {
  //     console.log('Emoji enviado para o backend com sucesso.', response.data)
  //   })
  //   .catch(error => {
  //     console.error('Erro ao enviar emoji para o backend:', error);
  //   });
  // }

  const selectEmoji = (emoji: string) => {
    setButtonContent(emoji);
    // SendOrUpdateEmojiToBackend(emoji);
  };

  return (
    <div className="emoji-container">
      <button onClick={toggleMenu} ref={buttonRef} id='BotãoEmoji'>{buttonContent}</button>
      {menuOpen && (
        <div className="emoji-menu" ref={menuRef} style={{display:'block'}}>
          {/* Aqui você pode adicionar os emojis que desejar */}
          <span onClick={() => selectEmoji('😊')}>😊</span>
          <span onClick={() => selectEmoji('😂')}>😂</span>
          <span onClick={() => selectEmoji('😍')}>😍</span>
          <span onClick={() => selectEmoji('🥴')}>🥴</span>
          <span onClick={() => selectEmoji('😁')}>😁</span>
          {/* Adicione mais emojis conforme necessário */}
        </div>
      )}
    </div>
  );
}

export default EmojiMenu;