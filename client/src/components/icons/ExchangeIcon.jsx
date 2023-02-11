import React from 'react';
import ArrowTopIcon from '../icons/ArrowTopIcon';
import ArrowBottomIcon from '../icons/ArrowBottomIcon';

const ExchangeIcon = ({current, previous}) => {
   // supposing they never have the same value ( just for the test task )
   const status = (current > previous) ? 'top' : 'bottom';

   const classNameModificator = (status === 'top') ? 'm-primary' : 'm-secondary';

   const icon = (status === 'top') ? <ArrowTopIcon /> : <ArrowBottomIcon />

   return (
      <div className={`prices__badge ${classNameModificator}`}>
         {icon}
      </div>
   );
};

export default ExchangeIcon;