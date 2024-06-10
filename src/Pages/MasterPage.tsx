import TopBar from '../all-in-one/Topbar.tsx';
import ContentPage from '../all-in-one/ContentPage';
import MidIcon from '../Components/MidIcon';
import { useEffect } from 'react';

interface MasterPageProps{
    userName: string;
}


function MasterPage (props: MasterPageProps) {

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
            <TopBar userName={props.userName}></TopBar>

            <div id='Separator'>
                <MidIcon/>
            </div>

            <ContentPage/>
        </>
    )
}

export default MasterPage;