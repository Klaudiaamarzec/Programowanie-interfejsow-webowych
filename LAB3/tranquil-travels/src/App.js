import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import HotelData from "./Components/hotelData";
import HotelPage from "./Pages/HotelPage";
import HomePage from "./Pages/HomePage";

function App() {

    // z danych tworzymy stan, który będziemy mogli sobie przekazywać
    const [hotels, setHotels] = useState(HotelData);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage hotels={hotels} />} />
              <Route path="/hotel/:hotelId" element={<HotelPage hotels={hotels} />} />
          </Routes>
      </Router>
  );
}

export default App;


