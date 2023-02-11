import React from 'react';
import Prices from '../containers/prices/Prices';
import FilterList from '../containers/prices/FilterList';

const HomePage = () => {
   return (
      <>
         <h1 className="title">Prices</h1>
         <div className="container">
            <FilterList />
         </div>
         <div className="container">
            <Prices />
         </div>
      </>
   );
};

export default HomePage;