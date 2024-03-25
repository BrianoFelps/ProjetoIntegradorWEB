import './ThreeDotIcon.css'

interface Props{
    onClick: () => void;
}

function ThreeDotIcon(props: Props){
    return(
        <div id='ThreeDI'>
            <div id='ThreeDotIconOption' onClick={props.onClick}></div>
        </div>
    )
}

export default ThreeDotIcon