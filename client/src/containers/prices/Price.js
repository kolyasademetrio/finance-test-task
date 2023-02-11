import {connect} from 'react-redux';
import Price from '../../components/prices/Price';

const mapStateToProps = (state, ownProps) => {
   const {id} = ownProps;
   const {items} = state.prices;
   let currentPrice = 0;

   items.length && items.forEach(({ticker, price}) => {
      if (ticker === id) {
         currentPrice = price;
      }
   });

   return {
      price: currentPrice,
      ticker: id,
   };
};

export default connect(mapStateToProps)(Price);