import Weather from './Weather';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../redux/reducers/Favourites';
import { updateCurrentLocation, toggleTemp } from '../../redux/reducers/Preferences'

export default connect(state => ({
    ...state.Favourites,
    currentLocation: state.Preferences.currentLocation,
    tempUnit: state.Preferences.tempUnit
}), {
    addFavourite,
    removeFavourite,
    updateCurrentLocation,
    toggleTemp
}
)(Weather);