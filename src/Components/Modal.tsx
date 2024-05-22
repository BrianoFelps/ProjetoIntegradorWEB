import { ReactNode } from 'react';
import BarraSuperiorCard from './BarraSuperiorCard';
import EmojiMenu from './EmojiMenu';
import './Modal.css'
import Title from './title';

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

    return(
        <>
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
                    </div>
                    

                </div>
                <button className="btn btn-primary" onClick={props.onClose}>
                    Fechar
                </button>
            </div>

            <div id='ModalOverlay'></div>
        </>
    )
}

export default Modal;