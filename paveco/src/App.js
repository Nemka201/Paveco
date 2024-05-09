import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import FichaTecnica from "./views/FichaTecnica.js";
import Contacto from "./views/Contacto.js";
import Beneficios from "./views/Beneficios.js";
import Usos from "./views/Usos.js";
import Noticias from "./views/Noticias.js";
import ProductosServicios from "./views/ProducosServicios.js";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      {/* <AnimatePresence> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ficha-Tecnica" element={<FichaTecnica />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Beneficios" element={<Beneficios />} />
          <Route
            path="/Productos-y-Servicios"
            element={<ProductosServicios />}
          />
          <Route path="/Usos" element={<Usos />} />
          <Route path="/Noticias" element={<Noticias />} />
        </Routes>
      {/* </AnimatePresence> */}
    </BrowserRouter>
  );
}

export default App;
