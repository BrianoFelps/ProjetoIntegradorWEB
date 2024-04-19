import { ReactNode } from 'react'; 

interface props{
    children: ReactNode;
    onclick?: () => void;
}

function Title(Props: props) {
    return(
        <div id='DivTitulo' onClick={Props.onclick}>
            {Props.children}
        </div>
    )
}

export default Title