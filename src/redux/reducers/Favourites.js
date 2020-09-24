const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const addFavourite = newFavourite => ({
    type: ADD_FAVOURITE,
    payload: {
        newFavourite
    }
});
export const removeFavourite = deletedFavouriteID => ({
    type: REMOVE_FAVOURITE,
    payload: {
        deletedFavouriteID
    }
});


const initialState = {
    favourites: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVOURITE: {
            const { newFavourite } = action.payload;
            return {
                ...state,
                favourites: [...state.favourites, newFavourite]
            }
        }
        case REMOVE_FAVOURITE: {
            const { deletedFavouriteID } = action.payload;
            return {
                ...state,
                favourites: state.favourites.filter(obj => obj.id !== deletedFavouriteID)
            }
        }
        default:
            return state;
    }
}
