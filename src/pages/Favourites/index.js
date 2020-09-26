import Favourites from './Favourites';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../redux/reducers/Preferences'



export default connect(state => ({
    ...state.Favourites,
    theme: state.Preferences.theme
}), {
    updateCurrentLocation
}
)(Favourites);
