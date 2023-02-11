import {connect} from 'react-redux';
import Chart from '../components/Chart';

const mapStateToProps = (state, ownProps) => {
   const {history} = state.prices;
   const {id} = ownProps;

   const datesList = [];
   const pricesList = [];

   history.length && history.forEach(el => {
      const date = new Date(el[id].time);
      const formattedDate = date.toLocaleString('en-GB', {
         day: 'numeric',
         month: 'short',
         year: 'numeric',
         hour: 'numeric',
         minute: '2-digit'
       });

      datesList.push(formattedDate)
      pricesList.push(el[id].price)
   });

   return {
      datesList,
      pricesList,
   };
};

export default connect(mapStateToProps)(Chart);