import {SET_PRICES_FILTER} from '../actions/types/prices-types';

const initialState = {
   filterBy: 'ALL',
};

const filterReducer = (state = initialState, action) => {
   switch(action.type){
      case SET_PRICES_FILTER:
         return {
            ...state,
            filterBy: action.payload,
         };
      default:
         return state;
   }
};

export default filterReducer;