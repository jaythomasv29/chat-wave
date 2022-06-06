import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './routes/Home'

function App() {
  return (
    <>
      <Routes>
      <Route index element={<Home /> } />
      <Route path=":roomId" element={<Home /> } />
      
    </Routes>
    
    </>
  );
}

export default App;
