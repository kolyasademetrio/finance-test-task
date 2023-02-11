import React from 'react';

const FilterList = ({filters, setFilter}) => {
   return (
      <ul className="filters">
         {
            filters && filters.map(filter => {
               return (
                  <li key={filter} className="filters__item">
                     <button
                        type="button"
                        className="filters__btn"
                        onClick={() => setFilter(filter)}
                     >
                        {filter}
                     </button>
                  </li>
               );
            })
         }
      </ul>
   );
};

export default FilterList;