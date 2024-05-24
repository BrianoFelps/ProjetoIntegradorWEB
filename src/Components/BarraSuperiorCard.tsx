import './BarraSuperiorCard.css'
import ClockIcon from './ClockIcon';
import CommentIcon from './CommentIcon';
import FavoriteIcon from './FavoriteIcon';
import ShareButton from './ShareButton';
import ThreeDotIcon from './ThreeDotIcon';
import Title from './title';

interface props {
    onClick: () => void;
}

function BarraSuperiorCard (props: props) {
    return(
        <div id='BarraSuperiorC' className='navbar navbar-light bg-light d-flex justify-content-between'>

            <div id='LeftSect' className='d-flex align-items-center justify-content-center'>
                <Title>
                    <a href="" className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>
                        Voltar
                    </a>
                    |
                    <a href="" className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>
                        Avançar
                    </a>
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