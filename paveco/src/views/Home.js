import Banner from "../components/Banner";
import Navbar from "../components/NavbarPaveco";
import AlianzaEstrategica from "../components/AlianzaEstrategica";
import Footer from "../components/Footer";
import Presentacion from "../components/Presentacion";
import Beneficios from "../views/Beneficios";
import Usos from "../views/Usos";
import FichaTecnica from "../views/FichaTecnica";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <button onClick={irArriba} id="upButton" title="Ir arriba">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
      <Presentacion />
      <AlianzaEstrategica />
      <Beneficios />
      <Usos />
      <FichaTecnica />
      <Footer />
    </>
  );

  function irArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default Home;
