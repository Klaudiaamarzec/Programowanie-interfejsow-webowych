import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {logout, useUser} from "../Firebase/userService";

const ChatPage = () => {
    const user = useUser();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        // Dodaj obsługę wysyłania wiadomości, np. do Reducera lub przez API
        // setMessages([...messages, { author: user.displayName, text: message }]);
        setMessage("");
    };

    return (
        <div>
            <nav className="fixed-navigation">
                <img className="logo" src="../Assets/logo.svg" alt={"Here should be a logo"}/>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#">Home</a></li>
                    <li><a className="nav-link" href="#browse">Browse</a></li>
                    <li><a className="nav-link" href="#rent">Rent with us</a></li>
                    {!!user ||
                        <div className="nav-links">
                            <NavLink to={'/register'}>
                                <button className="button primary">Sign up</button>
                            </NavLink>
                            <NavLink to={'/login'}>
                                <button className="button primary">Log in</button>
                            </NavLink>
                        </div>
                    }
                    {!!user &&
                        <div className="nav-links">
                            <NavLink to="/chat">
                                <li><a className="nav-link">Chat</a></li>
                            </NavLink>
                            <NavLink to="/favourites">
                                <button className="button primary">Favourites</button>
                            </NavLink>
                            <button className="button primary" onClick={logout}>Log out</button>
                        </div>
                    }
                </ul>
                <button className="button primary hidden">Menu</button>
            </nav>
            <section className="grid3 hero-section3">
                <div className="hero-details2">
                    <div className="chatHeader">
                        <p className="headChat">Wiadomości</p>
                        <input className="searchInput" type="text" value={message} placeholder="Search user..."/>
                    </div>
                    <div className="chats">
                        <div className="message">
                            <img src="../Assets/profile.png"/>
                            <div className="chat">
                                <p className="user">Adam Kowalski</p>
                                <p>Dzień dobry! Zapraszamy do wystawienia opinii ...</p>
                            </div>
                        </div>
                        <div className="message">
                            <img src="../Assets/profile.png"/>
                            <div className="chat">
                                <p className="user">Adam Kowalski</p>
                                <p>Cześć! Jak Ci minął pobyt w naszym hotelu?</p>
                            </div>
                        </div>
                        <div className="message">
                            <img src="../Assets/profile.png"/>
                            <div className="chat">
                                <p className="user">Jolanta Nowak</p>
                                <p>Dzień dobry, nie rozumiem problemu odnośnie ...</p>
                            </div>
                        </div>
                        <div className="message">
                            <img src="../Assets/profile.png"/>
                            <div className="chat">
                                <p className="user">Aleksandra Wojciech</p>
                                <p>Szanowny Panie, dziękujemy za pozytywną opinię</p>
                            </div>
                        </div>
                        <div className="message">
                            <img src="../Assets/profile.png"/>
                            <div className="chat">
                                <p className="user">Kacper Przykładny</p>
                                <p>Zapraszamy ponownie!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-container">
                    <div className="chat-content">

                    </div>
                    <div className="message-input">
                        <input
                            type="text"
                            placeholder="Napisz wiadomość..."
                            value={message}
                        />
                        <button className="primary button">Wyślij</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ChatPage;
