import './App.css';
import Home from "./Pages/Home"
import {Outlet, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { useState } from 'react';
// odczytujemy dane z pliku z danymi
import HotelData from "./hotelData";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />}>
//             <Route path="" element={<Home />} />
//         </Route>
//     )
// );

function App() {

    // z danych tworzymy stan, który będziemy mogli sobie przekazywać
    const [hotels, setHotels] = useState(HotelData);

  return (
      <div>
          <nav className="fixed-navigation">
              <img className="logo" src="../Assets/logo.svg" alt={"Here should be a logo"}/>
              <ul className="nav-links">
                  <li><a className="nav-link" href="#">Home</a></li>
                  <li><a className="nav-link" href="#browse">Browse</a></li>
                  <li><a className="nav-link" href="#rent">Rent with us</a></li>
                  <li><a className="nav-link" href="#">Sign up</a></li>
                  <button className="button primary">Log in</button>
              </ul>
              <button className="button primary hidden">Menu</button>
          </nav>
          <section id="hero" className="grid hero-section">
              <article className="hero-details">
                  <p className="title-large">Your tranquillity oasis awaits</p>
                  <p className="text-middle">TranquilTravels is designed to help you find a serene retreat for your next
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
              <Home hotels={hotels} />
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

export default App;


