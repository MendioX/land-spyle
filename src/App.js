
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './layauts/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos"
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  return (
    
        <BrowserRouter>
        
       <Routes>
      <Route
        path="/spyle-home"
        element={
          
          
              <Home/>
              
          
        }
      />
        <Route
        path="/spyle"
        element={
          
          
              <Home/>
              
          
        }
      />

      </Routes>
      </BrowserRouter>
      
      
  );
}

export default App;
