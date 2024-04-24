import { useState } from "react";
import HotelItem from "../Components/HotelItem";

const Home = ({hotels}) => {

    const [query, setQuery] = useState("");

    const hotelListHTML = hotels
        .filter(hotel => hotel.name.toLowerCase().includes(query.toLowerCase()))
        .map(hotel => (
            <HotelItem
                key={hotel.id}
                name={hotel.name}
                location={hotel.location}
                description={hotel.description}
                rating={hotel.rating}
                price={hotel.price}
            />
        ));

    return (
        <main className="grid hotel-cards">
            {hotelListHTML}
        </main>
    )
}

export default Home;
