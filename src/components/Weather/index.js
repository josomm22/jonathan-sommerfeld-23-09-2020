import Weather from './Weather';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../redux/reducers/Favourites';
import { updateCurrentLocation } from '../../redux/reducers/Preferences'

export default connect(state => ({
    ...state.Favourites,
    currentLocation: state.Preferences.currentLocation
}), {
    addFavourite,
    removeFavourite,
    updateCurrentLocation,
}
)(Weather);