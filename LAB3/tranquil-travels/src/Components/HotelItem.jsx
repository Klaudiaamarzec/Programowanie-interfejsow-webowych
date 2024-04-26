
const HotelItem = ({name, location, description, rating, price, image}) => {

    console.log("Sciezka:", image)
    return (
        <div className="hotel-card" >
            <div className="card-image" style={{backgroundImage: `url(${image})` }}>
                <p className="chip">{location}</p>
            </div>
            <p className="text-middle">{name}</p>
            <p className="text-small">{description}</p>
            <div className="hotel-card-footer">
                <p>{rating}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default HotelItem;