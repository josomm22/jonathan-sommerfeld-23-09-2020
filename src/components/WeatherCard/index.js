import WeatherCard from './WeatherCard';
import { connect } from 'react-redux';


// export default WeatherCard;

export default connect(state => ({
    ...state.Favourites,
    theme: state.Preferences.theme
}), {
    
}
)(WeatherCard);
