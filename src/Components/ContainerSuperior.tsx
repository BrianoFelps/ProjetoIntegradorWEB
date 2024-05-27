import './ContainerSuperior.css'
import ClockIcon from './ClockIcon'
import CommentIcon from './CommentIcon'
import EditedInfo from './EditedInfo'
import FavoriteIcon from './FavoriteIcon'
import ShareButton from './ShareButton'
import TextTitle from './TextTitle'
import ThreeDotIcon from './ThreeDotIcon'
import TripleBar from './TripleBar'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'

interface props {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    value: string;
}

function ContainerSuperior (props: props) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () =>{
        setOpen(newOpen);
    }

    const ola = () =>{
        alert("Olá")
    }

    return(
        <div id='ContainerSuperior' className='navbar navbar-light bg-light d-flex justify-content-between'>

            <div id='ParteEsquerda' className='d-flex align-items-center justify-content-center navbar-brand'>
            <TripleBar onClick={toggleDrawer(true)}/>


            <TextTitle value={props.value} onClick={ola}/>
            </div>

            {open && 

            <Drawer style={{background:'blue'}} onClose={() => {toggleDrawer(false)}}>
                <ul>
                    <li>
                        <a href="">Entrar</a>
                    </li>
                </ul>
            </Drawer>

                }

            <div id='ItensDoCanto'>
                {/* Trabalhar na interatividade dos ícones */}
            <div className='d-none d-sm-flex'>
                <EditedInfo onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
            </div>
            <div className='d-none d-sm-flex'>
                <ShareButton onClick={ola}/>
            </div>
            <div className='d-none d-sm-flex'>
                <CommentIcon onClick={ola}/>
            </div>
            <div className='d-none d-sm-flex'>
                <ClockIcon onClick={ola}/>
            </div>
                <FavoriteIcon/>

                <ThreeDotIcon onClick={ola}/>
            </div>
        </div>
    )
}

export default ContainerSuperior