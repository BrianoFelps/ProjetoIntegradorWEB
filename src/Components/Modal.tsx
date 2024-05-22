import { ReactNode, useEffect, useRef } from 'react';
import BarraSuperiorCard from './BarraSuperiorCard';
import EmojiMenu from './EmojiMenu';
import './Modal.css'
import Title from './title';
import LastCreated from './LastCreated';
import Tags from './Tags';
import Data from './Data';

interface Props {
    onClose: () => void;

    idName: string;
    banner: string;

    EmojiMenuInsideSeparatorId: number;

    Titulo: string;
}


function Modal (props: Props){
    
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
        // Ajusta a altura inicial ao montar o componente
        handleInput();
    }, []);

    return(
        <>
        <div id='DadModalContainer'>
            <div id="ModalContainerMax" className='card'>
                
                <div id="ContainerSuperiorCard" className='card-header'>
                    <BarraSuperiorCard onClick={consolelog}/>
                </div>

                <div id="ContainerConteudoCard">
                    <div id='CardBanner'>
                        <img src={props.banner}/>
                    </div>
                    <div id='InnerContainerConteudoCard' className='container'>
                        <div id='Separator'>
                            <EmojiMenu emojiMenuId={props.EmojiMenuInsideSeparatorId} onOpen={consolelog} onClose={consolelog}/>
                        </div>
                        <Title>
                            <h2>
                                {props.Titulo}
                            </h2>
                        </Title>

                        <LastCreated/>
                        <Tags/>
                        <Data/>
                        <hr />
                        <textarea id="CustomTextArea" ref={textAreaRef} onInput={handleInput} placeholder='Digite aqui...'></textarea>
                    </div>

                </div>

                <button className="btn btn-primary" onClick={props.onClose}>
                    Fechar
                </button>
            </div>

            <div id='ModalOverlay'></div>
        </div>
        </>
    )
}

export default Modal;