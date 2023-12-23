import Banner from "../components/Banner";
import Navbar from "../components/NavbarPaveco";
import AlianzaEstrategica from "../components/AlianzaEstrategica";
import Footer from "../components/Footer";
import Presentacion from "../components/Presentacion";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Presentacion/>
      <AlianzaEstrategica/>
      <Footer/>
    </>
  );
}

export default Home;
