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

  const [selectedEmojiId, setSelectedEmojiId] = useState<number | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');

  const [emojis, setEmojis] = useState<string[]>([]);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Função para buscar os emojis correspondentes aos EmojiMenus
    const fetchEmoji = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pages/emojiMenu/emoji`);
        const emojisData = response.data.map((emoji: { emoji: string }) => emoji.emoji);
        setEmojis(emojisData)

        const emojiResponse = await axios.get(`http://localhost:8080/pages/emojiMenu/IDMENU/${emojiMenuId}`)
        const emojiData = emojiResponse.data.emoji;
        setSelectedEmoji(emojiData);
      } catch (error) {
        console.error('Error fetching emojis:', error);
      }
    };

    fetchEmoji();
  }, [emojiMenuId]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, onClose]);

  const handleEmojiSelect = (emojiId: number) => {
    setSelectedEmojiId(emojiId);
    setSelectedEmoji(emojis[emojiId]);

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
    } else {
      onClose();
    }
  };

  return (
    <div className="emoji-container">
      <button onClick={toggleMenu} ref={buttonRef} id='BotãoEmoji'>
        {selectedEmojiId !== null ? emojis[selectedEmojiId] : selectedEmoji}
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