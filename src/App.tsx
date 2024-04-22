import './App.css';
import image1 from "./assets/1000019662.jpg"
import image2 from "./assets/Alexandre-o-Grande.webp"
import image3 from "./assets/Apoteose-de-Santo-Tomás.jpg"
import image4 from "./assets/athens-art-school-1143741_1920.jpg"
import image5 from "./assets/ca9c8e1a6db194149e8806c734fdae47.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Inputtypetext';
import Title from './Components/title';
import TopBar from './all-in-one/Topbar';
import EmojiMenu from './Components/EmojiMenu';
import InputWriteIdea from './Components/InputWriteIdea';
import MidIcon from './Components/MidIcon';
import TopBarL from './Components/TopBarL';
import NItem from './Components/NItem';
import LinkGroup from './Components/LinkGroup';

function App() {
  const oi = () => {
    alert('oi')
  }

  return (
    <>
        <TopBar></TopBar>

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
            <TopBarL onClick={oi}>
              <a href=''>
                <i className="fa fa-picture-o" aria-hidden="true" style={{fontSize:17}}/>
                <span>
                  Gallery view
                </span>
              </a>
            </TopBarL>
            <div id='ItensContainer'>
              <NItem onclick={oi} image={image1}/>
              <NItem onclick={oi} image={image2}/>
              <NItem onclick={oi} image={image3}/>
              <NItem onclick={oi} image={image4}/>
              <NItem onclick={oi} image={image5}/>
            </div>
          </section>

          <section id='NavegacaoBasica'>
              <LinkGroup></LinkGroup>
          </section>
        </main>
    </>
  )
}

export default App;