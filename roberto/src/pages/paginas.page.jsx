import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login.page";
import Register from "./register.page";
const Paginas = () => {
  return (
    <div>
      <Routes>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/register/" element={<Register/>}/>
        <Route path="/*" element={<Navigate to="/register" />} />
      </Routes>
    </div>
  );
};

export default Paginas;
