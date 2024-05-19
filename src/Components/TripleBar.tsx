import './tripleBar.css'
import hamburgIcon from '../assets/icons8-menu-50 (1).png'

interface Props{
    onClick: () => void;
}

function TripleBar(props: Props){
    return(
        <div id='tripleBar'>
            <div id='Bars' onClick={props.onClick}>
                <img src={hamburgIcon}/>
            </div>
        </div>
    )
}

export default TripleBar