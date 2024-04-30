// Plik serwisowy - pozwala na wspolprace z jakims serwisem
// User serwis obsluguje logowanie

import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (navigate) => {
    const userCredentials = await signInWithPopup(auth, googleProvider);
    if(userCredentials.user) navigate("/");
    console.log("Zalogowano");
    // Popup otwiera okienko w ktorym sie mozna zalogowac - latwiejszy bo zwraca
    // A nie trzeba sie z okienka przekierowywac
}

export const logout = async () => {
    await signOut(auth);
}

export const useUser = () => {
    // Zwraca null jezeli uzytkownik jest niezweryfikowany
    const [user, setUser] = useState(auth?.currentUser)
    useEffect(() => {
        auth.onAuthStateChanged( u => setUser(u));
    }, [])

    return user;
}

export const register = async (email, password, navigate) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Zarejestrowano użytkownika:', userCredential.user);
        navigate("/");
    } catch (error) {
        console.error('Błąd rejestracji:', error.message);
        throw error;
    }
}

export const loginWithEmail = async (email, password, navigate) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Zalogowano użytkownika:', userCredential.user);
        navigate("/");
    } catch (error) {
        console.error('Błąd logowania:', error.message);
        throw error;
    }
}