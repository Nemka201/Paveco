import FichaTecnicaComponent from "../components/FichaTecnicaComponent";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";

function FichaTecnica() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid" id="fichatecnica">
        <div className="row">
          <div className="col-12">
            <FichaTecnicaComponent />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FichaTecnica;
