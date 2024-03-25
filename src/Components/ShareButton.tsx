import './ShareButton.css'

interface Props{
    onClick: () => void;
}

function ShareButton(props: Props){
    return(
        <div id='ShareB' onClick={props.onClick}>
            <h2>Compartilhar</h2>
        </div>
    )
}

export default ShareButton