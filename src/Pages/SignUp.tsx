import '../Pages/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ModalErro from '../Components/ModalErro';
import DirectLink from '../Components/DirectLink';
import LoginPageLogo from '../Components/LoginPageLogo';
import { EQ_API_URL } from '../utils/EquilibriumApiConfig';

interface SignUpProps{
    setUser: (userName: string) => void;
}

function SignUp(props: SignUpProps){

    const [loginEmAndamento, setLoginEmAndamento] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [showModalErro, setShowModalErro] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        InserirClasseSignUp();

    }, []);

    function InserirClasseSignUp() {
        const html = document.documentElement
        html.classList.add("SignUp");
        html.classList.replace("Login", "SignUp");
    }


    const handleSubmit = async () => {

        setLoginEmAndamento(true);

        // Verifica se todos os campos foram preenchidos
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setSignedIn(false);
            setFormError('Por favor, preencha todos os campos.');
            setShowModalErro(true);
            setLoginEmAndamento(false);
            return;
        }

        // Verifica se o email é valido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSignedIn(false);
            setFormError('Por favor, insira um email válido.');
            setShowModalErro(true);
            setLoginEmAndamento(false);
            return;
        }

        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            setSignedIn(false);
            setFormError('As senhas não coincidem.');
            setShowModalErro(true);
            setLoginEmAndamento(false);
            return;
        }

        const nomeCompleto = firstName + ' ' + lastName;

        const telefone = 1;

        const isPremium = 1;

        const nome = 'Nome da página';

        const isFavorited = 0;

        
        if(nomeCompleto && email && password && telefone && isPremium){
            try{
                const response = await axios.post(`${EQ_API_URL}/pages/SignUp`, { name: nome, isFavorited: isFavorited, nome_inteiro: nomeCompleto, email: email, password: password, telefone: telefone, isPremium: isPremium});
                console.log(response.data);
                const response2 = await axios.post(`${EQ_API_URL}/pages/Login`, { email, password });
                const { nome_inteiro } = response2.data;
                const { id }= response2.data;
                localStorage.setItem('userId', id);
                localStorage.setItem('userName', nome_inteiro);
                 // Armazena o nome no localStorage do computador. há tambem o metodo de JWT porém, seria muita coisa no momento.
                console.log(nome_inteiro)
                 props.setUser(nomeCompleto);
                setSignedIn(true); // signedIn ficará true após o login bem-sucedido
            } catch (error) {
                console.error('Erro ao fazer cadastro:', error);
                setFormError('Erro ao fazer cadastro. Tente novamente verificando suas credenciais.');
                setShowModalErro(true);
            }
        } else {
            console.error('Credenciais não preenchidas.');
            setFormError('Credenciais não preenchidas.');
            setShowModalErro(true);
        }
        
        setLoginEmAndamento(false);
    };

    const LinkLogin = () => {
        navigate('/');
    }

    const closeModal = () => {
        setShowModalErro(false);
        setFormError('');
    };

    const simpletext = "Já tem uma conta?";
    const linktext = "Faça o Login!";

    useEffect(() => {
        if (signedIn) {
            setTimeout(() => {
                navigate('/homepage');
            }, 0);
        }
    }, [signedIn, navigate]);


    return(
        <div id='AllPageLoginSign'>
                <ModalErro show={showModalErro} onClose={closeModal} title='Ocorreu um erro ao fazer login.' message={formError}/>
                <LoginPageLogo></LoginPageLogo>    
            <div id='CentPage'>
                    <form className='SignUpBox'>
                        <div id='titleSignUp'>
                            <label htmlFor='labelTitleSignUp' id='labelSignUp'>Crie sua Conta aqui!</label>
                        </div>
                        <div id='signUpResponsiveFirstAndLastName'>
                            <div id='firstNameResponsive'>
                                <label htmlFor="exInputEmail1" id='labelFirstName'>Primeiro Nome: </label>
                                <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="InputFName1" aria-describedby="fnameHelp" placeholder="Primeiro Nome"></input>
                            </div>
                            <div id='lastNameResponsive'>
                                <label htmlFor="exInputEmail1" id='labelLastName'>Sobre Nome: </label>
                                <input type="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="InputLName1" aria-describedby="lnameHelp" placeholder="Sobre Nome"></input>
                            </div>
                        </div>
                        <div className="form-groupE" id='form-groupEmail'>
                            <label htmlFor="exInputEmail1" id='labelEmail'>Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                            <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                        </div>
                        <div className="form-groupP" id='form-groupPassword'>
                            <label htmlFor="exInputPassword1" id='labelPassword'>Senha: </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                        </div>
                        <div className="form-groupP" id='form-groupConfirmPassword'>
                            <label htmlFor="exInputPassword1" id='labelConfirmPassword'>Confirme a sua Senha: </label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="InputConfirmPassword1" placeholder="Confirme a Senha"></input>
                        </div>
                        <div className="form-group form-check" id='checkgroup'>
                            <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1" id='labelCheck'>Lembrar o login</label>
                        </div>
                        <div id='formbtnSignUp'>
                            <button type="button" className="btn btn-primary" id="btnEnter" onClick={handleSubmit} disabled={loginEmAndamento} >Criar Conta</button>
                        </div>
                        <DirectLink onClickDirect = {LinkLogin} textExample={simpletext} textLink={linktext}/>
                    </form>
            </div>
        </div>
    );
}


export default SignUp;