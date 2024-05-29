import React from "react";
import HotelItem from "../Components/HotelItem";
import { useUser } from "../Firebase/userService";

const FavouriteHotels = ({ hotels }) => {
    const user = useUser();

    const favouriteHotelListHTML = hotels
        .filter(hotel => hotels.some(favHotel => favHotel.id === hotel.id))
        .map(hotel => (
            <div className="hotel-card" key={hotel.id}>
                <HotelItem
                    id={hotel.id}
                    name={hotel.name}
                    location={hotel.location}
                    description={hotel.description}
                    rating={hotel.rating}
                    price={hotel.price}
                    image={hotel.image}
                    owner={hotel.owner}
                    currentUser={user}
                />
            </div>
        ));

    return (
        <main className="grid hotel-cards">
            {favouriteHotelListHTML}
        </main>
    );
};

export default FavouriteHotels;
