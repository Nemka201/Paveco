import ContactoForm from "../components/ContactoForm";
import Navbar from "../components/NavbarPaveco";
import Footer from "../components/Footer";
import EmailTemplate from "../components/EmailTemplate";

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="container-fluid contacto text-oswald p-1 pt-4 noticias-first">
        <div className="row ps-lg-2 pe-lg-2" style={{margin:"0px"}}>
          <div className="col-12 col-lg-12">
            <ContactoForm />
          </div>
          {/* <EmailTemplate nombre="Benjamin Rey" telefono="3816326116" mensaje="Holaas" email="nemka201@gmail.com"/> */}
          {/* <div className="col-12 col-lg-6 text-black bg-white border-top">
          <div className="informacion-contacto text-center p-3">
              <h2>Números de contacto:</h2>
              <h3>11 4177-1663</h3>
              <h3>381 539-1065</h3>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
