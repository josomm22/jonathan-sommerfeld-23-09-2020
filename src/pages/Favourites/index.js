import Favourites from './Favourites';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../redux/reducers/Preferences'



export default connect(state => ({
    ...state.Favourites
}), {
    updateCurrentLocation
}
)(Favourites);
