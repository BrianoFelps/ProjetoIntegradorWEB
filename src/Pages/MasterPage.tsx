import TopBar from '../all-in-one/Topbar.tsx';
import ContentPage from '../all-in-one/ContentPage';
import MidIcon from '../Components/MidIcon';

function MasterPage () {
    return(
        <>
            <TopBar></TopBar>

            <div id='Separator'>
                <MidIcon/>
            </div>

            <ContentPage/>
        </>
    )
}

export default MasterPage;