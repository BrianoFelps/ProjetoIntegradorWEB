import './TopBarL.css';
import ImageGaleryIcon from "../assets/icons8-gallery-50.png"

function TopBarL (){
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