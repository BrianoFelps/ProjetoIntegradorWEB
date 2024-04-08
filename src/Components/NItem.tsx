import './NItem.css'
import EmojiMenu from './EmojiMenu';

interface props{
    onclick: () => void;
}

function NItem (props: props){
    return(
        <div id='NItemContainer'>
            <div id='' onClick={props.onclick}></div>

            <EmojiMenu/>
            
            <input type="text"/>
        </div>
    )
}

export default NItem