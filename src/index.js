import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pantalla_calendario from './Pages/calendariomedico';
import Pro_citas_M from './Pages/pro_citas_M';
import reportWebVitals from './reportWebVitals';
import Registro from './Pages/registro';

import {BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/CALENDARIO' element={<Pantalla_calendario/>}/>
        <Route path='/Mcitas_proximas' element={<Pro_citas_M/>}/>
        <Route path='/Mregistro' element={<Registro/>}/>
      
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
