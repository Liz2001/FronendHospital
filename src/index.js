import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pantalla_calendario from './Pages/calendariomedico';
import Lo_medico from './Pages/login_medico';
import Perfil_medico from './Pages/perfil_medico';
import Pm_pcliente from './Pages/pm_cliente';
import Pro_citas_M from './Pages/pro_citas_M';
import reportWebVitals from './reportWebVitals';
import Registro from './Pages/registro';
import Home from './Pages/home';
import Inicio from './Pages/inicio';

import {BrowserRouter, Routes, Route } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/CALENDARIO' element={<Pantalla_calendario/>}/>
        <Route path='/login' element={<Lo_medico/>}/>
        <Route path='/Mperfil' element={<Perfil_medico/>}/>
        <Route path='/Mcitas_proximas' element={<Pro_citas_M/>}/>
        <Route path='/Mcitas_proximas/info' element={<Pm_pcliente/>}/>
        <Route path='/Mregistro' element={<Registro/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
      
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
