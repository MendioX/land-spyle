// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './layauts/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
        <BrowserRouter>
        
       <Routes>
      <Route
        path="/home"
        element={
          
          
              <Home/>
              
          
        }
      />

      </Routes>
      </BrowserRouter>
      
      
  );
}

export default App;
