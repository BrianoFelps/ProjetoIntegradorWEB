import '../Components/LinkGroup.css';
import InputWriteIdea from '../Components/InputWriteIdea';
import CardTooltip from './CardTooltip';
import 'react-tooltip/dist/react-tooltip.css';

function LinkGroup (){
    return(
        <div id='LinkGroupContainer'>
            <InputWriteIdea>
                <input type="text"/>
            </InputWriteIdea>
            <ul className='list-group list-unstyled' id='ListLinkGroup'>
                <CardTooltip></CardTooltip>
                <CardTooltip></CardTooltip>
                <CardTooltip></CardTooltip>
            </ul>
        </div>
    )
}

export default LinkGroup;