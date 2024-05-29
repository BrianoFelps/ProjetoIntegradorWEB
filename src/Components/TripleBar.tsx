import './tripleBar.css'
import hamburgIcon from '../assets/icons8-menu-50 (1).png'

interface Props{
    onClick: () => void;
    // onMouseEnter: () => void;
}

function TripleBar(props: Props){
    return(
        <div id='tripleBar' onClick={props.onClick}>
            <div id='Bars'>
                <img src={hamburgIcon}/>
            </div>
        </div>
    )
}

export default TripleBar