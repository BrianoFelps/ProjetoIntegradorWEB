import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './all-in-one/Topbar';
import MidIcon from './Components/MidIcon';
import ContentPage from './all-in-one/ContentPage';

function App() {
  return (
    <>
        <TopBar></TopBar>

        <div id='Separator'>
          <MidIcon/>
        </div>

        <ContentPage/>
    </>
  )
}

export default App;