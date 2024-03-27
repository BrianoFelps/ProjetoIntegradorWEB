import './App.css';
import TripleBar from './Components/TripleBar';
import TextTitle from './Components/TextTitle';
import ShareButton from './Components/ShareButton';
import ThreeDotIcon from './Components/ThreeDotIcon';
import FavoriteIcon from './Components/FavoriteIcon';
import ClockIcon from './Components/ClockIcon';
import CommentIcon from './Components/CommentIcon';
import EditedInfo from './Components/EditedInfo';


function App() {
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

        <TextTitle onClick={ola}></TextTitle>

        <div id='ItensDoCanto'>
          <EditedInfo onMouseEnter={handleClick} onMouseLeave={ola}/>
          <ShareButton onClick={ola}/>
          <CommentIcon onClick={ola}/>
          <ClockIcon onClick={ola}/>
          <FavoriteIcon onClick={ola}/>
          <ThreeDotIcon onClick={ola}/>
        </div>
      </div>
      <div id='BgBanner'></div>

    </>
  )
}

export default App
