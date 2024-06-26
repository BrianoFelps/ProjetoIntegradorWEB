import './MainPage.css'
import MidIcon from "../Components/MidIcon"
import TopBar from './Topbar'
import ContentPage from './ContentPage'
import { useEffect, useState } from 'react';

interface MainPageProps{
  suppressFunctions?: boolean;
}

function MainPage({ suppressFunctions = false }: MainPageProps) {
  const [UserId, setUserId] = useState<number | undefined>(undefined);
    
  useEffect(() => { 
      if(suppressFunctions) return;

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

  }, [suppressFunctions]);
  
    return (
      <div id='cardtooltiporiginal'>
        <TopBar UserId={UserId} userName={''} suppressFunctions={suppressFunctions}></TopBar>

        <div id='Separator'>
            <MidIcon/>
        </div>

        <ContentPage UserId={1} suppressFunctions={suppressFunctions}/>
      </div>
      
    )
}
  export default MainPage