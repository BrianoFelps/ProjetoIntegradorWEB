import '../Pages/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgplace from '../assets/temploemoji100porcentorealfi.svg';
import { useState } from 'react';
import axios from 'axios';

function SignUp(){

    const [signedIn, setSignedIn] = useState(false);
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    const handleSubmit = async () => {
        // Verifica se todos os campos foram preenchidos
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setFormError('Por favor, preencha todos os campos.');
            return;
        }

        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            setFormError('As senhas não coincidem.');
            return;
        }

        const nomeCompleto = firstName + ' ' + lastName;

        const telefone = 1;

        const isPremium = 1;

        
        if(nomeCompleto && email && password && telefone && isPremium){
            try{
                const response = await axios.post('http://localhost:8080/pages/SignUp', { nomeCompleto, email, password, telefone, isPremium });
                console.log(response.data);
                setSignedIn(true); // signedIn ficará true após o login bem-sucedido
            } catch (error) {
                console.error('Erro ao fazer cadastro:', error);
                setError('Erro ao fazer cadastro. Tente novamente verificando suas credenciais.');
            }
        } else {
            console.error('Credenciais não preenchidas.');
        }
        // Se todas as verificações passarem, pode enviar o formulário
        
        // Resetar os campos após o envio do formulário
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFormError('');
    };

    if (signedIn) {
        setTimeout(() => {
            alert('Cadastro bem-sucedido!');
            setFormSuccess('Cadastro realizado com sucesso!');
        }, 0);
        // return <Navigate to="./MasterPage.tsx" />;
    }


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
                    {formError && <p className="error-message">{formError}</p>}
                    {formSuccess && <p className="success-message">{formSuccess}</p>}
                    {error && <p>{error}</p>}
                    <div id='titleLogin'>
                        <label htmlFor='labeltitleLogin' id='labelLogin'>Crie sua Conta aqui!</label>
                    </div>
                    <div id='signUpNE'>
                        <div id='FNameResponsive'>
                            <label htmlFor="exInputEmail1" id='labelFName'>Primeiro Nome: </label>
                            <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="InputFName1" aria-describedby="fnameHelp" placeholder="Primeiro Nome"></input>
                        </div>
                        <div id='LNameResponsive'>
                            <label htmlFor="exInputEmail1" id='labelLName'>Sobre Nome: </label>
                            <input type="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="InputLName1" aria-describedby="lnameHelp" placeholder="Sobre Nome"></input>
                        </div>
                    </div>
                    <div className="form-groupE">
                        <label htmlFor="exInputEmail1" id='labelEmail'>Email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                        <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                    </div>
                    <div className="form-groupP">
                        <label htmlFor="exInputPassword1" id='labelPassword'>Senha: </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                    </div>
                    <div className="form-groupP">
                        <label htmlFor="exInputPassword1" id='labelCPassword'>Confirme a sua Senha: </label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="InputCPassword1" placeholder="Confirme a Senha"></input>
                    </div>
                    {/* <div className="form-groupT">
                        <label htmlFor='exInputTelephone1' id='labelTelephone'>Telefone:</label>
                        <input type='tel'></input>
                    </div> */}
                    {/* <div className="form-group form-check" id='checkgroup'>
                        <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar do Login</label>
                    </div> */}
                    <button type="button" className="btn btn-primary" id="btnEnter" onClick={handleSubmit}>Criar Conta</button>
                    <br></br>
                </form>
            </div>
        </div>
    </>
    );
}


export default SignUp