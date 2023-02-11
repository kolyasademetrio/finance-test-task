import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';
import socket from './socket';

const App = ({setAllPrices, setPricesHistory}) => {
   useEffect(() => {
      socket.on('ticker', (response) => {
         const res = Array.isArray(response) ? response : [response];
         setAllPrices(res);
         setPricesHistory(res);
      });
   }, []);

   return (
      <main className="App">
         <section className="section">
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/price/:id" element={<SinglePage />} />
            </Routes>
         </section>
      </main>
   );
}

export default App;
