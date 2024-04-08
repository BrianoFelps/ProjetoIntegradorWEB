import './InputWriteIdea.css'
// import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
    classNm?: string;
}

function Spacer(props: Props){
    return(
        <div id='Spacer' onClick={props.onClick} className={props.classNm}>
        </div>
    )
}

export default Spacer;