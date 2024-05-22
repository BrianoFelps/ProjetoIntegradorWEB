import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';


function Date (){
    return(
        <div id='ContainerTags' className='d-flex justify-content-between'>
            <div className='btn btn-light BotaoComponent'>
                <FontAwesomeIcon icon={faCalendarDays}/> Data
            </div>
            <div className='btn btn-light conteudo'>
                <input type="date" />
            </div>
        </div>
    )
}

export default Date