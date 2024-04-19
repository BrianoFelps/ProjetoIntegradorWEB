// import React from 'react';
import './DiaADiaComponent.css'
import DiaADiaImage from '../assets/DiaADia_berserk_image.jpg'

interface Props{
    onClick: () => void;
}

function DiaADiaComponent(props: Props){
    return(
        <div id='DADComponent'>
            <div id='DiaADiaImage' onClick={props.onClick}> 
                <img loading='lazy'
                src={DiaADiaImage}
                alt="DiaADia"/>
            </div>

        </div>
    )
}

export default DiaADiaComponent