import './ClockIcon.css'

interface Props{
    onClick: () => void;
}

function ClockIcon(props: Props){
    return(
        <div id='ClockI'>
            <div id='ClockIconOption' onClick={props.onClick}></div>
        </div>
    )
}

export default ClockIcon