import React, { createContext, useReducer, useContext } from 'react';
import { favReducer, initialState } from '../reducers/favReducer';

const FavContext = createContext();

export const FavProvider = ({ children }) => {

    localStorage.removeItem('favourite');
    const [state, dispatch] = useReducer(favReducer, initialState);

    return (
        <FavContext.Provider value={{ state, dispatch }}>
            {children}
        </FavContext.Provider>
    );
};

export const useFavourite = () => {
    return useContext(FavContext);
};
