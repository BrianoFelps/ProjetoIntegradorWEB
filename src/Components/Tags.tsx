import './Tags.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Tags (){
    return(
        <div id='ContainerTags' className='d-flex justify-content-between'>
            <div className='btn btn-light BotaoComponent'>
                <FontAwesomeIcon icon={faList}/> Tags
            </div>
            <div className='btn btn-light conteudo'>
                <input type="text" />
            </div>
        </div>
    )
}

export default Tags