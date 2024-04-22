import { ReactNode } from 'react';
import './InputWriteIdea.css'
// import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
    classNm?: string;
    children?: ReactNode;
}

function Spacer(props: Props){
    return(
        <div id='Spacer' onClick={props.onClick} className={props.classNm}>
            {props.children}
        </div>
    )
}

export default Spacer;