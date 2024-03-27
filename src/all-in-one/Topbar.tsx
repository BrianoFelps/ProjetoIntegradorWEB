import './topbar.css';
import TripleBar from '../Components/TripleBar';
import TextTitle from '../Components/TextTitle';
import ShareButton from '../Components/ShareButton';
import ThreeDotIcon from '../Components/ThreeDotIcon';
import FavoriteIcon from '../Components/FavoriteIcon';


function TopBar() {
  const ola = () =>{
    alert("Olá")
  }

  return (
    <>

      <div id='ContainerSuperior'>
        <TripleBar onClick={ola}/>

        <TextTitle onClick={ola}></TextTitle>

        <div id='ItensDoCanto'>
          <ShareButton onClick={ola}/>
          <ThreeDotIcon onClick={ola}/>
          <br />
          <FavoriteIcon onClick={ola}></FavoriteIcon>
        </div>
      </div>
      <div id='BgBanner'></div>


    </>
  )
}

export default TopBar