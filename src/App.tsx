import './App.css'
import ShareButton from './Components/ShareButton';
import ThreeDotIcon from './Components/ThreeDotIcon';

function App() {

  const testebacanudo = () =>{ 
      alert('testebacanudo');
  }


  return (
    <>
      <div id='Container'>
        <ShareButton onClick={testebacanudo} />
      </div>
    </>
  )
}

export default App
