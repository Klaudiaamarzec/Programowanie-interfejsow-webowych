import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import {logout, useUser} from "../Firebase/userService";

const HotelPage = ({ hotels }) => {

    const { hotelId } = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));
    const user = useUser()
    const isOwner = user && user.uid === hotel.owner;

    if (!hotel) {
        // Jeśli hotel nie został przekazany, zwróć nowy element z informacją "Hotel not found"
        return (
            <div className="hotel-not-found"> {/* Dodanie klasy hotel-not-found */}
                Hotel not found
            </div>
        );
    }

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

            <section className="hotel-header">{hotel.name}</section>

            <section id="hero" className="grid2 hero-section2">
                <div className="hero-image-container2" style={{backgroundImage: hotel.image}}></div>
                <article className="new-hero-details">
                    <p><b>Location: </b>{hotel.location}</p>
                    <p><b>Local category: </b>{hotel.rating}</p>
                    <p><b>Price: </b>{hotel.price}</p>
                    <p><b>Description:</b></p>
                    <p className="description">{hotel.description}</p>
                    {isOwner &&
                        <NavLink to={`/edit/${hotel.id}`}>
                            <button className="editbutton primary">Edit</button>
                        </NavLink>
                    }
                </article>
            </section>
        </div>

    );
};

export default HotelPage;