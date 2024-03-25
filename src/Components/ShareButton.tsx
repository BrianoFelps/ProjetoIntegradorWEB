import './ShareButton.css'

interface Props{
    onClick: () => void;
}

function ShareButton(props: Props){
    return(
        <div id='ShareB'>
            <div id='ShareButtonText' onClick={props.onClick}><h2>Compartilhar</h2></div>
        </div>
    )
}

export default ShareButton