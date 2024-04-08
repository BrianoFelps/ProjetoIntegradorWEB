import './App.css';
import Input from './Components/Inputtypetext';
import Title from './Components/title';
import TopBar from './all-in-one/Topbar';
import EmojiMenu from './Components/EmojiMenu';
import InputWriteIdea from './Components/InputWriteIdea';
import MidIcon from './Components/MidIcon';
import TopBarL from './Components/TopBarL';

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
            <InputWriteIdea></InputWriteIdea>
          </section>
          
          <section id='main'>
            <TopBarL onClick={oi}>
              <div>
                <i className="fa fa-picture-o" aria-hidden="true" style={{fontSize:17}}/>
                <span>
                  Gallery view
                </span>
              </div>
            </TopBarL>
          </section>
        </main>
    </>
  )
}

export default App;