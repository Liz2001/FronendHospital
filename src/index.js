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
import Historial from './Pages/historias';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ConsultasP from './Pages/consultasP';
import HistConsultas from './Pages/historialconsultas';

import Login from './Pages/Pacientelogin.page';
import Register from './Pages/Paciente.register.page';
import PaginasMedico from './Pages/paginasMedico.page';

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
        <Route path='/' element={<Inicio/>}/>
        <Route path='/MHistorial' element={<Historial/>}/>
        <Route path='/Mconsultas' element={<ConsultasP/>}/>
        <Route path="/loginPaciente" element={<Login/>}/>
        <Route path='/ConHist' element={<HistConsultas/>}/>
        <Route path="/Pregister" element={<Register/>}/>
        <Route path="/medico/*" element={<PaginasMedico/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
