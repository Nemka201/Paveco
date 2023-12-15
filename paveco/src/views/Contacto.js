import Banner from "../components/Banner";
import ContactoForm from "../components/ContactoForm";
import Navbar from "../components/NavbarPaveco";
import Footer from "../components/Footer";

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="container-fluid contacto">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 text-normal">
            <div className="informacion-contacto text-center">
              <h2>Números de contacto:</h2>
              <h3>11 4177-1663</h3>
              <h3>381 539-1065</h3>
            </div>

            <ContactoForm />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
