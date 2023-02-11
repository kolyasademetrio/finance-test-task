import {
   SET_PRICES,
   SET_PRICES_HISTORY
} from '../actions/types/prices-types';

const initialState = {
   items: [],
   history: [],
};

const pricesReducer = (state = initialState, action) => {
   switch(action.type){
      case SET_PRICES:
         return {
            ...state,
            items: action.payload,
         };
      case SET_PRICES_HISTORY:
         return {
            ...state,
            history: [
               ...state.history,
               action.payload
            ],
         };
      default:
         return state;
   }
}

export default pricesReducer;