import './TopBar.css';
import Banner from "../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg"
import ContainerSuperior from '../Components/ContainerSuperior'

function TopBar() {
  const handleClick = () => {
    // sua função personalizada aqui
    console.log("Hover ocorreu!");
  };

  const retirado = () =>{
    console.log("Mouse retirado")
  }

  return (
    <>
      <div id='TopbarContainermax'>
          <ContainerSuperior value='Ponto de equilíbrio' onMouseEnter={handleClick} onMouseLeave={retirado}></ContainerSuperior>
          <div id='BgBanner'>
            <img src={Banner} alt="" className='img-fluid' />
          </div>
      </div>
    </>
  )
}

export default TopBar