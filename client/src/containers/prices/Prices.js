import {connect} from 'react-redux';
import Prices from '../../components/prices/Prices';

function filterPrices(prices, filterBy){
   switch(filterBy){
       case 'ALL':
           return prices;
       default:
           return prices && prices.filter(price => price.ticker === filterBy);
   }
}

const mapStateToProps = state => {
   const {items} = state.prices;
   const {filterBy} = state.filter;

   return {
      prices: filterPrices(items, filterBy),
   };
};

export default connect(mapStateToProps)(Prices);