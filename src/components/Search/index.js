import Search from './Search';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../redux/reducers/Preferences'

export default connect(state => ({
}), {
    updateCurrentLocation
}
)(Search);