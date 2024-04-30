import {NavLink, useNavigate } from "react-router-dom";
import {useState } from "react";
import { register } from "../Firebase/userService";

const RegisterPage = () => {

    const navigate = useNavigate();

    // Stany przechowujące wartości wprowadzone przez użytkownika
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

    // Obsługa zdarzenia wysłania formularza
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password, navigate);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <nav className="fixed-navigation">
                <img className="logo" src="../Assets/logo.svg" alt={"Here should be a logo"}/>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#">Home</a></li>
                    <li><a className="nav-link" href="#browse">Browse</a></li>
                    <li><a className="nav-link" href="#rent">Rent with us</a></li>
                    <NavLink to={'/login'}>
                        <button className="button primary">Log in</button>
                    </NavLink>
                </ul>
                <button className="button primary hidden">Menu</button>
            </nav>

            <section className="loginBackground">
                <section className="loginSection">
                    <form onSubmit={handleSubmit} >
                        <input type="email"
                               id="mail"
                               placeholder="Email"
                               value={email}
                               onChange={handleEmailChange}
                               required
                        />
                        <input type="password"
                               id="password"
                               placeholder="Hasło"
                               value={password}
                               onChange={handlePasswordChange}
                               required
                        />
                        <button className="buttonLogin" type="submit">Zarejestruj się</button>
                    </form>

                    <section className="errorSection">
                        {error && <p>{error}</p>}
                    </section>
                </section>
            </section>
        </div>
    );
};

export default RegisterPage;
