import './DirectLink.css'


interface DirectLinkProps{
    simpleText?: string;
    textLink?: string;
    onClickDirect?: () => void;
}

const DirectLink: React.FC<DirectLinkProps> = ({simpleText, onClickDirect, textLink}) => {

    return(
        <div className='signUpLink'>
            <p className='suLink'>{simpleText}</p>
            <p className='boldLink' onClick={onClickDirect}>{textLink}</p>
        </div>
    );
}


export default DirectLink;