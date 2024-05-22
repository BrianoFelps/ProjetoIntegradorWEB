import './TextTitle.css'
import Parthenon from '../assets/GreekTempleIcon.png'

interface Props{
    onClick: () => void;
    value: string;
}

function TextTitle(props: Props){
    return(
        <div id='TitleText' onClick={props.onClick}>
            <div id='TitleTextIcon'><img src={Parthenon} alt="" /></div>
            <h2>{props.value}</h2>
        </div>
    )
}

export default TextTitle