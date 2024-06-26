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

function ContentPage(props: props) {
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
        if(props.suppressFunctions) return;

        // Função para buscar os IDs dos EmojiMenus a serem especificados
        const fetchEmojiMenuIds = async () => {
          try {
            /*Buscar todos os emojimenus*/
            // http://localhost:8080/pages/emojiMenu/emoji
            const response = await axios.get(`${EQ_API_URL}/pages/emojiMenu/emoji`);
            console.log(response.data)

            const userEmojiMenus = response.data.filter((emojimenu: any) => emojimenu.user_id === props.UserId)

            console.log(`Número de EmojiMenus encontrados: ${userEmojiMenus.length}`)

            const requiredEmojiMenus = 15; //Número máximo de emojimenus na pag

            if(userEmojiMenus.length < requiredEmojiMenus){
              const addEmojiMenuPromises = [];
              for (let i = userEmojiMenus.length; i < requiredEmojiMenus; i++){
                addEmojiMenuPromises.push(
                  axios.post(`${EQ_API_URL}/pages/emojiMenu`, { id_emoji: 0, page_id: 1, user_id: props.UserId })
                )
              }
              await Promise.all(addEmojiMenuPromises);
              console.log(`Adicionados ${requiredEmojiMenus - userEmojiMenus.length} EmojiMenus.`)

              // Refazer a requisição para obter os novos EmojiMenus adicionados
              const newResponse = await axios.get(`${EQ_API_URL}/pages/emojiMenu/emoji`);
              const newUserEmojiMenus = newResponse.data.filter((emojimenu: any) => emojimenu.user_id === props.UserId);
              setEmojiMenuIds(newUserEmojiMenus.map((emojiMenu: { id: number }) => emojiMenu.id));
            } else {
              setEmojiMenuIds(userEmojiMenus.map((emojiMenu: {id: number}) => emojiMenu.id))
              // console.log(`EmojiMenu já existem em quantidade suficiente para o user_id ${props.UserId}`)
            }
            
            //   const addResponse = await axios.post(`${EQ_API_URL}/pages/emojiMenu`, { id_emoji: 0, page_id: 1, user_id: props.UserId });
            //   console.log(`EmojiMenu adicionado:`, addResponse.data);
            

          } catch (error) {
            console.error('Error fetching emoji menu IDs:', error);
          }
        };

        fetchEmojiMenuIds(); // Chame a função para buscar os IDs dos EmojiMenus

        const fetchCardIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/cards`);
            const userNItems = response.data.filter((NItem: any) => NItem.user_id === props.UserId)

            console.log(`Número de NItems encontrados: ${userNItems.length}`);

            const requiredNItems = 5;

            if(userNItems.length < requiredNItems){
              const addNItemPromises = [];
              for (let i = userNItems.length; i< requiredNItems; i++){
                addNItemPromises.push(
                  axios.post(`${EQ_API_URL}/pages/Elm`, {
                    id_property: 4, 
                    value: '', 
                    user_id: props.UserId,
                    page_id: 1
                  })
                )
              }
              await Promise.all(addNItemPromises);
              console.log(`Adicionados ${requiredNItems - userNItems.length} NItem's`)

              const newResponse = await axios.get(`${EQ_API_URL}/pages/Elm/cards`)
              const newUserNItems = newResponse.data.filter((NItem: any) => NItem.user_id === props.UserId);

              setCardsIds(newUserNItems.map((Nitem: {id: number}) => Nitem.id))
            } else {
              setCardsIds(userNItems.map((Nitem: {id: number}) => Nitem.id))
              // console.log(`NItem's já existem suficientemente para o user_id ${props.UserId}`)
              console.log(CardsIds)
            }    
          } catch (error) {
            console.error('Error fetching Cards ids: ', error)
          }
        }

        fetchCardIds();
        if (props.UserId !== undefined) {
        } else {
          console.error('UserId está indefinido em ContentPage');
        }
        
        const fetchFScardIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/FS`);
            const FSIdsData = response.data.filter((elm: any) => elm.user_id === props.UserId);

            const requiredCards = 5;

            if(FSIdsData.length < requiredCards){
              const addNItemModalPromises = [];
              for (let i = FSIdsData.length; i< requiredCards; i++){
                addNItemModalPromises.push(
                  axios.post(`${EQ_API_URL}/pages/Elm`, {
                    id_property: 7, 
                    value: '', 
                    user_id: props.UserId,
                    page_id: 1
                  })
                )
              }
              await Promise.all(addNItemModalPromises);
              console.log(`Adicionados ${requiredCards - FSIdsData.length} fsCardS`)

              const newResponse = await axios.get(`${EQ_API_URL}/pages/Elm/FS`)
              const newUserFSIds = newResponse.data.filter((elements: any) => elements.user_id === props.UserId);

              setFScardIds(newUserFSIds.map((elements: {id: number}) => elements.id))
            } else {
              setFScardIds(FSIdsData.map((elements: {id: number}) => elements.id))
              // console.log(`Element's FSCard já existem suficientemente para o user_id ${props.UserId}`)
              console.log(`FScardIds: ${FScardIds}`)
            }    
          } catch (error) {
            console.error('Error fetching CardsModals ids: ', error)
          }
        }

        if (props.UserId !== undefined) {
          fetchFScardIds();
        } else {
          console.error('UserId está indefinido em ContentPage');
        }

        const fetchWIIds = async () => {
          try{
            const response = await axios.get(`${EQ_API_URL}/pages/Elm/WI`);
            const WriteIdeaIdsData = response.data.filter((elements: any) => elements.user_id === props.UserId);
            

            const requiredWIs = 3;

            if(WriteIdeaIdsData.length < requiredWIs){
              const addWIpromises = [];
              for(let i = WriteIdeaIds.length; i < requiredWIs; i++){
                addWIpromises.push(
                  axios.post(`${EQ_API_URL}/pages/Elm`, {
                    id_property: 6,
                    value: '',
                    user_id: props.UserId,
                    page_id: 1
                  })
                )
              }
              await Promise.all(addWIpromises);
              console.log(`Adicionados ${requiredWIs - WriteIdeaIdsData.length} Write Idea Input's`)

              const newResponse = await axios.get(`${EQ_API_URL}/pages/Elm/WI`)
              const newUserWIids = newResponse.data.filter((elements: any) => elements.user_id === props.UserId);
              setWriteIdeaIds(newUserWIids.map((elements: {id: number}) => elements.id))
            } else {
              setWriteIdeaIds(WriteIdeaIdsData.map((elements: {id: number})=> elements.id));
              console.log(`Element's Writeidea já existem suficientemente para o userid ${props.UserId}`)
              console.log(`WIids: ${WriteIdeaIds}`) 
            }
          } catch (error) {
            console.error('Error fetching WIs ids: ', error)
          }
        }
      
        fetchWIIds();

          const fetchTooltipIds = async () => {
            try{
              // PAREI AQUI
              const response = await axios.get(`${EQ_API_URL}/pages/Elm/IC`);
              const TooltipIdsData = response.data.filter((elements: any) => elements.user_id === props.UserId);

              const requiredTI = 9;

              if(TooltipIdsData.length < requiredTI){
                const addTIpromises = [];
                for(let i = TooltipIdsData.length; i < requiredTI; i++){
                  addTIpromises.push(
                    axios.post(`${EQ_API_URL}/pages/Elm`, {
                      id_property: 5,
                      value: '',
                      user_id: props.UserId,
                      page_id: 1
                    })
                  )
                }
                await Promise.all(addTIpromises);
                console.log(`Adicionados ${requiredTI - TooltipIdsData.length} Tooltip inputs`)

                const newRes = await axios.get(`${EQ_API_URL}/pages/Elm/IC`)
                const newTooltipIds = newRes.data.filter((elements: any) => elements.user_id === props.UserId);
                setTooltipIds(newTooltipIds.map((elements: {id: number})=> elements.id))
              } else {
                setTooltipIds(TooltipIdsData.map((elm: {id: number})=> elm.id));
                console.log(`Element's Tooltips já existem suficientemente para o userid ${props.UserId}`)
                console.log(`TooltipI ids: ${WriteIdeaIds}`) 
              }
            } catch (error) {
              console.error('Error fetching Cards ids: ', error)
            }
          }
        
          fetchTooltipIds();
      }, [props.UserId, props.suppressFunctions]);

      useEffect(() => {

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

        <EmojiMenu key={emojiMenuIds[0]} UserId={props.UserId} emojiMenuId={emojiMenuIds[0]} onOpen={() => {}} onClose={() => {}} />
                
        <Input UserId={props.UserId}/>

        <InputWriteIdea WIuserId={props.UserId} classNm='top'></InputWriteIdea>
      </section>
            
        <section id='main'>
            <TopBarL/>

            <div id='ItensContainer'>
                
              <NItem NitemId={CardsIds[0]} userid={props.UserId} key={emojiMenuIds[1]} emojiMenuId={emojiMenuIds[1]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} onclick={openModal1} image={image1}/>

              <NItem NitemId={CardsIds[1]} userid={props.UserId} key={emojiMenuIds[2]} emojiMenuId={emojiMenuIds[2]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal2} image={image2}/>

              <NItem NitemId={CardsIds[2]} userid={props.UserId} key={emojiMenuIds[3]} emojiMenuId={emojiMenuIds[3]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal3} image={image3}/>

              <NItem NitemId={CardsIds[3]} userid={props.UserId} key={emojiMenuIds[4]} emojiMenuId={emojiMenuIds[4]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}}  onclick={openModal4} image={image4}/>

              <NItem NitemId={CardsIds[4]} userid={props.UserId} key={emojiMenuIds[5]} emojiMenuId={emojiMenuIds[5]} handleEmojiOpen={() => {}} handleEmojiClose={() => {}} image={image5} onclick={openModal5}/>

            </div>

            {isModal1Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[0]} UserId={props.UserId} PagesIds={PagesIds[0]} banner={image1} EmojiMenuInsideSeparatorId={emojiMenuIds[1]} Nitemid={CardsIds[0]}ClassName='testeModal' onClose={closeModal1}/>}

            {isModal2Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[1]} UserId={props.UserId} PagesIds={PagesIds[1]} banner={image2} EmojiMenuInsideSeparatorId={emojiMenuIds[2]} Nitemid={CardsIds[1]} ClassName='testeModal' onClose={closeModal2}/>}

            {isModal3Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[2]} UserId={props.UserId} PagesIds={PagesIds[2]} banner={image3} EmojiMenuInsideSeparatorId={emojiMenuIds[3]} Nitemid={CardsIds[2]} ClassName='testeModal' onClose={closeModal3}/>}

            {isModal4Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[3]} UserId={props.UserId} PagesIds={PagesIds[3]} banner={image4} EmojiMenuInsideSeparatorId={emojiMenuIds[4]} Nitemid={CardsIds[3]} ClassName='testeModal' onClose={closeModal4}/>}

            {isModal5Visible && <Modal before={lastModal} next={nextModal} FSmodalId={FScardIds[4]} UserId={props.UserId} PagesIds={PagesIds[4]} banner={image5} EmojiMenuInsideSeparatorId={emojiMenuIds[5]} Nitemid={CardsIds[4]} ClassName='testeModal' onClose={closeModal5}/>}
        </section>

        <section id='NavegacaoBasica'>
            <DiaADiaComponentImage/>
            <LinkGroup UserId={props.UserId} inputWriteIdeaId={WriteIdeaIds[0]} inputid={TooltipIds[0]} inputid2={TooltipIds[1]} inputid3={TooltipIds[2]} emojimenuid={emojiMenuIds[6]} emojimenuid2={emojiMenuIds[7]} emojimenuid3={emojiMenuIds[8]}/>
            <LinkGroup UserId={props.UserId} inputWriteIdeaId={WriteIdeaIds[1]} inputid={TooltipIds[3]} inputid2={TooltipIds[4]} inputid3={TooltipIds[5]} emojimenuid={emojiMenuIds[9]} emojimenuid2={emojiMenuIds[10]} emojimenuid3={emojiMenuIds[11]}/>
            <LinkGroup UserId={props.UserId} inputWriteIdeaId={WriteIdeaIds[2]} inputid={TooltipIds[6]} inputid2={TooltipIds[7]} inputid3={TooltipIds[8]} emojimenuid={emojiMenuIds[12]} emojimenuid2={emojiMenuIds[13]} emojimenuid3={emojiMenuIds[14]}/>
        </section>
    </main>
    )
}

export default ContentPage;