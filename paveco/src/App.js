import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './views/Home.js';
import FichaTecnica from './views/FichaTecnica.js';
import Contacto from './views/Contacto.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ficha-Tecnica" element={<FichaTecnica />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
