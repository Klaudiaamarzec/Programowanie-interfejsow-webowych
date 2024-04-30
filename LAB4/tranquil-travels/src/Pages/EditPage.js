import React, {useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {logout, useUser} from "../Firebase/userService";
import { updateHotel } from "../Firebase/dataService";

const EditPage = ({ hotels }) => {

    const { hotelId } = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));
    const user = useUser()
    const navigate = useNavigate()

    const [editedHotel, setEditedHotel] = useState({ ...hotel });

    const handleSubmit = async () => {
        try {
            await updateHotel(hotelId, editedHotel); // Aktualizuj hotel w bazie danych Firebase
            console.log("Zaktualizowano dane w hotelu:", editedHotel);
            navigate(`/hotel/${hotel.id}`); // Przekieruj użytkownika z powrotem do strony szczegółów hotelu
        } catch (error) {
            console.error("Błąd podczas aktualizowania danych w bazie danych:", error);
        }
    };

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
                </article>
            </section>

            <div className="overlay"></div>

            <dialog open id="myModal">
                <div className="header-details">
                    <p className="edit-header">Edit</p>
                </div>
                <section className="grid2">
                    <article className="edit-details">
                        <p>You're editing the <b>{hotel.name}</b> hotel</p>
                        <div className="details">
                            <p>Hotel name</p>
                            <input className="border"
                                type="text"
                                value={editedHotel.name}
                                onChange={(e) => setEditedHotel({ ...editedHotel, name: e.target.value })}>
                            </input>
                        </div>
                        <div className="detail">
                            <p>Description</p>
                            <input className="border"
                                   type="text"
                                   value={editedHotel.description}
                                   onChange={(e) => setEditedHotel({...editedHotel, description: e.target.value})}>
                            </input>
                        </div>
                        <div className="more-details">
                            <div className="details">
                                <p>Location:</p>
                                <input className="small-border"
                                       type="text"
                                       value={editedHotel.location}
                                       onChange={(e) => setEditedHotel({...editedHotel, location: e.target.value})}>
                                </input>
                            </div>
                            <div className="details">
                                <p>Price:</p>
                                <input className="small-border"
                                       type="text"
                                       value={editedHotel.price}
                                       onChange={(e) => setEditedHotel({...editedHotel, price: e.target.value})}>
                                </input>
                            </div>
                            <div className="details">
                                <p>Local category:</p>
                                <input className="small-border add"
                                       type="text"
                                       value={editedHotel.rating}
                                       onChange={(e) => setEditedHotel({...editedHotel, rating: e.target.value})}>
                                </input>
                            </div>
                        </div>
                        <div className="edit-buttons">
                            <NavLink to={`/hotel/${hotel.id}`}>
                                <p>Cancel</p>
                            </NavLink>
                            <button className="button primary" onClick={handleSubmit}>Edit</button>
                        </div>
                    </article>
                </section>
            </dialog>

        </div>

    );
};

export default EditPage;