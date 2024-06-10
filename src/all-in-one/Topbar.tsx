import './topbar.css';
import Banner from "../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg"
import ContainerSuperior from '../Components/ContainerSuperior'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';


function TopBar() {
  const [PagesIds, setPagesIds] = useState<number[]>([]);
  
  const handleClick = () => {
    // sua função personalizada aqui
    console.log("Hover ocorreu!");
  };

  const retirado = () =>{
    console.log("Mouse retirado")
  }
  useEffect(() => {
    const fetchPagesIdsW1 = async () =>{
      try{
        const response = await axios.get(`${EQ_API_URL}/pages/`);

        const PagesIdsData = response.data
        .map((page: { id: number }) => page.id)

        setPagesIds(PagesIdsData);
        console.log(`Pages ids: ${PagesIdsData}`)
      }catch (error) {
        console.error('Error fetching Pages ids: ', error)
      }
    }

    fetchPagesIdsW1();
    //Implementar depois nos cards e no container pai (vai ser o superior)
  }, [])

  return (
    <>
      <div id='TopbarContainermax'>
          <ContainerSuperior PageId={PagesIds[0]} value='Ponto de equilíbrio' onMouseEnter={handleClick} onMouseLeave={retirado}></ContainerSuperior>
          <div id='BgBanner'>
            <img src={Banner} alt="" className='img-fluid' />
          </div>
      </div>
    </>
  )
}

export default TopBar;