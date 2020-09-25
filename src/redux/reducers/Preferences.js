const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
const UPDATE_CURRENT = 'UPDATE_CURRENT';

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

export const updateCurrentLocation = locationObj => ({
    type: UPDATE_CURRENT,
    payload: {
        locationObj
    }
})


const initialState = {
    currentLocation: {},
    theme: "light",
    tempUnit: "C"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT: {
            const { locationObj } = action.payload;
            return {
                ...state,
                currentLocation: locationObj,
            }
        }
        default:
            return state;
    }
}
