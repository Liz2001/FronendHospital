import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import InicioMedico from "./inicioMedico.page";
import Perfil from "./perfil.page";
import PreguntasMedico from "./preguntasMedico.page";
import PerfilMedico from "./perfilMedico.page";
const PaginasMedico = () => {
  const [paginaActual, setPaginaActual] = useState(0);

  return (
    <div>
      <Navbar paginaActual={paginaActual} />
      <Routes>
        <Route
          path="inicio/"
          element={<InicioMedico setPaginaActual={setPaginaActual} />}
        />
        <Route path="perfilmedico/:id" element={<PerfilMedico />} />
        <Route
          path="perfil/"
          element={<Perfil setPaginaActual={setPaginaActual} />}
        />
        <Route
          path="preguntas/"
          element={<PreguntasMedico setPaginaActual={setPaginaActual} />}
        />
        <Route path="*" element={<Navigate to="/medico/inicio" />} />
      </Routes>
    </div>
  );
};

export default PaginasMedico;
