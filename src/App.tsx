import './App.css';
import TripleBar from './Components/TripleBar';
import TextTitle from './Components/TextTitle';
import ShareButton from './Components/ShareButton';
import ThreeDotIcon from './Components/ThreeDotIcon';
import FavoriteIcon from './Components/FavoriteIcon';
import ClockIcon from './Components/ClockIcon';
import CommentIcon from './Components/CommentIcon';

function App() {
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
