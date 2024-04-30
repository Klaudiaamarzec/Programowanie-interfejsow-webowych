import {firestore} from "./Firebase";
import {collection, getDocs, updateDoc, doc} from "firebase/firestore";

// Definiujesz stałą hotelsCollection lokalnie w module dataService.js
const hotelsCollection = collection(firestore, "hotels");

export const fetchHotelsFromFirestore = async () => {
    const hotelsSnapshot = await getDocs(hotelsCollection);
    return hotelsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
};

export const updateHotel = async (hotelId, updatedHotelData) => {
    try {
        // Uzyskaj referencję do dokumentu hotelu w bazie danych
        const hotelRef = doc(hotelsCollection, `hotel${hotelId}`);
        console.log(hotelRef)

        // Wykonaj aktualizację danych hotelu w bazie danych
        await updateDoc(hotelRef, updatedHotelData);

        console.log("Dane hotelu zostały zaktualizowane pomyślnie.");
    } catch (error) {
        console.error("Błąd podczas aktualizowania danych hotelu:", error);
        throw error; // Rzuć błąd, aby obsłużyć go w wyższej warstwie aplikacji
    }
};