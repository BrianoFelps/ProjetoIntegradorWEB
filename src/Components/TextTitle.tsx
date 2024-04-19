import './TextTitle.css'
import Parthenon from '../assets/GreekTempleIcon.png'

interface Props{
    onClick: () => void;
}

function TextTitle(props: Props){
    return(
        <div id='TitleText' onClick={props.onClick}>
            <div id='TitleTextIcon'><img src={Parthenon} alt="" /></div>
            <h2>Ponto de Equilibrio</h2>
        </div>
    )
}

export default TextTitle