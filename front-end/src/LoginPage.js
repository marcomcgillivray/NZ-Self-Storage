import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext); 



    const emailAddressHandler = e => {
        setEmail(e.target.value);
      };
    
    const passwordHandler = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Call handleLogin function from context
        try {
          await handleLogin(email, password);

          navigate('/');
        } catch (error) {
          console.error('Login error:', error);
          // Handle login error (e.g., show error message to the user)
        }
      };




    return (
        <>
            <div>
                <section id='login'>
                    <div className="login-modal">
                        <h2>
                            Log In To Your Account
                        </h2>
                        <p>
                            Don't have an account? <a href='/'>Sign Up Here</a>
                        </p>
                        <p>
                            <strong>For Testing:</strong> Try 'admin' as the username and 'password' as the password
                        </p>
                            <input
                            type="text"
                            value={email}
                            placeholder="Email Address"
                            onChange={emailAddressHandler}
                            >

                            </input>

                            <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={passwordHandler}
                            >

                            </input>
                        <div className="buttons">
                            <button
                            type="submit"
                            className="button-solid"
                            onClick={handleSubmit}>
                                Log In
                            </button>

                        </div>
                   </div>
                </section>
            </div>
        </>
    )
};

export default LoginPage;