import {
   SET_PRICES,
   SET_PRICES_HISTORY,
} from './types/prices-types';


export const setAllPrices = prices => ({
   type: SET_PRICES,
   payload: prices
});

export const setPricesHistory = prices => {
   const result = {};
   prices.forEach(({ticker, price, lastTradeTime}) => {
      result[ticker] = {
         id: ticker,
         ticker: ticker,
         price: price,
         time: lastTradeTime
      }
   });

   return {
      type: SET_PRICES_HISTORY,
      payload: result
   };
};