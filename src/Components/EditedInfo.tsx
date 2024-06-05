
import './EditedInfo.css'

interface Props{
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function EditedInfo(props: Props){


    const handleMouseEnter = () => {
        if (props.onMouseEnter) {
            props.onMouseEnter(); // Chama a função passada como propriedade
        }
    };
    const handleMouseLeave = () => {
        if (props.onMouseLeave) {
            props.onMouseLeave();
        }
    };

    return(
        <nav id='EditedInfo'>
            <p onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='d-none d-lg-block'>
                Editado há 1h
            </p>
        </nav>
    )
}

export default EditedInfo;