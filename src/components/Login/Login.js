import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase'
function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass)
        .then(auth => {
            // redirect to home page
            history.push("/");
        })
        .catch(e =>{ alert(e.message)
        setPass('');
        setEmail('');
        });
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
        .then(auth => {
            // created a user & loggin in & redirect to home page
            history.push("/");
        })
        .catch(e => {alert(e.message)
            setPass('');
            setEmail('');
        });
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                className="login-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} 
                    onChange ={(e) => setEmail(e.target.value)}
                    type="email" />
                    <h5>Password</h5>
                    <input value={pass} 
                    onChange={e => setPass(e.target.value)}
                    type="password" />
                    <button 
                    onClick={login}
                    type="submit" className="signin-btn">Continue</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
Need help?</p>
                </form>
            </div>
            
                <div className="middle">
                    <h5>New to Amazon?</h5></div>

            <button 
            onClick={register}
            className="register-btn">Create your Amazon account</button>

        </div>
    )
}

export default Login
