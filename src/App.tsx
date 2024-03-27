import './App.css';
import Input from './Components/Inputtypetext';
import Title from './Components/title';
import TopBar from './all-in-one/Topbar';
import EmojiMenu from './Components/EmojiMenu';

function App() {
  return (
    <>
        <TopBar ></TopBar>

        <main id='ConteudoPrincipal'>
          <section>
            <Title>
              <h2>
                Ponto de equilíbrio
              </h2>
            </Title>
            <EmojiMenu></EmojiMenu>
            <Input placeholder='Citação vazia'/>
          </section>
        </main>
    </>
  )
}

export default App;