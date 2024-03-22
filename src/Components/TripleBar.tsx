import './tripleBar.css'

interface Props{
    onClick: () => void;
}

function TripleBar(props: Props){
    return(
        <div id='tripleBar'>
            <div id='Bars' onClick={props.onClick}></div>
        </div>
    )
}

export default TripleBar