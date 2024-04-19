import './NItem.css'
import EmojiMenu from './EmojiMenu';

interface props{
    onclick: () => void;
    image: string;
}

function NItem (props: props){
    return(
        <div id='NItemContainer' className='card'>
                    
            <img className='card-img-top' onClick={props.onclick} src={props.image} alt="" />
            <div id='NItem' className='card-body'>
            <EmojiMenu/>
                <div id='NItemText' className='card-title'>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default NItem