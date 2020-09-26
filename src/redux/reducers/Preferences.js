const UPDATE_CURRENT = 'UPDATE_CURRENT';
const TOGGLE_THEME = 'TOGGLE_THEME';

export const updateCurrentLocation = locationObj => ({
    type: UPDATE_CURRENT,
    payload: {
        locationObj
    }
});

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});


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
        case TOGGLE_THEME: {
            const { theme } = state;
            const newTheme = theme === 'light' ? 'dark' : 'light';
            console.log("newTheme", newTheme);

            return {
                ...state,
                theme: newTheme
            }
        }
        default:
            return state;
    }
}
