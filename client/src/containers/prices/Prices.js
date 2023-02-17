import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import Prices from '../../components/prices/Prices';

const pricesSelector = state => state.prices.items;
const pricesFilterSelector = state => state.filter.filterBy;

const pricesFiltered = createSelector([pricesSelector, pricesFilterSelector], (prices, filterBy) => {
   switch(filterBy){
      case 'ALL':
          return prices;
      default:
          return prices && prices.filter(price => price.ticker === filterBy);
  }
});

const mapStateToProps = state => {
   return {
      prices: pricesFiltered(state),
   };
};

export default connect(mapStateToProps)(Prices);