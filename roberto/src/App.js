import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginasMedico from "./pages/medico/paginasMedico.page";
import Paginas from "./pages/paginas.page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/medico/*" element={<PaginasMedico />} />
        <Route path="/*" element={<Paginas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
