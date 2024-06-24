import '../Components/LinkGroup.css';
import InputWriteIdea from '../Components/InputWriteIdea';
import CardTooltip from './CardTooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface props{
    emojimenuid: number;
    emojimenuid2: number;
    emojimenuid3: number;
    inputid: number;
    inputid2: number;
    inputid3: number;
    inputWriteIdeaId: number;
    UserId: number | undefined;
}

function LinkGroup (props: props){
    
    return(
        <div id='LinkGroupContainer'>
            <InputWriteIdea WIuserId={props.UserId} InputWriteIdeaId={props.inputWriteIdeaId}/>
            
            <ul className='list-group list-unstyled' id='ListLinkGroup'>
                <CardTooltip UserId={props.UserId} InputWcardId={props.inputid} EmojiMenuId={props.emojimenuid}></CardTooltip>
                <CardTooltip UserId={props.UserId} InputWcardId={props.inputid2} EmojiMenuId={props.emojimenuid2}></CardTooltip>
                <CardTooltip UserId={props.UserId} InputWcardId={props.inputid3} EmojiMenuId={props.emojimenuid3}></CardTooltip>
            </ul>
        </div>
    )
}

export default LinkGroup;