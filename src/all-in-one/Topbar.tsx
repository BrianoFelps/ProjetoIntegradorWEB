import './topbar.css';
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

      <div id='ContainerSuperior'>
        <TripleBar onClick={ola}/>

        <TextTitle onClick={ola}/>

        <div id='ItensDoCanto'>
          <EditedInfo onMouseEnter={handleClick} onMouseLeave={ola}/>
          <ShareButton onClick={ola}/>
          <CommentIcon onClick={ola}/>
          <ClockIcon onClick={ola}/>
          <FavoriteIcon onClick={ola}/>
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