import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './EmojiMenu.css'; // Arquivo de estilos CSS

interface EmojiMenuProps {
  emojiMenuId: number;
  onOpen: () => void;
  onClose: () => void;
}

function EmojiMenu({ emojiMenuId, onOpen, onClose }: EmojiMenuProps){

  const [menuOpen, setMenuOpen] = useState(false);
  const [TooltipOpen, setTooltipOpen] = useState(false);

  const [selectedEmojiId, setSelectedEmojiId] = useState<number | null>(null);
  const [selectedEmojis, setSelectedEmojis] = useState<string>('');

  const [emojiLoaded, setEmojiLoaded] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const emojis = ['', '😊', '😂', '😍', '🥴', '😁'];

  useEffect(() => {
    // Função para buscar os emojis correspondentes aos EmojiMenus
    const fetchEmoji = async (menuId: number) => {
      try {
        const response = await axios.get(`http://localhost:8080/pages/emojiMenu/emoji`);
        const emojisData = response.data.map((emoji: { emoji: string }) => emoji.emoji);
        setSelectedEmojis(emojisData[menuId]);
        setEmojiLoaded(true);
      } catch (error) {
        console.error('Error fetching emojis:', error);
      }
    };

    fetchEmoji(emojiMenuId); // Chame a função para buscar o emoji correspondente ao emojiMenuId
  }, [emojiMenuId]);

  const handleEmojiSelect = (emojiId: number) => {
    setSelectedEmojiId(emojiId);
    setSelectedEmojis(emojis[emojiId]);

    axios.put(`http://localhost:8080/pages/emojiMenu`, { id_emoji: emojiId, id: emojiMenuId })
      .then(response => {
        console.log('EmojiMenu atualizado com sucesso:', response.data);
      })
      .catch(error => {
        console.error(`EmojiId: ${emojiId}. EmojiMenuId: ${emojiMenuId}. Erro ao atualizar o EmojiMenu:`, error);
      });
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
    if (!menuOpen) {
      onOpen();
      setTooltipOpen(false);
    } else {
      onClose();
    }
  };

  return (
    <div className="emoji-container">
      <button onClick={toggleMenu} ref={buttonRef} id='BotãoEmoji'>
        {selectedEmojiId !== null ? emojis[selectedEmojiId] : selectedEmojis}
      </button>
      {menuOpen && (
        <div className="emoji-menu" ref={menuRef} style={{display:'block'}}>
          {emojis.map((emoji, index) => (
            <span key={index} onClick={() => handleEmojiSelect(index)}>{emoji}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiMenu;