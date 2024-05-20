import './DirectLink.css'


interface DirectLinkProps{
    textExample?: string;
    textLink?: string;
    onClickDirect?: () => void;
}

const DirectLink: React.FC<DirectLinkProps> = ({textExample, onClickDirect, textLink}) => {

    return(
        <div className='signUpLink'>
            <p className='suLink'>{textExample}</p>
            <p className='boldLink' onClick={onClickDirect}>{textLink}</p>
        </div>
    );
}


export default DirectLink;