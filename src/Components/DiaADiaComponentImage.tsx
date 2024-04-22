// import React from 'react';
import './DiaADiaComponentImage.css'
import DiaADiaImage from '../assets/DiaADia_berserk_image.jpg'

interface Props{
    onClick: () => void;
}

function DiaADiaComponentImage(props: Props){
    return(
        <div id='DADComponent'>
            <div id='DiaADiaImg' onClick={props.onClick}> 
                <img loading='lazy'
                src={DiaADiaImage}
                alt="DiaADia"/>
            </div>
        </div>
    )
}

export default DiaADiaComponentImage