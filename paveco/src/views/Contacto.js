import ContactoForm from "../components/ContactoForm";
import Navbar from "../components/NavbarPaveco";
import Footer from "../components/Footer";

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="container-fluid contacto text-oswald p-1 pt-4 noticias-first">
        <div className="row ps-lg-2 pe-lg-2" style={{ margin: "0px" }}>
          <div className="col-12 col-lg-12">
            <ContactoForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
