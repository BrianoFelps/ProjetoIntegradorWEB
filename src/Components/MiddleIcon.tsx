import './MiddleIcon.css'

interface Props{
    onClick: () => void;
}

function MiddleIcon(props: Props){
    return(
        <div id='MiddleI'>
            <div id='MiddleIconSide' onClick={props.onClick}></div>
        </div>
    )
}

export default MiddleIcon