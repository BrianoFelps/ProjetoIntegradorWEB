import './topbar.css';
import Banner from "../assets/i_have_no_enemies___thorfinn___vinland_manga_3d_by_synedae_dg3gce9-fullview.jpg"
import TripleBar from '../Components/TripleBar';
import TextTitle from '../Components/TextTitle';
import ShareButton from '../Components/ShareButton';
import ThreeDotIcon from '../Components/ThreeDotIcon';
import FavoriteIcon from '../Components/FavoriteIcon';
import CommentIcon from '../Components/CommentIcon';
import EditedInfo from '../Components/EditedInfo';
import ClockIcon from '../Components/ClockIcon';

function TopBar() {
  const ola = () =>{
    alert("Olá")
  }

  const handleClick = () => {
    // sua função personalizada aqui
    console.log("Hover ocorreu!");
  };

  return (
    <>
  <div id='TopbarContainermax'>
      <div id='ContainerSuperior' className='d-flex justify-content-between'>

        <div id='ParteEsquerda' className='d-flex align-items-center justify-content-center'>
          <TripleBar onClick={ola}/>

          <TextTitle onClick={ola}/>
        </div>
        

        <div id='ItensDoCanto'>
          <EditedInfo onMouseEnter={handleClick} onMouseLeave={ola}/>
          <ShareButton onClick={ola}/>
          <CommentIcon onClick={ola}/>
          <ClockIcon onClick={ola}/>
          <FavoriteIcon onClick={ola}/>
          <ThreeDotIcon onClick={ola}/>
        </div>
      </div>
      <div id='BgBanner'>
        <img src={Banner} alt="" className='img-fluid' />
      </div>

    </div>
    </>
  )
}

export default TopBar