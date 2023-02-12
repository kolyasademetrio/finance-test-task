import React from 'react';
import {useParams} from "react-router-dom";
import Chart from './../containers/Chart';

const SinglePage = () => {
   const {id} = useParams();

   return (
      <>
         <h1 className="title">Price of "{id}"</h1>
         <div className="container">
            <div className="graph">
               <Chart id={id} />
            </div>
         </div>
      </>
   );
};

export default SinglePage;