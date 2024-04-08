import './InputWriteIdea.css'
// import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
}

function Spacer(props: Props){
    return(
        <div id='Spacer' onClick={props.onClick}>
        </div>
    )
}

export default Spacer;