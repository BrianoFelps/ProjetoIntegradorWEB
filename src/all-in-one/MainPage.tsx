import './MainPage.css'
import EmojiMenu from "../Components/EmojiMenu"
import MidIcon from "../Components/MidIcon"
import Input from "../Components/Inputtypetext"
import Title from "../Components/title"
import InputWriteIdea from "../Components/InputWriteIdea"
import TopBarL from "../Components/TopBarL"


function MainPage() {
  
    const oi = () => {
        alert('oi')
    }

    return (
      <>
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
  export default MainPage