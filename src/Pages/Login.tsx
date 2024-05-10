import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from '../Components/LoginButton';
import LoginPageLogo from '../Components/LoginPageLogo';
// import React, { useState } from 'react';
// import axios from 'axios';

function Login(){

    const oi = () => {
        alert('aopa fi')
    }

    // const Login: React.FC = () => {
    //     const [username, setUsername] = useState('');
    //     const [password, setPassword] = useState('');

    // const handleLogin = async () => {
    // try {
    //   const response = await axios.post('/login', { username, password });
    //   console.log(response.data); // Lógica para redirecionar o usuário após o login bem-sucedido
    // } catch (error) {
    //   console.error('Erro ao fazer login:', error);
    // }
    // }

    return( 
        <div id='AllPage'>
                <LoginPageLogo onClick={oi}></LoginPageLogo>
            <div id='CentPage'>
                <form className='insertData'>
                    <div id='titleLogin'>
                        <label htmlFor='labeltitleLogin' id='labelLogin'>Faça Login na sua Conta</label>
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
                    <div className="form-group form-check" id='checkgroup'>
                        <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar do Login</label>
                    </div>
                    <LoginButton onClick={oi}></LoginButton>
                </form>
            </div>
        </div>
    )
}


export default Login