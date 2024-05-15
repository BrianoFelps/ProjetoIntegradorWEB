import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginButton from '../Components/LoginButton';
import LoginPageLogo from '../Components/LoginPageLogo';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

    const Login =  () => {

        const [loginEmAndamento, setLoginEmAndamento] = useState(false);
        const [loggedIn, setLoggedIn] = useState(false);
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [formError, setFormError] = useState('');
        const [formSuccess, setFormSuccess] = useState('');

        const navigate = useNavigate();

        const fazerLogin = async () => {
            
            setLoginEmAndamento(true);

                if(email && senha){
                try {
                    const response = await axios.post('http://localhost:8080/pages/Login', { email, senha });
                    console.log(response.data); // Lógica para redirecionar o usuário após o login bem-sucedido
                    setLoggedIn(true); // loggedIn ficará true após o login bem-sucedido

                }catch (error) {
                    console.error('Erro ao fazer login:', error);
                    setFormError('Erro ao fazer login. Tente novamente verificando suas credenciais.');
                }
                } else {
                    console.error('Email ou senha não preenchidos.');
                }

                setLoginEmAndamento(false);

                setEmail('');
                setSenha('');
                setFormError('')
        }

        // Se loggedIn for true, redireciona o usuário para a página desejada
        if (loggedIn) {
            setTimeout(() => {
                alert('Login bem-sucedido!');
                setFormSuccess('Login Feito');
                navigate('/homepage');
            }, 0);

            return setLoggedIn(false);
        }

        return( 
            <div id='AllPage'>
                    <LoginPageLogo></LoginPageLogo>
                    <div id='modal-container' className='modal-container'>
                        <div className='modal'>
                            <div className='title'></div>
                            <div className='messsage'>
                                {formSuccess && <p className="success-message">{formSuccess}</p>}
                                {formError && <p className="error-message">{formError}</p>}
                            </div>
                            <div className='button'></div>
                        </div>
                    </div>
                <div id='CentPage'>
                    <form className='insertData'>
                        <div id='titleLogin'>
                            <label htmlFor='labeltitleLogin' id='labelLogin'>Faça Login na sua Conta</label>
                        </div>
                        <div className="form-groupE">
                            <label htmlFor="exInputEmail1" id='labelEmail'>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                            <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                        </div>
                        <div className="form-groupP">
                            <label htmlFor="exInputPassword1" id='labelPassword'>Senha: </label>
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                        </div>
                        <div className="form-group form-check" id='checkgroup'>
                            <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar do Login</label>
                        </div>
                        <button type="button" className="btn btn-primary" id="btnEnter" onClick={fazerLogin} disabled={loginEmAndamento}>Entrar</button>
                        {/* <LoginButton onClick={fazerLogin}></LoginButton> */}
                    </form>
                </div>
            </div>
        );
    }


export default Login;