import './App.css';
import Input from './Components/Inputtypetext';
import Title from './Components/title';
import TopBar from './all-in-one/Topbar';
import EmojiMenu from './Components/EmojiMenu';
import InputWriteIdea from './Components/InputWriteIdea';
import MidIcon from './Components/MidIcon';

function App() {
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
            asdfdsafads
          </section>
        </main>
    </>
  )
}

export default App;