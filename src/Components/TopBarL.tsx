import React, { ReactNode } from 'react'
import './TopBarL.css'

interface props {
    children: ReactNode;
    onClick: ()=> void;
    classNm: string;
}

function TopBarL (props: props){
    return(
        <ul id='TopBarList' className={props.classNm}>
            {React.Children.map(props.children, (child, index) => {
                // Verifica se o elemento child é válido e é um tipo de React.Element
                if (React.isValidElement(child)) {
                    // Retorna o elemento child envolvido em um <li> com a classe ListItem
                    return <li key={index} className="ListItem" onClick={props.onClick}>{child}</li>;
                }
                return null;
            })}
        </ul>
    )
}

export default TopBarL