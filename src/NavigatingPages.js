// NavigatingPages.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import QueryUser from './QueryUser';
import FirstTime from './FirstTime';
import Regular from './Regular';
import ListOfWardsFirstTime from './ListOfWardsFirstTime';
import RecieptFirstTime from './RecieptFirstTime'
import ListOfWards from './ListOfWards'
import Receipt from './Receipt'

function NavigatingPages() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/QueryUser" element={<QueryUser />} /> 
      <Route path="/FirstTime" element={<FirstTime />} />
      <Route path="/Regular" element={<Regular />} /> 
      <Route path="/ListOfWardsFirstTime" element={<ListOfWardsFirstTime />} />
      <Route path="/ListOfWards" element={<ListOfWards />} />
      <Route path="/RecieptFirstTime" element={<RecieptFirstTime />} /> 
      <Route path="/Receipt" element={<Receipt />} />
    </Routes>
  );
}

export default NavigatingPages;
