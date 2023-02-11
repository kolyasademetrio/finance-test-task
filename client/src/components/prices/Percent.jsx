import React, {useMemo} from 'react';
import Loader from '../Loader';

const calculateValue = (current, previous) => {
   // supposing they never have the same value ( just for the test task )
   const diff = Math.abs(current - previous);
   const percent = (diff/previous * 100).toFixed(2);
   const sign = current > previous ? '+' : '-';

   return {
      sign,
      percent,
   };
};

const Percent = ({current, previous}) => {
   const {sign, percent} = useMemo(() => calculateValue(current, previous), [current, previous]);

   if (!previous) {
      return (
         <Loader />
      );
   }

   return (
      <div className="prices__percent">
         {sign}{percent}%
      </div>
   );
};

export default Percent;