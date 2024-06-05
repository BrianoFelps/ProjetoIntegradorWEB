
import './BarraSuperiorCard.css'
import ClockIcon from './ClockIcon';
import CommentIcon from './CommentIcon';
import FavoriteIcon from './FavoriteIcon';
import ShareButton from './ShareButton';
import ThreeDotIcon from './ThreeDotIcon';
import Title from './title';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface props {
    onClick: () => void;
    before: () => void;
    next: () => void;
}

function BarraSuperiorCard (props: props) {
    return(
        <div id='BarraSuperiorC' className='navbar navbar-light bg-light d-flex justify-content-between'>

            <div id='LeftSect' className='d-flex align-items-center justify-content-center'>
                <Title>
                    <span onClick={props.before} title='Voltar'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span onClick={props.next} title='Avançar'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </Title>
            </div>

            <div id='RightSect' className='d-flex align-items-center justify-content-center'>
            <div className='d-none d-sm-flex'>
                <ShareButton onClick={props.onClick}/>
            </div>
            <div className='d-none d-sm-flex'>
                <CommentIcon onClick={props.onClick}/>
            </div>
            <div className='d-none d-sm-flex'>
                <ClockIcon onClick={props.onClick}/>
            </div>
                <FavoriteIcon/>
                <ThreeDotIcon onClick={props.onClick}/>
            </div>
        </div> 
    )
}

export default BarraSuperiorCard