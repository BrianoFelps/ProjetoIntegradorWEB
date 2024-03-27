import './InputWriteIdea.css'
// import imgplace from '../assets/temploemoji100porcentorealfi.svg';

interface Props{
    onClick?: () => void;
}

function InputWriteIdea(props: Props){
    return(
        <div id='InputOutside'>
            <input id='InputWriteInside' type="text" placeholder="Write some ideas you have" onClick={props.onClick}></input>
        </div>
    )
}

export default InputWriteIdea