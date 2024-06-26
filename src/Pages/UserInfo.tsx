import { useEffect, useState } from 'react';
import './UserInfo.css';
import { useNavigate } from 'react-router';
import { faEye, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';
import md5 from 'crypto-js/md5';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';
import axios from 'axios';

interface UserInfoProps{
    userName: string;
}

function UserInfo(props: UserInfoProps){
    
    const [UserId, setUserId] = useState<number | undefined>(undefined);
    const [UserEmail, setUserEmail] = useState<string>('');
    const [showEmail, setShowEmail] = useState(false);
    const [showPss, setShowPss] = useState(false);

    const navigate = useNavigate();

    const HomePageLink = () => {
        navigate('/homepage')
    }

    const initialLink = () =>{
        navigate('/')
    }

    useEffect(() => {
        const removerClasses = () =>{
            const html = document.documentElement
            
            html.classList.remove("Login");
            html.classList.remove("SignUp");
        }
        removerClasses();

        const fetchUserIdByLoginOrSignUp = async () =>{
            try{
                // EXEMPLO DO IDUSUARIO COM LOCALSTORAGE
                const IdUsuario = localStorage.getItem('userId');
                console.log(`IdUsuario: ${IdUsuario}`)

                if(IdUsuario !== null) {
                    const userIdNumber = parseInt(IdUsuario, 10);
                    if(!isNaN(userIdNumber))
                        setUserId(userIdNumber);
                    else 
                        console.error(`IdUsuario não é um número válido: ${IdUsuario}`)
                }
            } catch (error) {
                console.error(`Erro ao fazer fetch dos userIds`)
            }
        }

        fetchUserIdByLoginOrSignUp();
    }, []);
        
    useEffect(() => {
            const fetchEmail = async () => {
            try {
              const response = await axios.get(`${EQ_API_URL}/pages/User/${UserId}`);
              console.log('Response data:', response.data);

              const UserEmailData = response.data.email;
              // console.log(`UserEmailData: ${UserEmailData}`)
              setUserEmail(UserEmailData);
              
            } catch (error){
              console.error(`Erro ao fazer fetch das pagesIds: ${error}`);
            }
          }
          
          if (UserId !== undefined) {
            fetchEmail();
          }
          //Implementar depois nos cards e no container pai (vai ser o superior)
    }, [UserId])

    // Gravatar
    const defaultImage = 'identicon';
    const size = 200;
    const hash = md5(UserEmail.trim().toLowerCase()).toString();
    const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${defaultImage}`;

    return(
        <div id='ContainerMaxUserInfo' className='d-flex flex-column'>
            <div id='BarraSuperior' className='nav w-100 bg-light py-2'>
                <a id='Voltar' className='btn btn-light ml' onClick={HomePageLink}>
                    <FontAwesomeIcon icon={faHouse} className='pr'/>
                    Voltar
                </a>
            </div>

            <div id='InfosPrincipais' className='card w-100 d-flex justify-content-center h-100'>
                <div className='card-body d-flex align-items-center justify-content-center flex-column'>
                    <h3 className='card-title'>Usuário: {props.userName}</h3>
                    <Avatar 
                        src={gravatarURL} 
                        className='avatar mt-3'
                        alt='Perfil' 
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => 
                        {e.currentTarget.src = '../assets/avatarIcon.png' 
                    }}/>

                    <label htmlFor="" className='mt-4 w-75'>
                        <p><b className='d-flex justify-content-center'>E-mail</b></p>
                        <input 
                        type={
                            showEmail ? "text" : "password"
                        } 
                        className='form-control text-center' contentEditable='false' disabled value={UserEmail}/>
                        <div className='BotãoDView' onClick={() => setShowEmail((prev) => !prev)}>
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                    </label>
                    <label htmlFor="" className='mt-3 mb-5 w-75'>
                        <p><b className='d-flex justify-content-center'>Senha:</b></p>
                        <input
                        type={
                            showPss ? "text" : "password"
                        }
                        className='form-control text-center' 
                        contentEditable='false' 
                        disabled
                        value={'SenhaExemplar123'}/>
                        <div className='BotãoDView' onClick={() => setShowPss((prev) => !prev)}>
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                    </label>
                            
                    <div id='Deslogar' className='btn btn-danger w-25' onClick={initialLink}>
                        <FontAwesomeIcon icon={faRightFromBracket} className='pr' />
                        Deslogar
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;