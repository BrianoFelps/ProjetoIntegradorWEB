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

        const [loginEmAndamento, setLoginEmAndamento] = useState(false); // determina quando o login está em andamento ou não, pois poderia causar problemas.
        const [loggedIn, setLoggedIn] = useState(false); //para direcionar o usuario da forma correta sem bugs.
        const [email, setEmail] = useState(''); //usado para inserir o valor do email, podendo fazer requisiçoes ao BD e outras coisas.
        const [password, setPassword] = useState(''); //usado para inserir o valor da senha, podendo fazer requisiçoes ao BD e outras coisas.
        const [rememberMe, setRememberMe] = useState (false); //função do lembrar do login
        const [formError, setFormError] = useState(''); // mensagem do modal
        const [showModalErro, setShowModalErro] = useState(false); //pra mostrar o modal de erro na hora que você quiser.
        const [logoVisible, setLogoVisible] = useState(true); //logo visivel ou não na hora de aparecer o modal

        const navigate = useNavigate();

        useEffect(() => {

            InserirClasseLogin();
            console.log(`Login em andamento, valor da const API: ${EQ_API_URL}`);

            const storedEmail = localStorage.getItem('rememberedEmail');
            const storedPassword = localStorage.getItem('rememberedPassword');
            if (storedEmail && storedPassword) {
                setEmail(storedEmail);
                setPassword(storedPassword);
                setRememberMe(true);
            }
        }, []);
    
        function InserirClasseLogin() {
            const html = document.documentElement;
            html.classList.add("Login");
            html.classList.replace("SignUp", "Login");
        }

        const fazerLogin = async () => {
            
            setLoginEmAndamento(true);
            
                if(email && password){
                try {
                    const response = await axios.post(`${EQ_API_URL}/pages/Login`, { email, password });
                    console.log(response.data); // Lógica para redirecionar o usuário após o login bem-sucedido
                    const { nome } = response.data;
                    localStorage.setItem('userName', nome); // Armazena o nome no localStorage do computador. há tambem o metodo de JWT porém, seria muita coisa no momento.
                    if (rememberMe){
                        localStorage.setItem('rememberedEmail', email);
                        localStorage.setItem('rememberedPassword', password);
                    } else{
                        localStorage.removeItem('rememberedEmail');
                        localStorage.removeItem('rememberedPassword');    
                    }

                    props.setUser(nome);
                    setLoggedIn(true); // loggedIn ficará true após o login bem-sucedido
                }catch (error) {
                    console.error('Erro ao fazer login:', error);
                    setFormError('Erro ao fazer login. Tente novamente verificando suas credenciais.');
                    setShowModalErro(true);
                    setLogoVisible(false); // vai sumir com o logo apenas quando aparecer o Modal.
                }
                } else {
                    console.error('Email ou senha não preenchidos.');
                    setFormError('Email ou senha não preenchidos.');
                    setShowModalErro(true);
                    setLogoVisible(false);
                }

                setLoginEmAndamento(false);
        };

        const closeModal = () => {
            setShowModalErro(false);
            setFormError('');
            setLogoVisible(true);
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
                    {logoVisible && <LoginPageLogo/>}
                <div id='CentPage'>
                    <form className='LoginBox'>
                        <div id='titleLogin'>
                            <label htmlFor='labeltitleLogin' id='labelLogin'>Faça Login na sua Conta</label>
                        </div>
                        <div className="form-groupE" id='form-groupEmail'>
                            <label htmlFor="exInputEmail1" id='labelEmail'>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                            <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                        </div>
                        <div className="form-groupP" id='form-groupPassword'>
                            <label htmlFor="exInputPassword1" id='labelPassword'>Senha: </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                        </div>
                        <div className="form-group form-check" id='checkgroup'>
                            <input type="checkbox" className="form-check-input" id="exCheck1" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}></input>
                            <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar do Login</label>
                        </div>
                        <div id='formbtnLogin'>
                            <button type="button" className="btn btn-primary" id="btnEnter" onClick={fazerLogin} disabled={loginEmAndamento}>Entrar</button>
                        </div>
                        <LinkSignUp onClickDirect = {LinkSign} textExample={simpletext} textLink={linktext}/>
                        <ModalErro show={showModalErro} onClose={closeModal} title='Ocorreu um erro ao fazer login.' message={formError}/>
                    </form>
                </div>
            </div>
        );
    }


export default Login;