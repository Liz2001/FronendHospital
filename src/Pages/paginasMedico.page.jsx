import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarP from "../Component/navbar.component";
import InicioMedico from "./inicioMedico.page";
import PerfilMedico from "../Component/perfilMedico.page";
import PreguntasMedico from "../Component/preguntasMedico.page";

import Perfil from "./perfil.page";

const PaginasMedico = () => {
  const [paginaActual, setPaginaActual] = useState(0);

  return (
    <div>
      <NavbarP paginaActual={paginaActual} />
      <Routes>
        <Route
          path="/inicio"
          element={<InicioMedico setPaginaActual={setPaginaActual} />}
        />
       <Route path="/perfilmedico/:id" element={<PerfilMedico />} />
       <Route
          path="/perfil"
          element={<Perfil setPaginaActual={setPaginaActual} />}
        />
       
       <Route
          path="/preguntas"
          element={<PreguntasMedico setPaginaActual={setPaginaActual} />}
        /><Route path="*" element={<Navigate to="/medico/inicio" />} />
      </Routes>
    </div>
  );
};

export default PaginasMedico;
