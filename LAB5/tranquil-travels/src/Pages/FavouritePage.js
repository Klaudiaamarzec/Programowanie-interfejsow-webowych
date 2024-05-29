import React from 'react';
import { useFavourite } from '../contexts/Favourite';
import {NavLink} from "react-router-dom";
import {logout, useUser} from "../Firebase/userService";
//import Hotels from '../Components/Hotels';

const FavouritePage = () => {
    const { state: favouriteHotels } = useFavourite();
    const user = useUser()

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
                            <NavLink to="/favourites">
                                <button className="button primary">Favourites</button>
                            </NavLink>
                            <button className="button primary" onClick={logout}>Log out</button>
                        </div>
                    }
                </ul>
                <button className="button primary hidden">Menu</button>
            </nav>
            {/*<Hotels hotels={favouriteHotels} /> /!* Display favourite hotels *!/*/}
        </div>
    );
};

export default FavouritePage;
