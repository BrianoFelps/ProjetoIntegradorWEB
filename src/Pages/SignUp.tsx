import '../Pages/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ModalErro from '../Components/ModalErro';
import DirectLink from '../Components/DirectLink';
import LoginPageLogo from '../Components/LoginPageLogo';

function SignUp(){

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

    const handleSubmit = async () => {

        setLoginEmAndamento(true);

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
        <div id='AllPage'>
                <LoginPageLogo></LoginPageLogo>
            <div id='CentPage'>
                <form className='insertData'>
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
                    <button type="button" className="btn btn-primary" id="btnEnter" onClick={handleSubmit} disabled={loginEmAndamento} >Criar Conta</button>
                    <DirectLink onClickDirect = {LinkLogin} textExample={simpletext} textLink={linktext}/>
                </form>
                <ModalErro show={showModalErro} onClose={closeModal} title='Ocorreu um erro ao fazer login.' message={formError}/>
            </div>
        </div>
    );
}


export default SignUp;