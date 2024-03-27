import { ReactNode } from 'react'; 

interface props{
    children: ReactNode;
}

function Title(Props: props) {
    return(
        <div>
            {Props.children}
        </div>
    )
}

export default Title