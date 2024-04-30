import Hotels from './Hotels';
import {NavLink} from 'react-router-dom';
import {logout, useUser} from "../Firebase/userService";

const HomePage = ({hotels}) => {

    const user = useUser();

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
                        <button className="button primary" onClick={logout}>Log out</button>
                    }
                </ul>
                <button className="button primary hidden">Menu</button>
            </nav>
            <section id="hero" className="grid hero-section">
                <article className="hero-details">
                    <p className="title-large">Your tranquillity oasis awaits</p>
                    <p className="text-middle">TranquilTravels is designed to help you find a serene retreat for your
                        next
                        holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than
                        ever. </p>
                    <div className="hero-cards">
                        <div className="card-image">
                            <p className="chip">New hotels <img src="../Assets/Arrow.svg"/></p>
                        </div>
                        <div className="card-image">
                            <p className="chip">Best reviews <img src="../Assets/Arrow.svg"/></p>
                        </div>
                    </div>
                </article>
                <div className="hero-image-container"></div>
            </section>
            <section id="browse" className="browse-section">
                <p className="title-middle">Favorites offers</p>
                <input className="searchbar" placeholder="Search by hotel name, place etc."/>
                <Hotels hotels={hotels}/>

                <button className="button secondary">Find more <img src="../Assets/Arrow.svg"/></button>
            </section>

            <section id="rent" className="footer grid">
                <div className="card-image"></div>
                <article className="footer-details">
                    <p className="title-large">Rent with us!</p>
                    <p className="text-middle">If you’re a hotel or an apartament owner who’s looking to reach more
                        customers you can now rent your property with TranquilTravels. </p>
                    <button className="button secondary">Learn more <img src="../Assets/Arrow.svg"/></button>
                </article>
            </section>
        </div>
    );
}

export default HomePage;


