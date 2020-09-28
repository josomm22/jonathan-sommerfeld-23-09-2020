const UPDATE_CURRENT = 'UPDATE_CURRENT';
const TOGGLE_THEME = 'TOGGLE_THEME';
const TOGGLE_TEMP = 'TOGGLE_TEMP';

export const updateCurrentLocation = locationObj => ({
    type: UPDATE_CURRENT,
    payload: {
        locationObj
    }
});

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});

export const toggleTemp = () => ({
    type: TOGGLE_TEMP,
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
            return {
                ...state,
                theme: newTheme
            }
        }
        case TOGGLE_TEMP: {
            const { tempUnit } = state;
            const newTempUnit = tempUnit === 'C' ? 'F' : 'C';
            return {
                ...state,
                tempUnit: newTempUnit
            }
        }
        default:
            return state;
    }
}
