import BeneficiosComponent from "../components/BeneficiosComponent";
import CuadroComparativo from "../components/CuadroComparativo";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";

function Beneficios() {
  return (
    <>
      <div className="container-fluid bg-gradient" id="beneficios">
        <BeneficiosComponent />
        <CuadroComparativo />
      </div>
    </>
  );
}

export default Beneficios;
