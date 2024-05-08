import '../Pages/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgplace from '../assets/temploemoji100porcentorealfi.svg';

function SignUp(){

    return(
    <> 
        <div id='AllPage'>
                <div id='logo'  className=''>
                    <div id='aniLogo'>
                        <img id='LogoIcon' src={imgplace}></img>
                        <label htmlFor="textLogo" id='textLogo'>Equilibrium</label>
                    </div>
                </div>
            <div id='CentPage'>
                <form className='insertData'>
                    <div id='titleLogin'>
                        <label htmlFor='labeltitleLogin' id='labelLogin'>Crie sua Conta aqui!</label>
                    </div>
                    <div id='signUpNE'>
                        <div id='FNameResponsive'>
                            <label htmlFor="exInputEmail1" id='labelFName'>Primeiro Nome: </label>
                            <input type="firstName" className="form-control" id="InputFName1" aria-describedby="fnameHelp" placeholder="Primeiro Nome"></input>
                        </div>
                        <div id='LNameResponsive'>
                            <label htmlFor="exInputEmail1" id='labelLName'>Sobre Nome: </label>
                            <input type="lastName" className="form-control" id="InputLName1" aria-describedby="lnameHelp" placeholder="Sobre Nome"></input>
                        </div>
                    </div>
                    <div className="form-groupE">
                        <label htmlFor="exInputEmail1" id='labelEmail'>Email: </label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                        <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                    </div>
                    <div className="form-groupP">
                        <label htmlFor="exInputPassword1" id='labelPassword'>Senha: </label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                    </div>
                    <div className="form-groupP">
                        <label htmlFor="exInputPassword1" id='labelCPassword'>Confirme a sua Senha: </label>
                        <input type="password" className="form-control" id="InputCPassword1" placeholder="Confirme a Senha"></input>
                    </div>
                    <div className="form-group form-check" id='checkgroup'>
                        <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar do Login</label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btnEnter">Criar Conta</button>
                    <br></br>
                </form>
            </div>
        </div>
    </>
    )
}


export default SignUp