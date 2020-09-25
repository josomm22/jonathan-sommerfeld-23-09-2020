import Favourites from './Favourites';
import { connect } from 'react-redux';


export default connect(state => ({
    ...state.Favourites
}), {}
)(Favourites);
