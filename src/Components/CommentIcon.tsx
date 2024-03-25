import "./CommentIcon.css"

interface Props{
    onClick: () => void;
}

function CommentIcon(props:Props){
    return(
        <div id="CommentIcon" onClick={props.onClick}>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
        </div>
    )
}

export default CommentIcon