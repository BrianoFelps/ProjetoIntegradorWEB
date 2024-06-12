import './topbar.css';
import Banner from "../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg"
import ContainerSuperior from '../Components/ContainerSuperior'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface TopBarProps{
  userName: string;
  UserId: number | undefined;
}

function TopBar(props: TopBarProps) {
  const [PagesIds, setPagesIds] = useState<number>();
  const [PageName, setPageName] = useState<string>('');
  const [UserEmail, setUserEmail] = useState<string>('');
  
  const handleClick = () => {
    // sua função personalizada aqui
    console.log("Hover ocorreu!");
  };

  const retirado = () =>{
    console.log("Mouse retirado")
  }

  useEffect(() => {
    const fetchPagesIdsWUsers = async () => {
    try {
      const response = await axios.get(`${EQ_API_URL}/pages/User/${props.UserId}`);
      console.log('Response data:', response.data);

      const PageIdData = response.data.page_id;
      // console.log(`PageIdData: ${PageIdData}`);
      setPagesIds(PageIdData);

      const PageNameData = response.data.pagina;
      localStorage.setItem('PageName', PageNameData);
      // console.log(`NomePagina: ${PageNameData}`)
      setPageName(PageNameData);

      const UserEmailData = response.data.email;
      // console.log(`UserEmailData: ${UserEmailData}`)
      setUserEmail(UserEmailData);

    } catch (error){
      console.error(`Erro ao fazer fetch das pagesIds: ${error}`);
    }
  }

    if (props.UserId !== undefined) {
      fetchPagesIdsWUsers();
    }
    //Implementar depois nos cards e no container pai (vai ser o superior)
  }, [props.UserId])

  return (
    <>
      <div id='TopbarContainermax'>
        {PagesIds !== undefined && (
          <ContainerSuperior 
            email= {UserEmail}
            userName={props.userName} 
            PageId={PagesIds} 
            value={PageName}
            onMouseEnter={handleClick} 
            onMouseLeave={retirado} 
          />
        )}
          <div id='BgBanner'>
            <img src={Banner} alt="" className='img-fluid' />
          </div>
      </div>
    </>
  )
}

export default TopBar;