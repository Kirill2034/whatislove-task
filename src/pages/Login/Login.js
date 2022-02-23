import './Login.modules.css';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="Login">
            <div className="container">
                <div className="form">
                    <h2>Login Form</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" name="" placeholder="Username"/>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="" placeholder="Password"/>
                        </div>
                        <div className="inputBox">
                            <Link to="/home" className="submit">Login</Link>
                        </div>
                        <p>Forget Password ? <a href="#">Click Here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {Login}