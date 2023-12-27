import ContactoForm from "../components/ContactoForm";
import Navbar from "../components/NavbarPaveco";
import Footer from "../components/Footer";

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="container-fluid contacto text-oswald p-0 pe-lg-4 pt-3 noticias-first">
        <div className="row p-0">
          <div className="col-12 col-lg-6">
            <ContactoForm />
          </div>
          <div className="col-12 col-lg-6 text-black bg-white border-top">
          <div className="informacion-contacto text-center p-3">
              <h2>Números de contacto:</h2>
              <h3>11 4177-1663</h3>
              <h3>381 539-1065</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
