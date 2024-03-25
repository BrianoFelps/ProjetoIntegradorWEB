import "./FavoriteIcon.css"
import "../assets/FontAwesome/font-awesome-4.7.0/css/font-awesome.min.css"

interface Props{
    src?: string;
    onClick: ()=> void;
}

function FavoriteIcon(props:Props){
    return(
        <div id="FavoriteIcon" onClick={props.onClick}>
                <i className="fa fa-star-o" id="star" aria-hidden="true"></i>
        </div>
    )
}

export default FavoriteIcon