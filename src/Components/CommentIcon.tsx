import "./CommentIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

interface Props{
    onClick: () => void;
}

function CommentIcon(props:Props){
    return(
        <div id="CommentIcon" onClick={props.onClick}>
            <FontAwesomeIcon icon={faComment} />
        </div>
    )
}

export default CommentIcon