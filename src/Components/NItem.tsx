import './NItem.css'
import EmojiMenu from './EmojiMenu';

interface props{
    onclick: () => void;
}

function NItem (props: props){
    return(
        <div id='NItemContainer'>
                    <EmojiMenu/>
            <div id='NItem' onClick={props.onclick}>
                <div id='NItemText'>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default NItem