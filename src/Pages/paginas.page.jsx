import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login.page";
import Register from "./Paciente.register.page";
import CitasProximas from "./CitasProximas";
const Paginas = () => {
  return (
    <div>
      <Routes>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/Paciente.register/" element={<Register/>}/>
        <Route path="/CitasProximas/" element={<CitasProximas/>}/>
        <Route path="/*" element={<Navigate to="/register" />} />
      </Routes>
    </div>
  );
};

export default Paginas;