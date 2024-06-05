import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './EmojiMenu.css'; // Arquivo de estilos CSS
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface EmojiMenuProps {
  emojiMenuId: number;
  onOpen: () => void;
  onClose: () => void;
}

function EmojiMenu({ emojiMenuId, onOpen, onClose }: EmojiMenuProps){

  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState<string>('');

  const [emojis, setEmojis] = useState<{ id: number; name: string; emoji: string }[]>([]);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await axios.get(`${EQ_API_URL}/emojis`);
        setEmojis(response.data);
      // console.log(emojis)
      } catch (error) {
        console.error('Error fetching emojis:', error);
      }
    };

    fetchEmojis();
  }, []); 
   

    useEffect(() => {
       // Função para buscar os emojis correspondentes aos EmojiMenus
    const fetchSelectedEmoji = async () => {
      if (emojiMenuId !== undefined && emojiMenuId !== null) {
        try {
          const response = await axios.get(`${EQ_API_URL}/emojiMenu/IDMENU/${emojiMenuId}`);
          const emojiData = response.data.emoji;
          setSelectedEmoji(emojiData);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 404) {
              console.warn(`EmojiMenu with ID ${emojiMenuId} not found`);
            } else {
              console.error('Error fetching selected emoji:', error.message);
            }
          } else if (error instanceof Error) {
            console.error('Unexpected error fetching selected emoji:', error.message);
          } else {
            console.error('Unknown error:', error);
          }
        }
      }
    };

// Chame a função para buscar o emoji correspondente ao emojiMenuId
    fetchSelectedEmoji();
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

  const handleEmojiSelect = async (emojiId: number) => {
    const selected = emojis.find(emoji => emoji.id === emojiId);
    if (selected) {
      setSelectedEmoji(selected.emoji);
      console.log(selectedEmoji)
      try {
        await axios.put(`${EQ_API_URL}/emojiMenu`, { id_emoji: emojiId, id: emojiMenuId });
        console.log('EmojiMenu atualizado com sucesso');
      } catch (error) {
        console.error(`EmojiId: ${emojiId}. EmojiMenuId: ${emojiMenuId}. Erro ao atualizar o EmojiMenu:`, error);
      }
    }
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
        {selectedEmoji}
      </button>
      {menuOpen && (
        <div className="emoji-menu" ref={menuRef} style={{display:'block'}}>
          {emojis.map((emoji) => (
            <span key={emoji.id} title={emoji.name} onClick={() => handleEmojiSelect(emoji.id)}>
              {emoji.emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmojiMenu;