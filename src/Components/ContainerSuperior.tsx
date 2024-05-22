import './ContainerSuperior.css'
import ClockIcon from './ClockIcon'
import CommentIcon from './CommentIcon'
import EditedInfo from './EditedInfo'
import FavoriteIcon from './FavoriteIcon'
import ShareButton from './ShareButton'
import TextTitle from './TextTitle'
import ThreeDotIcon from './ThreeDotIcon'
import TripleBar from './TripleBar'

interface props {
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    value: string;
}

function ContainerSuperior (props: props) {

    return(
        <div id='ContainerSuperior' className='navbar navbar-light bg-light d-flex justify-content-between'>

            <div id='ParteEsquerda' className='d-flex align-items-center justify-content-center navbar-brand'>
            <TripleBar onClick={props.onClick}/>

            <TextTitle value={props.value} onClick={props.onClick}/>
            </div>

            <div id='ItensDoCanto'>
            <div className='d-none d-sm-flex'>
                <EditedInfo onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
            </div>
            <div className='d-none d-sm-flex'>
                <ShareButton onClick={props.onClick}/>
            </div>
            <div className='d-none d-sm-flex'>
                <CommentIcon onClick={props.onClick}/>
            </div>
            <div className='d-none d-sm-flex'>
                <ClockIcon onClick={props.onClick}/>
            </div>
                <FavoriteIcon onClick={props.onClick}/>
                <ThreeDotIcon onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default ContainerSuperior