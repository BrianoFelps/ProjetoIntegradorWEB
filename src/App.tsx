import './App.css';
import Input from './Components/inputtypetext';
import Title from './Components/title';
import TopBar from './all-in-one/Topbar';
import EmojiMenu from './Components/EmojiMenu';
import InputWriteIdea from './Components/InputWriteIdea';
import MidIcon from './Components/MidIcon';
import TopBarL from './Components/TopBarL';
import NItem from './Components/NItem';

function App() {
  const oi = () => {
    alert('oi')
  }

  return (
    <>
        <TopBar ></TopBar>

        <div id='Separator'>
          <MidIcon/>
        </div>

        <main id='ConteudoPrincipal'>
          <section id='top'>
            <Title>
              <h2>
                Ponto de equilíbrio
              </h2>
            </Title>
            <EmojiMenu/>
            <Input/>
            <InputWriteIdea classNm='top'></InputWriteIdea>
          </section>
          
          <section id='main'>
            <TopBarL onClick={oi} classNm= "primary">
              <a href=''>
                <i className="fa fa-picture-o" aria-hidden="true" style={{fontSize:17}}/>
                <span>
                  Gallery view
                </span>
              </a>
            </TopBarL>
            <div id='ItensContainer'>
              <NItem onclick={oi}/>
            </div>
          </section>
        </main>
    </>
  )
}

export default App;