
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './layauts/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos"
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";

function App() {
  Aos.init();
  return (
    <>
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: '#12181A',
          color: '#F6F8F7',
        },
        success: {
          iconTheme: {
            primary: '#00B37E',
            secondary: '#F6F8F7',
          },
        },
      }}
    />
        <BrowserRouter>
        
       <Routes>
       <Route
        path="/"
        element={

              <Home/>    
          
        }
      />
      <Route
        path="/home"
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
      </>
  );
}

export default App;
