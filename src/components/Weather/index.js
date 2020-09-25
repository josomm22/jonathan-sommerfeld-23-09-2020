import Weather from './Weather';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../redux/reducers/Favourites'

export default connect(state => ({
    ...state.Favourites,
    currentLocation: state.Preferences.currentLocation
}), {
    addFavourite,
    removeFavourite
}
)(Weather);