import './App.css';
import TripleBar from './Components/TripleBar';
import TextTitle from './Components/TextTitle';
import ShareButton from './Components/ShareButton';
import ThreeDotIcon from './Components/ThreeDotIcon';
import FavoriteIcon from './Components/FavoriteIcon';
import MiddleIcon from './Components/MiddleIcon';


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
          <ThreeDotIcon onClick={ola}/>
          <br />
          <FavoriteIcon onClick={ola}></FavoriteIcon>
        </div>
      </div>
      <div id='BgBanner'></div>

      <div id='testes'>
        <MiddleIcon onClick={ola}></MiddleIcon>

      </div>


    </>
  )
}

export default App
