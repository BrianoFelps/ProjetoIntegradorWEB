import './ContentPage.css'
import Title from '../Components/title';
import EmojiMenu from '../Components/EmojiMenu';
import InputWriteIdea from '../Components/InputWriteIdea';
import Input from "../Components/inputtypetext"
import TopBarL from '../Components/TopBarL';
import NItem from '../Components/NItem';
import LinkGroup from '../Components/LinkGroup';
import Modal from '../Components/Modal';
import image1 from "../assets/1000019662.jpg"
import image2 from "../assets/Alexandre-o-Grande.webp"
import image3 from "../assets/Apoteose-de-Santo-Tomás.jpg"
import image4 from "../assets/athens-art-school-1143741_1920.jpg"
import image5 from "../assets/ca9c8e1a6db194149e8806c734fdae47.jpg"
import DiaADiaComponentImage from '../Components/DiaADiaComponentImage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../utils/EquilibriumApiConfig"
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface props {
  UserId: number | undefined;
  suppressFunctions?: boolean;
}

function ContentPage( { UserId, suppressFunctions } : props) {
     // Estado para armazenar os IDs dos EmojiMenus
    const [emojiMenuIds, setEmojiMenuIds] = useState<number[]>([]);
    const [CardsIds, setCardsIds] = useState<number[]>([]);
    const [TooltipIds, setTooltipIds] = useState<number[]>([]);
    const [WriteIdeaIds, setWriteIdeaIds] = useState<number[]>([]);
    const [FScardIds, setFScardIds] = useState<number[]>([]);
    const [PagesIds, setPagesIds] = useState<number[]>([]);
    const [PageName, setPageName] = useState<String>('');

    // Estado para controlar a visibilidade da moda
    const [isModal1Visible, setIsModal1Visible] = useState(false); 
    const [isModal2Visible, setIsModal2Visible] = useState(false); 
    const [isModal3Visible, setIsModal3Visible] = useState(false);
    const [isModal4Visible, setIsModal4Visible] = useState(false);
    const [isModal5Visible, setIsModal5Visible] = useState(false);
    
    useEffect(() => {
      if (suppressFunctions) return;
  
      const fetchData = async () => {
        try {
          if (!UserId) {
            console.error('User ID is null or undefined.');
            return;
          }
  
          const [
            emojiMenusResponse,
            cardsResponse,
            fsCardsResponse,
            writeIdeaResponse,
            tooltipResponse,
            pagesResponse
          ] = await Promise.all([
            axios.get(`${EQ_API_URL}/pages/emojiMenu/emoji`),
            axios.get(`${EQ_API_URL}/pages/Elm/cards`),
            axios.get(`${EQ_API_URL}/pages/Elm/FS`),
            axios.get(`${EQ_API_URL}/pages/Elm/WI`),
            axios.get(`${EQ_API_URL}/pages/Elm/IC`),
            axios.get(`${EQ_API_URL}/pages/`)
          ]);
  
          const userEmojiMenus = emojiMenusResponse.data.filter((emojimenu: any) => emojimenu.user_id === UserId);
          const userCards = cardsResponse.data.filter((NItem: any) => NItem.user_id === UserId);
          const userFScards = fsCardsResponse.data.filter((elm: any) => elm.user_id === UserId);
          const userWriteIdeas = writeIdeaResponse.data.filter((elements: any) => elements.user_id === UserId);
          const userTooltips = tooltipResponse.data.filter((elements: any) => elements.user_id === UserId);
  
          setEmojiMenuIds(await manageItems(userEmojiMenus, 15, 'emojiMenu', setEmojiMenuIds));
          setCardsIds(await manageItems(userCards, 5, 'cards', setCardsIds));
          setFScardIds(await manageItems(userFScards, 5, 'FS', setFScardIds));
          setWriteIdeaIds(await manageItems(userWriteIdeas, 3, 'WI', setWriteIdeaIds));
          setTooltipIds(await manageItems(userTooltips, 9, 'IC', setTooltipIds));
  
          const PagesIdsData = pagesResponse.data.map((page: { id: number }) => page.id).filter((id: number) => id > 1);
          setPagesIds(PagesIdsData);
  
          const getPageNameLS = localStorage.getItem('PageName');
          if (getPageNameLS) setPageName(getPageNameLS);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      const manageItems = async (items: any[], requiredCount: number, endpoint: string, _setState: React.Dispatch<React.SetStateAction<number[]>>) => {
        if (items.length < requiredCount) {
          const addItemsPromises = [];
          for (let i = items.length; i < requiredCount; i++) {
            addItemsPromises.push(
              axios.post(`${EQ_API_URL}/pages/${endpoint}`, { id_property: 0, value: '', user_id: UserId, page_id: 1 })
            );
          }
          await Promise.all(addItemsPromises);
  
          const newResponse = await axios.get(`${EQ_API_URL}/pages/${endpoint}`);
          const newItems = newResponse.data.filter((item: any) => item.user_id === UserId);
          return newItems.map((item: { id: number }) => item.id);
        } else {
          return items.map((item: { id: number }) => item.id);
        }
      };
  
      fetchData();
    }, [UserId, suppressFunctions]);

    const openModal1 = () =>{
      setIsModal1Visible(true)
    }

    const closeModal1 = () =>{
      setIsModal1Visible(false)
    }

    const openModal2 = () =>{
      setIsModal2Visible(true)
    }

    const closeModal2 = () =>{
      setIsModal2Visible(false)
    }

    const openModal3 = () =>{
      setIsModal3Visible(true)
    }

    const closeModal3 = () =>{
      setIsModal3Visible(false)
    }

    const openModal4 = () =>{
      setIsModal4Visible(true)
    }

    const closeModal4 = () =>{
      setIsModal4Visible(false)
    }
    const openModal5 = () =>{
      setIsModal5Visible(true)
    }

    const closeModal5 = () =>{
      setIsModal5Visible(false)
    }

    const nextModal = () =>{
      if(isModal1Visible){
        closeModal1()
        openModal2()
      } else if(isModal2Visible){
        closeModal2()
        openModal3()
      } else if(isModal3Visible){
        closeModal3()
        openModal4()
      } else if(isModal4Visible){
        closeModal4()
        openModal5()
      } else if (isModal5Visible){
        closeModal5()
        openModal1()
      } else {
        console.log("Erro inesperado na troca de modal's (posterior)")
      }
    }
    
    const lastModal = () =>{
      if(isModal1Visible){
        closeModal1()
        openModal5()
      } else if(isModal2Visible){
        closeModal2()
        openModal1()
      } else if(isModal3Visible){
        closeModal3()
        openModal2()
      } else if(isModal4Visible){
        closeModal4()
        openModal3()
      } else if (isModal5Visible){
        closeModal5()
        openModal4()
      } else {
        console.log("Erro inesperado na troca de modal's (anterior)")
      }
    }

    return (
    <main id='ConteudoPrincipal'>
      <section id='top'>
        <Title>
          <h2>
              {PageName}
          </h2>
        </Title>

        <EmojiMenu key={emojiMenuIds[0]} UserId={UserId} emojiMenuId={emojiMenuIds[0]} onOpen={() => {}} onClose={() => {}} />
                
        <Input UserId={UserId}/>

        <InputWriteIdea WIuserId={UserId} classNm='top'></InputWriteIdea>
      </section>
            
        <section id='main'>
            <TopBarL/>

            <div id='ItensContainer'>
                
              <NItem NitemId={CardsIds[0]} userid={UserId} key={emojiMenuIds[1]} emojiMenuId={emojiMenuIds[1]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} onclick={openModal1} image={image1}/>

              <NItem NitemId={CardsIds[1]} userid={UserId} key={emojiMenuIds[2]} emojiMenuId={emojiMenuIds[2]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal2} image={image2}/>

              <NItem NitemId={CardsIds[2]} userid={UserId} key={emojiMenuIds[3]} emojiMenuId={emojiMenuIds[3]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal3} image={image3}/>

              <NItem NitemId={CardsIds[3]} userid={UserId} key={emojiMenuIds[4]} emojiMenuId={emojiMenuIds[4]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal4} image={image4}/>

              <NItem NitemId={CardsIds[4]} userid={UserId} key={emojiMenuIds[5]} emojiMenuId={emojiMenuIds[5]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} image={image5} onclick={openModal5}/>

            </div>

            {isModal1Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[0]} UserId={UserId} PagesIds={PagesIds[0]} banner={image1} EmojiMenuInsideSeparatorId={emojiMenuIds[1]} Nitemid={CardsIds[0]}ClassName='testeModal' onClose={closeModal1}/>}

            {isModal2Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[1]} UserId={UserId} PagesIds={PagesIds[1]} banner={image2} EmojiMenuInsideSeparatorId={emojiMenuIds[2]} Nitemid={CardsIds[1]} ClassName='testeModal' onClose={closeModal2}/>}

            {isModal3Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[2]} UserId={UserId} PagesIds={PagesIds[2]} banner={image3} EmojiMenuInsideSeparatorId={emojiMenuIds[3]} Nitemid={CardsIds[2]} ClassName='testeModal' onClose={closeModal3}/>}

            {isModal4Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[3]} UserId={UserId} PagesIds={PagesIds[3]} banner={image4} EmojiMenuInsideSeparatorId={emojiMenuIds[4]} Nitemid={CardsIds[3]} ClassName='testeModal' onClose={closeModal4}/>}

            {isModal5Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[4]} UserId={UserId} PagesIds={PagesIds[4]} banner={image5} EmojiMenuInsideSeparatorId={emojiMenuIds[5]} Nitemid={CardsIds[4]} ClassName='testeModal' onClose={closeModal5}/>}
        </section>

        <section id='NavegacaoBasica'>
            <DiaADiaComponentImage/>
            <LinkGroup UserId={UserId} inputWriteIdeaId={WriteIdeaIds[0]} inputid={TooltipIds[0]} inputid2={TooltipIds[1]} inputid3={TooltipIds[2]} emojimenuid={emojiMenuIds[6]} emojimenuid2={emojiMenuIds[7]} emojimenuid3={emojiMenuIds[8]}/>
            <LinkGroup UserId={UserId} inputWriteIdeaId={WriteIdeaIds[1]} inputid={TooltipIds[3]} inputid2={TooltipIds[4]} inputid3={TooltipIds[5]} emojimenuid={emojiMenuIds[9]} emojimenuid2={emojiMenuIds[10]} emojimenuid3={emojiMenuIds[11]}/>
            <LinkGroup UserId={UserId} inputWriteIdeaId={WriteIdeaIds[2]} inputid={TooltipIds[6]} inputid2={TooltipIds[7]} inputid3={TooltipIds[8]} emojimenuid={emojiMenuIds[12]} emojimenuid2={emojiMenuIds[13]} emojimenuid3={emojiMenuIds[14]}/>
        </section>
    </main>
    )
}

export default ContentPage;