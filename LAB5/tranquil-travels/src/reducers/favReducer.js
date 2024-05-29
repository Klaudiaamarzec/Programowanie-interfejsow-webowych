export const initialState = JSON.parse(localStorage.getItem('favourite')) || [];

export const favReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITE':
            const updatedFavAdd = [...state, action.item];
            localStorage.setItem('favourite', JSON.stringify(updatedFavAdd));
            return updatedFavAdd;

        case 'REMOVE_FROM_FAVOURITE':
            const updatedFavRemove = state.filter(item => item.id !== action.id);
            localStorage.setItem('favourite', JSON.stringify(updatedFavRemove));
            return updatedFavRemove;

        case 'CLEAR_FAVOURITE':
            localStorage.removeItem('favourite');
            return [];

        default:
            return state;
    }
};
