import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logout, loginWithGoogle, loginWithEmail } from "../Firebase/userService";
import {useState} from "react";

const LoginPage = () => {

    const navigate = useNavigate(); // inicjalizujemy hook nawigacyjny

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Obsługa zmiany wartości pola email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Obsługa zmiany wartości pola hasła
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginGoogle = async () => {
        try {
            await loginWithGoogle(navigate); // przekazujemy funkcję navigate do funkcji login
        } catch (error) {
            console.error('Błąd logowania:', error);
        }
    };

    const handleLoginMail = async () => {
        try {
            await loginWithEmail(email, password, navigate); // przekazujemy funkcję navigate do funkcji login
        } catch (error) {
            console.error('Błąd logowania:', error);
        }
    };

    return (
        <div>
            {/*{userLoggedIn && ()}*/}
            <nav className="fixed-navigation">
                <img className="logo" src="../Assets/logo.svg" alt={"Here should be a logo"}/>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#">Home</a></li>
                    <li><a className="nav-link" href="#browse">Browse</a></li>
                    <li><a className="nav-link" href="#rent">Rent with us</a></li>
                    <NavLink to={'/register'}>
                        <button className="button primary">Sign up</button>
                    </NavLink>
                </ul>
                <button className="button primary hidden">Menu</button>
            </nav>

            <section className="loginBackground">
                <section className="loginSection">
                    <input id="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                    <input id="password" placeholder="Hasło" type="password" value={password} onChange={handlePasswordChange}/>
                    <div className="buttons">
                        <button className="buttonLogin" onClick={handleLoginGoogle}>Gmail</button>
                        <button className="buttonLogin" onClick={handleLoginMail}>Zaloguj się</button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default LoginPage;
