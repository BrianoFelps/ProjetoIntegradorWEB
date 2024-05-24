import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { ChangeEvent } from 'react';

interface Props{
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Date (props: Props){

    return(
        <div id='ContainerTags' className='d-flex justify-content-between'>
            <div className='btn btn-light BotaoComponent'>
                <FontAwesomeIcon icon={faCalendarDays}/> Data
            </div>
            <div className='btn btn-light conteudo'>
                <input type="date" value={props.value} onChange={props.onChange} />
            </div>
        </div>
    )
}

export default Date