import { useEffect, useRef, useState } from 'react';
import BarraSuperiorCard from './BarraSuperiorCard';
import EmojiMenu from './EmojiMenu';
import './Modal.css'
import Title from './title';
import LastCreated from './LastCreated';
import Tags from './Tags';
import Data from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface Props {
    Nitemid: number;
    onClose: () => void;
    FSmodalId: number;

    ClassName: string;
    banner: string;

    EmojiMenuInsideSeparatorId: number;
    UserId: number | undefined;

    before: () => void;
    next: () => void;

    PagesIds: number;
}


function Modal (props: Props){
    const [valueContent, setValueContent] = useState<string>('');
    const [dateContent, setDateContent] = useState<string>('');
    const [nItemTitle, setNItemTitle] = useState<String>('')

    const ModalRef = useRef<HTMLDivElement>(null);

    const consolelog = () => {
        console.log("olá mundo")
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        if (textAreaRef.current) {
            // Ajusta a altura da textarea para caber o conteúdo
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        const fetchValueDateContent = async () => {
            try{
                console.log(`fsmodalid: ${props.FSmodalId}`)
                const response = await axios.get(`${EQ_API_URL}/pages/Elm/FS`);
                const FScard = response.data.find((FScard: { id: number }) => FScard.id === props.FSmodalId);
                const FScardValue = FScard ? FScard?.value : '';
                const FScardDate = FScard ? FScard?.data : '';
                setValueContent(FScardValue);
                setDateContent(FScardDate);

                // console.log(`FSCard value: ${FScardValue}`)
                // console.log(`Card data: ${FScardDate}`)
            } catch (error) {
                console.error('Error fetching card:', error)
            }
        }

        fetchValueDateContent()
    }, [props.FSmodalId]);

    useEffect(() => {
        
        const fetchModalTitle = async () => {
            try{
              const response = await axios.get(`${EQ_API_URL}/pages/Elm/cards`);
                  
              const cardvalue = response.data.find((card: { id: number }) => card.id === props.Nitemid)?.value;
              setNItemTitle(cardvalue || '')
  
            } catch {
              console.error(`Erro ao fazer fetch do titleNItem`)
            }
          }
  
          fetchModalTitle()

         // Ajusta a altura inicial ao montar o componente
         handleInput();

        const handleClickOutside = (event: MouseEvent) => {
            if (ModalRef.current && !ModalRef.current.contains(event.target as Node)) {
                props.onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const updateContentToBackend = async (updatedValue: string, updatedDate: string) =>{
        try {

            await axios.put(`${EQ_API_URL}/pages/ElmD`, { id_property: 7, value: updatedValue, data: updatedDate, id: props.FSmodalId }); // Enviar o valor completo como string
 
            console.log(`Valor atualizado no banco de dados. Valor: ${updatedValue}, data: ${updatedDate}, id: ${props.FSmodalId}`);
 
             
         } catch (error) {
             console.error(`Erro ao atualizar o valor: ${error}`);
         }
    }

    const handleValChange = (newValue: string) => {
        setValueContent(newValue);
        updateContentToBackend(newValue, dateContent);
      };

      const handleDateChange = (newDate: string) => {
        setDateContent(newDate);
        updateContentToBackend(valueContent, newDate);
    };

    return(
        <>
        <div id='DadModalContainer' className={props.ClassName}>
            <div id="ModalContainerMax" className='card' ref={ModalRef}>
                
                <div id="ContainerSuperiorCard" className='card-header'>
                    <BarraSuperiorCard PageId={props.PagesIds} before={props.before} next={props.next} onClick={consolelog}/>
                </div>

                <div id="ContainerConteudoCard">
                    <div id='CardBanner'>
                        <img src={props.banner}/>
                    </div>
                    <div id='InnerContainerConteudoCard' className='container'>
                        <div id='Separator'>
                            <EmojiMenu UserId={props.UserId} emojiMenuId={props.EmojiMenuInsideSeparatorId} onOpen={consolelog} onClose={consolelog}/>
                        </div>
                        <Title>
                            <h2>
                                {nItemTitle}
                            </h2>
                        </Title>

                        <LastCreated/>
                        <Tags/>
                        <Data value={dateContent ? dateContent.toString() : ''} onChange={(e) => handleDateChange(e.target.value)}/>
                        <hr />

                        <label id='CustomFileUpl' className='btn btn-light'>
                            <input type="file"/>
                            <FontAwesomeIcon icon={faFileImport} className='icone'/>
                            Inserir arquivos
                        </label>

                        <textarea id="CustomTextArea" ref={textAreaRef} onInput={handleInput} placeholder='Digite aqui...' value={valueContent} onChange={(e) => handleValChange(e.target.value)}/>
                        
                    </div>

                </div>
            </div>

            <div id='ModalOverlay'></div>
        </div>
        </>
    )
}

export default Modal;