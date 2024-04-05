import React, { useState, useEffect, useRef } from 'react';
import './EmojiMenu.css'; // Arquivo de estilos CSS

function EmojiMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(!menuOpen);
  };

  const [buttonContent, setButtonContent] = useState('');

  const selectEmoji = (emoji: string) => {
    setButtonContent(emoji);
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