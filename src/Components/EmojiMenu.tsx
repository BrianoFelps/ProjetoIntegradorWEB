import React, { useState } from 'react';
import './EmojiMenu.css'; // Arquivo de estilos CSS

function EmojiMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const selectEmoji = (emoji: string) => {
    // Aqui você pode fazer o que quiser com o emoji selecionado
    console.log('Emoji selecionado:', emoji);
    // Por exemplo, você pode definir o emoji em algum estado ou enviar para um componente pai.
  };

  return (
    <div className="emoji-container">
      <button onClick={toggleMenu}></button>
      {menuOpen && (
        <div className="emoji-menu" style={{display:'block'}}>
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