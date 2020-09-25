import WeatherCard from './WeatherCard';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../redux/reducers/Preferences'

export default connect(state => ({
}), {
    updateCurrentLocation
}
)(WeatherCard);