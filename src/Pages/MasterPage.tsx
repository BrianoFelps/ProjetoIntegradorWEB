import TopBar from '../all-in-one/Topbar.tsx';
import ContentPage from '../all-in-one/ContentPage';
import MidIcon from '../Components/MidIcon';
import { useEffect } from 'react';

function MasterPage () {

    useEffect(() => {

        function RemoverClass() {
            const html = document.documentElement
            
            html.classList.remove("Login");
            html.classList.remove("SignUp");
        }
        RemoverClass();

    }, []);

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