import { useState } from "react";
import HotelItem from "../Components/HotelItem";
import {Link, NavLink} from 'react-router-dom';
import { useUser } from "../Firebase/userService";

const Hotels = ({hotels}) => {

    const [query, setQuery] = useState("");
    const user = useUser()

    const hotelListHTML = hotels
        .filter(hotel => hotel.name.toLowerCase().includes(query.toLowerCase()))
        .map(hotel => (
            <div className="hotel-card" key={hotel.id}>
                <NavLink to={`/hotel/${hotel.id}`}>
                    <HotelItem
                        id={hotel.id}
                        name={hotel.name}
                        location={hotel.location}
                        description={hotel.description}
                        rating={hotel.rating}
                        price={hotel.price}
                        //backgroundImage={`url(./Assets/cards${hotel.id}.jpg)`}
                        image={hotel.image}
                        owner={hotel.owner}
                        currentUser={user}
                    />
                </NavLink>
            </div>
        ));

    return (
        <main className="grid hotel-cards">
            {hotelListHTML}
        </main>
    )
}

export default Hotels;
