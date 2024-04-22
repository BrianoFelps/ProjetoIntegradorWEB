import { ReactNode } from 'react'
import './TopBarL.css';
import ImageGaleryIcon from "../assets/icons8-gallery-50.png"

interface props {
    children: ReactNode;
    onClick: ()=> void;
}

function TopBarL (props: props){
    return(
        <ul className="nav nav-tabs" id='TopBarList'>
            <li className="nav-item">
                <a href="" className="nav-link active">
                    <img src={ImageGaleryIcon} alt="" />
                    Image Gallery
                </a>
            </li>

        </ul>
    )
}

export default TopBarL