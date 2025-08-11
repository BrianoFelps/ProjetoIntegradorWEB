import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginButton from '../Components/LoginButton';
import LoginPageLogo from '../Components/LoginPageLogo';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalErro from '../Components/ModalErro';
import LinkSignUp from '../Components/DirectLink';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

        // Definindo a interface para as props
    interface LoginProps {
        setUser: (userName: string) => void;
    }

    function Login (props: LoginProps){

        const [loginEmAndamento, setLoginEmAndamento] = useState(false);
        const [loggedIn, setLoggedIn] = useState(false);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [formError, setFormError] = useState('');
        const [showModalErro, setShowModalErro] = useState(false);

        const navigate = useNavigate();

        useEffect(() => {

            InserirClasseLogin();
            console.log(`Login em andamento, valor da const API: ${EQ_API_URL}`)
    
        }, []);
    
        function InserirClasseLogin() {
            const html = document.documentElement
            html.classList.add("Login");
            html.classList.replace("SignUp", "Login");
        }

        const fazerLogin = async () => {
            
            setLoginEmAndamento(true);
            
                if(email && password){
                try {
                    const response = await axios.post(`${EQ_API_URL}/pages/Login`, { email, password });

                    const response2 = await axios.get(`${EQ_API_URL}/pages/User/${response.data.id}`)
                    console.log(response2.data); // Lógica para redirecionar o usuário após o login bem-sucedido
                    const { usuario } = response2.data;
                    const { id } = response2.data;
                    
                    localStorage.setItem('userId', id);
                    localStorage.setItem('userName', usuario); // Armazena o nome no localStorage do computador. há tambem o metodo de JWT porém, seria muita coisa no momento.
                    console.log(`Nome de usuário: ${usuario}. Nome de usuário via localstorage: ${localStorage.getItem('userName')}`)
                    props.setUser(usuario);
                    setLoggedIn(true); // loggedIn ficará true após o login bem-sucedido
                }catch (error) {
                    console.error('Erro ao fazer login:', error);
                    setFormError('Erro ao fazer login. Tente novamente verificando suas credenciais.');
                    setShowModalErro(true);
                }
                } else {
                    console.error('Email ou senha não preenchidos.');
                    setFormError('Email ou senha não preenchidos.');
                    setShowModalErro(true);
                }

                setLoginEmAndamento(false);
        };

        const closeModal = () => {
            setShowModalErro(false);
            setFormError('');
        };

        const LinkSign = () => {
            navigate('/SignUp');
        }

        const simpletext = "Não possui uma conta?";
        const linktext = "Crie uma aqui!";

            // Se loggedIn for true, redireciona o usuário para a página desejada
        useEffect(() => {
            if (loggedIn) {
                setTimeout(() => {
                    navigate('/homepage');
                    setLoggedIn(false);
                }, 0);
            }
        }, [loggedIn, navigate]);

        return( 
            <div id='AllPageLoginSign'>
                    <ModalErro show={showModalErro} onClose={closeModal} title='Ocorreu um erro ao fazer login.' message={formError}/>
                    <LoginPageLogo></LoginPageLogo>
                <div id='CentPage'>
                    <form className='LoginBox'>
                        <div id='titleLogin'>
                            <label htmlFor='labeltitleLogin' id='labelLogin'>Faça Login na sua Conta</label>
                        </div>
                        <div className="form-groupE" id='form-groupEmail'>
                            <label htmlFor="InputEmail1" id='labelEmail'>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                            <small id="emailHelp" className="form-text text-muted text-center">Nunca Compartilharemos o seu Email com ninguém.</small>
                        </div>
                        <div className="form-groupP" id='form-groupPassword'>
                            <label htmlFor="InputPassword1" id='labelPassword'>Senha: </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                        </div>
                        <div className="form-group form-check" id='checkgroup'>
                            <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                            <label className="form-check-label" htmlFor="exCheck1" id='labelCheck'>Lembrar do Login</label>
                        </div>
                        <div id='formbtnLogin'>
                            <button type="button" className="btn" id="btnEnter" onClick={fazerLogin} disabled={loginEmAndamento}>Entrar</button>
                        </div>
                        <LinkSignUp onClickDirect = {LinkSign} textExample={simpletext} textLink={linktext}/>
                    </form>
                </div>
            </div>
        );
    }


export default Login;