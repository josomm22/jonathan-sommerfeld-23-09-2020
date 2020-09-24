import Weather from './Weather';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../redux/reducers/favourites'

export default connect(state => ({
    ...state.Favourites
}), {
    addFavourite,
    removeFavourite
}
)(Weather);