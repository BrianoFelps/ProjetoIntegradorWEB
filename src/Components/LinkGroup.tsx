import '../Components/LinkGroup.css';
import InputWriteIdea from '../Components/InputWriteIdea';
import CardTooltip from './CardTooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface props{
    emojimenuid: number;
    emojimenuid2: number;
    emojimenuid3: number;
    // emoji1: string;
    // emoji2: string;
    // emoji3: string;
}

function LinkGroup (props: props){
    
    return(
        <div id='LinkGroupContainer'>
            <InputWriteIdea>
                <input type="text"/>
            </InputWriteIdea>
            <ul className='list-group list-unstyled' id='ListLinkGroup'>
                <CardTooltip EmojiMenuId={props.emojimenuid}></CardTooltip>
                <CardTooltip EmojiMenuId={props.emojimenuid2}></CardTooltip>
                <CardTooltip EmojiMenuId={props.emojimenuid3}></CardTooltip>
            </ul>
        </div>
    )
}

export default LinkGroup;