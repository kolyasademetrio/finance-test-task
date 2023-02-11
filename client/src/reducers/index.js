import {combineReducers} from 'redux';
import pricesReducer from './prices';
import filterReducer from './filter';


export default combineReducers({
    prices: pricesReducer,
    filter: filterReducer,
});