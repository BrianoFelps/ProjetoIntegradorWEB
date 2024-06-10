import './ContainerSuperior.css'
import ClockIcon from './ClockIcon'
import CommentIcon from './CommentIcon'
import EditedInfo from './EditedInfo'
import FavoriteIcon from './FavoriteIcon'
import ShareButton from './ShareButton'
import TextTitle from './TextTitle'
import ThreeDotIcon from './ThreeDotIcon'
import TripleBar from './TripleBar'
import { useEffect, useRef, useState } from 'react'
import { Drawer, Avatar } from '@mui/material'
import user from '../assets/terrycrews.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faGear, faGem, faHouse, faMagnifyingGlass, faQuoteLeft, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import MidIcon from './MidIcon'
import { faCalendar, faObjectGroup } from '@fortawesome/free-regular-svg-icons';
// import axios from 'axios'
// import { EQ_API_URL } from '../utils/EquilibriumApiConfig'

interface props {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    value: string;
    PageId: number;
    userName: string;
}

function ContainerSuperior (props: props) {
    const [open, setOpen] = useState(false);
    // Continua daqui, essa const vai receber o valor do fetch pra ser usada no texto la embaixo, baseada no user que fez login (idealmente)
    // const [UserName, setUserName] = useState<string[]>([]);
     
    const BarRef = useRef<HTMLDivElement>(null);

    const toggleDrawer = (newOpen: boolean) => () =>{
        setOpen(newOpen);
    }

    const ola = () =>{
        alert("Olá")
    }

    // useEffect(() => {
    //     const fetchUsernameWpage = async () =>{
    //         try{
    //             const response = await axios.get(`${EQ_API_URL}/pages/usr`);
    //             const Page = response.data.find((pages: {id: number}) => pages.id === props.PageId);
    //             const PageUsername = Page ? Page.nome : '';
    //             setUserName(PageUsername)
    //             console.log(`Page: ${Page}`)
    //             console.log(`UserName: ${UserName}`); 
    //             console.log(`Pageusername: ${PageUsername}`); 
    //         } catch (error){
    //             console.error(`Erro ao fazer fetch no username`)
    //         }
    //     }

    //     fetchUsernameWpage();
    // }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const drawerElement = document.querySelector('.css-4t3x6l-MuiPaper-root-MuiDrawer-paper');
            if (drawerElement && !drawerElement.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    useEffect(() => {
        
    })

    return(
        <div id='ContainerSuperior' className='navbar navbar-light bg-light d-flex justify-content-between'>

            <div id='ParteEsquerda' className='d-flex align-items-center justify-content-center navbar-brand'>
            <TripleBar onClick={toggleDrawer(true)}/>

            <TextTitle value={props.value} onClick={ola}/>
            </div>

            {open && 
                <Drawer ref={BarRef} 
                open={open} 
                variant='temporary' 
                anchor='left' 
                onClose={toggleDrawer(false)} 
                id='Drawer'
                classes={{ paper: 'MuiDrawer-paper alinhamento' }}
                >
                    <ul id='ParteSuperiorD'>
                        <li className='DrawerLi d-flex align-items-center AvatarLi'>
                            <a href="" id='AvatarLink'>
                                <Avatar src={user} className='avatar' alt='Perfil'></Avatar>
                            </a>
                                <b style={{color: 'black'}}>Página de: {props.userName}</b>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='iconeDoDrawer'/>
                                Pesquisar
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon className='iconeDoDrawer' icon={faHouse} />
                                Página inicial
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon className='iconeDoDrawer' icon={faQuoteLeft} />
                                Caixa de entrada
                            </a>
                        </li>
                        

                    </ul>
                    <ul id='Pags'>
                        <label className='align-self-start mb-2'>Páginas</label>
                        <li className='DrawerLi d-flex align-items-center justify-content-center flex-column mb-5 pag'>
                            <a href="" className='btn btn-outline-dark active'>
                                <MidIcon className='iconeDoDrawer'/>Ponto de equilíbrio
                            </a>

                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faGear} className='iconeDoDrawer'/>
                                Configurações
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faCircleInfo} className='iconeDoDrawer'/>
                                Suporte
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faCalendar} className='iconeDoDrawer'/>
                                Calendário
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faObjectGroup} className='iconeDoDrawer'/>
                                Modelos
                            </a>
                        </li>
                        <li className='DrawerLi d-flex align-items-center'>
                            <a href="" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faUserGroup} className='iconeDoDrawer'/>
                                Criar espaço de equipe
                            </a>
                        </li>
                    </ul>

                    <ul id='Inferior'>
                    <li className='DrawerLi d-flex align-items-center'>
                            <a href="#" className='btn btn-outline-dark'>
                                <FontAwesomeIcon icon={faGem} className='iconeDoDrawer'/>
                                Adquira o
                                <i>&nbsp;Premium</i>
                            </a>
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
                <FavoriteIcon PageId={props.PageId}/>

                <ThreeDotIcon onClick={ola}/>
            </div>
        </div>
    )
}

export default ContainerSuperior