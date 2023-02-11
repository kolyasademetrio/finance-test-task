import {connect} from 'react-redux';
import {setFilter} from '../../actions/filter';
import FilterList from '../../components/prices/FilterList';

const mapStateToProps = state => {
   const filtersList = state.prices.items.map(item => item.ticker);
   filtersList.length && filtersList.unshift('ALL');

   return {
      filters: filtersList,
   };
};

const mapDispatchToProps = dispatch => ({
   setFilter: prices => dispatch(setFilter(prices)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);