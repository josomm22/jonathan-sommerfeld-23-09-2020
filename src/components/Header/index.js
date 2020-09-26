import Header from './Header';
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/Preferences'

export default connect(state => ({
    theme: state.Preferences.theme
}), {
    toggleTheme
}
)(Header);