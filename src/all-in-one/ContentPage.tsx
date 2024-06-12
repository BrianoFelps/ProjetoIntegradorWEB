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

function ContentPage() {
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
        // Função para buscar os IDs dos EmojiMenus a serem especificados
        const fetchEmojiMenuIds = async () => {
          try {
            // http://localhost:8080/pages/emojiMenu/emoji
            const response = await axios.get(`${EQ_API_URL}/pages/emojiMenu/emoji`);
            const emojiMenuIdsData = response.data.map((emojiMenu: { id: number }) => emojiMenu.id);
            setEmojiMenuIds(emojiMenuIdsData);
            // console.log(emojiMenuIds[1]);
            // console.log(emojiMenuIdsData[1]);
          } catch (error) {
            console.error('Error fetching emoji menu IDs:', error);
          }
        };

        fetchEmojiMenuIds(); // Chame a função para buscar os IDs dos EmojiMenus

        const fetchCardIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/cards`);
            const CardsIdsData = response.data.map((elements: { id: number }) => elements.id);
            setCardsIds(CardsIdsData); 

            // console.log(`Id's dos cards: ${CardsIds}`)
            // console.log(`CardsIdsData: ${CardsIdsData}`)
            
          } catch (error) {
            console.error('Error fetching Cards ids: ', error)
          }
        }
      
        fetchCardIds();

        const fetchTooltipIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/IC`);
            const TooltipIdsData = response.data.map((elements: { id: number }) => elements.id);
            setTooltipIds(TooltipIdsData); 

            // console.log(`Id's dos Input Tooltip's: ${TooltipIds}`)
            // console.log(`TooltipIdsData: ${TooltipIdsData}`)
            
          } catch (error) {
            console.error('Error fetching Cards ids: ', error)
          }
        }
      
        fetchTooltipIds();

        const fetchWIIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/WI`);
            const WriteIdeaIdsData = response.data.map((elements: { id: number }) => elements.id);
            setWriteIdeaIds(WriteIdeaIdsData); 

            // console.log(`Id's dos Input Tooltip's: ${TooltipIds}`)
            // console.log(`TooltipIdsData: ${TooltipIdsData}`)
            
          } catch (error) {
            console.error('Error fetching Cards ids: ', error)
          }
        }
      
        fetchWIIds();

        const fetchFScardIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/FS`);
            const FSIdsData = response.data.map((elements: { id: number }) => elements.id);
            setFScardIds(FSIdsData);
            // console.log(FScardIds)
          } catch (error) {
            console.error('Error fetching Cards ids: ', error)
          }
        }
      
        fetchFScardIds();

        const fetchPagesIdsAndName = async () =>{
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/`);

            const PagesIdsData = response.data
            .map((page: { id: number }) => page.id)
            .filter((id: number) => id > 1); // Filtrar IDs maiores que 1

            setPagesIds(PagesIdsData);

            const getPageNameLS= localStorage.getItem('PageName');

            if(getPageNameLS !== null){
              const getPageName = getPageNameLS.toString();
              if(getPageName !== null)
                setPageName(getPageName)
              else
                console.error(`O nome da página não é uma string válida: ${getPageNameLS}`);
            }
            // console.log(`Pages ids: ${PagesIdsData}`)
          }catch (error) {
            console.error('Error fetching Pages ids: ', error)
          }
        }
      
          fetchPagesIdsAndName();
          //Implementar depois nos cards e no container pai (vai ser o superior)
      }, []);

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

        <EmojiMenu key={emojiMenuIds[0]} emojiMenuId={emojiMenuIds[0]} onOpen={() => {}} onClose={() => {}} />
                
        <Input/>

        <InputWriteIdea InputWriteIdeaId={0} classNm='top'></InputWriteIdea>
      </section>
            
        <section id='main'>
            <TopBarL/>

            <div id='ItensContainer'>
                
              <NItem NitemId={CardsIds[0]} key={emojiMenuIds[1]} emojiMenuId={emojiMenuIds[1]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} onclick={openModal1} image={image1}/>

              <NItem NitemId={CardsIds[1]} key={emojiMenuIds[2]} emojiMenuId={emojiMenuIds[2]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal2} image={image2}/>

              <NItem NitemId={CardsIds[2]} key={emojiMenuIds[3]} emojiMenuId={emojiMenuIds[3]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal3} image={image3}/>

              <NItem NitemId={CardsIds[3]} key={emojiMenuIds[4]} emojiMenuId={emojiMenuIds[4]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal4} image={image4}/>

              <NItem NitemId={CardsIds[4]} key={emojiMenuIds[5]} emojiMenuId={emojiMenuIds[5]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} image={image5} onclick={openModal5}/>

            </div>

            {isModal1Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[0]} PagesIds={PagesIds[0]} Titulo='religião' banner={image1} EmojiMenuInsideSeparatorId={emojiMenuIds[1]} ClassName='testeModal' onClose={closeModal1}/>}

            {isModal2Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[1]} PagesIds={PagesIds[1]} Titulo='masculinidade' banner={image2} EmojiMenuInsideSeparatorId={emojiMenuIds[2]} ClassName='testeModal' onClose={closeModal2}/>}

            {isModal3Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[2]} PagesIds={PagesIds[2]} Titulo='virtudes católicas' banner={image3} EmojiMenuInsideSeparatorId={emojiMenuIds[3]} ClassName='testeModal' onClose={closeModal3}/>}

            {isModal4Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[3]} PagesIds={PagesIds[3]} Titulo='filosofia' banner={image4} EmojiMenuInsideSeparatorId={emojiMenuIds[4]} ClassName='testeModal' onClose={closeModal4}/>}

            {isModal5Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[4]} PagesIds={PagesIds[4]} Titulo='positividade' banner={image5} EmojiMenuInsideSeparatorId={emojiMenuIds[5]} ClassName='testeModal' onClose={closeModal5}/>}
        </section>

        <section id='NavegacaoBasica'>
            <DiaADiaComponentImage/>
            <LinkGroup inputWriteIdeaId={WriteIdeaIds[0]} inputid={TooltipIds[0]} inputid2={TooltipIds[1]} inputid3={TooltipIds[2]} emojimenuid={emojiMenuIds[6]} emojimenuid2={emojiMenuIds[7]} emojimenuid3={emojiMenuIds[8]}/>
            <LinkGroup inputWriteIdeaId={WriteIdeaIds[1]} inputid={TooltipIds[3]} inputid2={TooltipIds[4]} inputid3={TooltipIds[5]} emojimenuid={emojiMenuIds[9]} emojimenuid2={emojiMenuIds[10]} emojimenuid3={emojiMenuIds[11]}/>
            <LinkGroup inputWriteIdeaId={WriteIdeaIds[2]} inputid={TooltipIds[6]} inputid2={TooltipIds[7]} inputid3={TooltipIds[8]} emojimenuid={emojiMenuIds[12]} emojimenuid2={emojiMenuIds[13]} emojimenuid3={emojiMenuIds[14]}/>
        </section>
    </main>
    )
}

export default ContentPage;