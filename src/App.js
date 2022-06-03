import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Navigation from './routes/Navigation'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigation /> }>
        <Route path="/chat"  element={<h1>Chat</h1> } />
      </Route>
    </Routes>
    </>
  );
}

export default App;
