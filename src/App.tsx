import './App.css';
import TripleBar from './Components/TripleBar';

function App() {
  const ola = () =>{
    alert("Olá")
  }

  return (
    <>

      <div id='Container'>
        <TripleBar onClick={ola}/>
      </div>
    </>
  )
}

export default App
