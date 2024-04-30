import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react'
import HotelData from "./Components/hotelData";
import HotelPage from "./Pages/HotelPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EditPage from "./Pages/EditPage";
import { fetchHotelsFromFirestore } from "./Firebase/dataService";

function App() {

    // z danych tworzymy stan, który będziemy mogli sobie przekazywać
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            const hotelsData = await fetchHotelsFromFirestore();
            setHotels(hotelsData);
        };

        fetchHotels();
    }, []);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage hotels={hotels} />} />
              <Route path="/hotel/:hotelId" element={<HotelPage hotels={hotels} />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/edit/:hotelId" element={<EditPage hotels={hotels}/>} />
          </Routes>
      </Router>
  );
}

export default App;


