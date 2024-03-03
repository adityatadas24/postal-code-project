import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PincodeEntry from './components/PincodeEntry';
import PincodeDetails from './components/PincodeDetails';
import './App.css'
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<PincodeEntry />} />
        <Route path="/detail/:pincode" element={<PincodeDetails />} />
      </Routes>
   
  );
}

export default App;