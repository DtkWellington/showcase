import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortalMoradorMobilePage from "./pages/PortalMoradorMobilePage";
import PortalEmpresaPage from "./pages/PortalEmpresaPage";
import PortalEmpresaMobilePage from "./pages/PortalEmpresaMobilePage";
import DetkAcessoPistaPage from "./pages/DetkAcessoPistaPage";
import PortalMoradorPage from "./pages/PortalMoradorPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app_portal_morador" element={<PortalMoradorMobilePage />} />
        <Route path="/app_portal_empresa" element={<PortalEmpresaMobilePage />} />
        <Route path="/portal-morador" element={<PortalMoradorPage />} />
        <Route path="/portal-empresa" element={<PortalEmpresaPage />} />
        <Route path="/detk-acesso-pista" element={<DetkAcessoPistaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
