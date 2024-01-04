import BeneficiosComponent from "../components/BeneficiosComponent";
import CuadroComparativo from "../components/CuadroComparativo";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";

function Beneficios() {
  return (
    <>
      <Navbar/>
      <BeneficiosComponent/>
      <CuadroComparativo/>
      <Footer/>
    </>
  );
}

export default Beneficios;
