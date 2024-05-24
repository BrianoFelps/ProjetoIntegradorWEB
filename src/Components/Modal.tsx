import { ReactNode, useEffect, useRef, useState } from 'react';
import BarraSuperiorCard from './BarraSuperiorCard';
import EmojiMenu from './EmojiMenu';
import './Modal.css'
import Title from './title';
import LastCreated from './LastCreated';
import Tags from './Tags';
import Data from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

interface Props {
    onClose: () => void;

    ClassName: string;
    banner: string;

    EmojiMenuInsideSeparatorId: number;

    Titulo: string;
}


function Modal (props: Props){
    const [ModalOpen, setModalOpen] = useState(false)
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
        // Ajusta a altura inicial ao montar o componente
        handleInput();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ModalRef.current && !ModalRef.current.contains(event.target as Node)) {
                props.onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props]);

    return(
        <>
        <div id='DadModalContainer' className={props.ClassName}>
            <div id="ModalContainerMax" className='card' ref={ModalRef}>
                
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

                        <label id='CustomFileUpl' className='btn btn-light'>
                            <input type="file"/>
                            <FontAwesomeIcon icon={faFileImport} className='icone'/>
                            Inserir arquivos
                        </label>

                        <textarea id="CustomTextArea" ref={textAreaRef} onInput={handleInput} placeholder='Digite aqui...' maxLength={500}></textarea>

                        
                        
                    </div>

                </div>
            </div>

            <div id='ModalOverlay'></div>
        </div>
        </>
    )
}

export default Modal;