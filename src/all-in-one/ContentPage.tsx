import './ContentPage.css'
import Input from '../Components/Inputtypetext'; 
import Title from '../Components/title';
import EmojiMenu from '../Components/EmojiMenu';
import InputWriteIdea from '../Components/InputWriteIdea';
import TopBarL from '../Components/TopBarL';
import NItem from '../Components/NItem';
import LinkGroup from '../Components/LinkGroup';
import image1 from "../assets/1000019662.jpg"
import image2 from "../assets/Alexandre-o-Grande.webp"
import image3 from "../assets/Apoteose-de-Santo-Tomás.jpg"
import image4 from "../assets/athens-art-school-1143741_1920.jpg"
import image5 from "../assets/ca9c8e1a6db194149e8806c734fdae47.jpg"
import DiaADiaComponentImage from '../Components/DiaADiaComponentImage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ContentPage() {
    const [emojis, setEmojis] = useState<string[]>([]);
    const [emojiMenuIds, setEmojiMenuIds] = useState<number[]>([]); // Estado para armazenar os IDs dos EmojiMenus
    const [elementIds, setElementIds] = useState<number[]>([]);

    // const totalEmojiMenus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    
    useEffect(() => {
        // Função para buscar os emojis correspondentes aos EmojiMenus
        const fetchEmojis = async () => {
          try {
            const response = await axios.get('http://localhost:8080/pages/emojiMenu/emoji');
            const emojisData = response.data.map((emoji: { emoji: string }) => emoji.emoji);
            setEmojis(emojisData);
            // console.log(emojisData)
          } catch (error) {
            console.error('Error fetching emojis:', error);
          }
        };
    
        // Função para buscar os IDs dos EmojiMenus a serem especificados
        const fetchEmojiMenuIds = async () => {
          try {
            const response = await axios.get('http://localhost:8080/pages/emojiMenu/emoji');
            const emojiMenuIdsData = response.data.map((emojiMenu: { id: number }) => emojiMenu.id);
            setEmojiMenuIds(emojiMenuIdsData);
          } catch (error) {
            console.error('Error fetching emoji menu IDs:', error);
          }
        };

        fetchEmojis(); // Chame a função para buscar os emojis
        fetchEmojiMenuIds(); // Chame a função para buscar os IDs dos EmojiMenus
      }, []);

    const oi = () => {
      alert('oi')
    }

    return (
    <main id='ConteudoPrincipal'>
        <section id='top'>
            <Title>
            <h2>
                Ponto de equilíbrio
            </h2>
                </Title>
                    <EmojiMenu key={emojiMenuIds[0]} emojiMenuId={emojiMenuIds[0]} onOpen={() => {}} onClose={() => {}} />
                <Input/>
                <InputWriteIdea classNm='top'></InputWriteIdea>
        </section>
            
        <section id='main'>
            <TopBarL>
                <a href=''>
                    <i className="fa fa-picture-o" aria-hidden="true" style={{fontSize:17}}/>
                    <span>
                        Gallery view
                    </span>
                </a>
            </TopBarL>

            <div id='ItensContainer'>
                
                <NItem key={emojiMenuIds[1]} emojiMenuId={emojiMenuIds[1]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} onclick={oi} image={image1}/>
                <NItem key={emojiMenuIds[2]} emojiMenuId={emojiMenuIds[2]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={oi} image={image2}/>
                <NItem key={emojiMenuIds[3]}emojiMenuId={emojiMenuIds[3]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={oi} image={image3}/>
                <NItem key={emojiMenuIds[4]} emojiMenuId={emojiMenuIds[4]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={oi} image={image4}/>
                <NItem key={emojiMenuIds[5]} emojiMenuId={emojiMenuIds[5]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={oi} image={image5}/>
            </div>
        </section>

        <section id='NavegacaoBasica'>
            <DiaADiaComponentImage/>
            <LinkGroup emojimenuid={emojiMenuIds[6]} emojimenuid2={emojiMenuIds[7]} emojimenuid3={emojiMenuIds[8]}></LinkGroup>
            <LinkGroup emojimenuid={emojiMenuIds[9]} emojimenuid2={emojiMenuIds[10]} emojimenuid3={emojiMenuIds[11]}></LinkGroup>
            <LinkGroup emojimenuid={emojiMenuIds[12]} emojimenuid2={emojiMenuIds[13]} emojimenuid3={emojiMenuIds[14]}></LinkGroup>
        </section>
    </main>
    )
}

export default ContentPage;