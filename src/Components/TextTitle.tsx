import './TextTitle.css'

interface Props{
    onClick: () => void;
}

function TextTitle(props: Props){
    return(
        <div id='TitleText' onClick={props.onClick}>
            <div id='TitleTextIcon'></div>
            <h2>Ponto de Equilibrio</h2>
        </div>
    )
}

export default TextTitle