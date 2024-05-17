import { ReactNode } from 'react'
import './TopBarL.css';
import ImageGaleryIcon from "../assets/icons8-gallery-50.png"

interface props {
    children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TopBarL (_props: props){
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