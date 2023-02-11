import React from 'react';
import Price from '../../containers/prices/Price';

const Prices = ({prices}) => {
   return (
      <ul className="prices">
         {
            prices && prices.map(({ticker}) => (
               <Price key={ticker} id={ticker} />
            ))
         }
      </ul>
   );
};

export default Prices;