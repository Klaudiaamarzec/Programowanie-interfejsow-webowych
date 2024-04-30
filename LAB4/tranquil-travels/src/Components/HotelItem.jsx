
const HotelItem = ({name, location, description, rating, price, image, owner, currentUser}) => {

    // Sprawdzenie, czy zalogowany użytkownik jest właścicielem
    const isOwner = currentUser && currentUser.uid === owner;

    return (
        <div className={`hotel-card ${isOwner ? 'owner' : ''}`}>
            <div className="card-image" style={{backgroundImage: `url(${image})` }}>
                <p className="chip">{location}</p>
                {/*{isOwner && <button className="button primary">Edit</button>}*/}
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