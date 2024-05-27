import { Drawer } from "@mui/material"
import TripleBar from "../TripleBar"
import { ReactNode, useState } from "react";

interface props{
    children: ReactNode;
}

function SideBar (props: props){
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () =>{
        setOpen(newOpen);
    }

    return(
        <>
        <Drawer open={true} variant='permanent' id='Drawer'>
            <ul>
                <li>
                    <a href="">Entrar</a>
                </li>
            </ul>

            <button className='btn btn-danger' onClick={() => {console.log("aoba")}}>X</button>
        </Drawer>
        
        {props.children}
        </>
    )
}

export default SideBar