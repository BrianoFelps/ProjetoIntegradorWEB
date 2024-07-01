import TopBar from '../all-in-one/Topbar.tsx';
import ContentPage from '../all-in-one/ContentPage';
import MidIcon from '../Components/MidIcon';
import { useEffect, useState } from 'react';

interface MasterPageProps{
    userName: string;
}

function MasterPage (props: MasterPageProps) {
    const [UserId, setUserId] = useState<number | undefined>(undefined);
    
    useEffect(() => {

        const fetchUserIdByLoginOrSignUp = async () =>{
            try{
                // EXEMPLO DO IDUSUARIO COM LOCALSTORAGE
                const IdUsuario = localStorage.getItem('userId');
                console.log(`IdUsuario: ${IdUsuario}`)

                if(IdUsuario !== null && IdUsuario !== undefined) {
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

        function RemoverClass() {
            const html = document.documentElement
            
            html.classList.remove("Login");
            html.classList.remove("SignUp");
        }
        RemoverClass();

    }, []);

    return(
        <>
            <TopBar UserId={UserId} userName={props.userName}></TopBar>

            <div id='Separator'>
                <MidIcon/>
            </div>

            <ContentPage UserId={UserId}/>
        </>
    )
}

export default MasterPage;