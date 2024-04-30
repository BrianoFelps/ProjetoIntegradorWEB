import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){

    return(
        <>  
            <div className='insertData'>
                <form>
                    <div className="form-groupE">
                        <label htmlFor="exInputEmail1">Email: </label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Endereço de Email"></input>
                        <small id="emailHelp" className="form-text text-muted">Nunca Compartilharemos o seu Email com ninguém.</small>
                    </div>
                    <div className="form-groupP">
                        <label htmlFor="exInputPassword1">Senha: </label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Escreva a sua Senha"></input>
                    </div>
                    <div className="form-group form-check" id='checkgroup'>
                        <input type="checkbox" className="form-check-input" id="exCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">Lembrar do Login</label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btnEnter">Entrar</button>
                </form>
            </div>
        </>
    )
}


export default Login