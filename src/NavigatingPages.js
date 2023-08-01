// NavigatingPages.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import QueryUser from './QueryUser';
import FirstTime from './FirstTime';
import Regular from './Regular';
import ListOfWards from './ListOfWards';

function NavigatingPages() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/QueryUser" element={<QueryUser />} /> 
      <Route path="/FirstTime" element={<FirstTime />} />
      <Route path="/Regular" element={<Regular />} /> 
      <Route path="/ListOfWards" element={<ListOfWards />} /> 
    </Routes>
  );
}

export default NavigatingPages;
