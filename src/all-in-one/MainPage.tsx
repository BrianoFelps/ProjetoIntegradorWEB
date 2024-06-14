import './MainPage.css'
import EmojiMenu from "../Components/EmojiMenu"
import MidIcon from "../Components/MidIcon"
import Title from "../Components/title"
import InputWriteIdea from "../Components/InputWriteIdea"
import TopBarL from "../Components/TopBarL"
import Input from "../Components/inputtypetext"


function MainPage() {

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
            <EmojiMenu
            onOpen={() => {}} 
            onClose={() => {}}
            emojiMenuId={1}/>
            <Input UserId={undefined}/>
            <InputWriteIdea InputWriteIdeaId={0}></InputWriteIdea>
          </section>
          
          <section id='main'>
            <TopBarL>
            </TopBarL>
          </section>
        </main>
        </>
    )
}
  export default MainPage