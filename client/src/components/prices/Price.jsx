import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ExchangeIcon from '../icons/ExchangeIcon';
import Percent from './Percent';

const Price = ({price, ticker}) => {

   const prevPriceRef = useRef();

   useEffect(() => {
      prevPriceRef.current = price;
   }, [price]);

   return (
      <li className="prices__item">
         <Link to={{pathname: `price/${ticker}`}} className="prices__link">
            <div className="prices__itemInner">
               <div className="prices__itemInfo">
                  <ExchangeIcon current={price} previous={prevPriceRef.current}/>
               </div>
               <div className="prices__itemInfo">
                  <div className="prices__title">
                     {ticker}
                  </div>
                  <div className="prices__price">
                     <div className="prices__priceValue">
                        {price}
                     </div>
                     <div className="prices__priceValue m-secondary">
                        {prevPriceRef.current}
                     </div>
                  </div>
               </div>
               <div className="prices__itemInfo m-secondary">
                  <Percent current={price} previous={prevPriceRef.current} />
               </div>
            </div>
         </Link>
      </li>
   );
};

export default Price;