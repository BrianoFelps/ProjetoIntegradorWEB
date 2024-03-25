import './TextTitle.css'

interface Props{
    onClick: () => void;
}

function TextTitle(props: Props){
    return(
        <div id='TitleText'>
            <div id='TitleTextIcon' onClick={props.onClick}><h2>🏛️ Ponto de Equilibrio</h2>
            </div>
            {/* <input id='TitleTextIcon' onClick={props.onClick}> <h2>🏛️ Ponto de Equilibrio</h2> </input> */}
        </div>
    )
}

export default TextTitle