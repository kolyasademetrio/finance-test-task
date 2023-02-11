import {connect} from 'react-redux';
import {setAllPrices, setPricesHistory} from '../actions/prices';
import App from '../App';

const mapDispatchToProps = dispatch => ({
   setAllPrices: prices => dispatch(setAllPrices(prices)),
   setPricesHistory: prices => dispatch(setPricesHistory(prices)),
});

export default connect(null, mapDispatchToProps)(App);