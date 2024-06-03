import './LastCreated.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {format} from 'date-fns'
import { ptBR } from 'date-fns/locale'

function LastCreated (){
    const formattedDate = format(new Date(), "d 'de' MMMM 'de' yyyy HH:mm", { locale: ptBR });

    return(
        <div id='ContainerCreated' className='d-flex justify-content-between'>
            <div className='btn btn-light BotaoComponent'>
                <FontAwesomeIcon icon={faClock}/> Criado
            </div>
            { <div className='conteudo'>
                {formattedDate}
            </div> }
        </div>
    )
}

export default LastCreated
