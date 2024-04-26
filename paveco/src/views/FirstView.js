import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../components/NavbarPaveco";
function FirstView() {
  return (
    <>
    
      <div className="first-background">
        <div className="background-image"></div>
        <section className="text-background container-fluid">
          <div className="row pt-5">
            <div className="col-5 text-black">
              <h1 className="ecopav mt-0 ps-3 ps-lg-5 ps-xl-5 pb-4">
                PAVECO
              </h1>
              <h5 className="text-white mt-2 ps-3 ps-lg-5 ps-xl-5 pb-5">
                Específicamente diseñado para soportar una amplia gama de
                temperaturas y climas. ECOPAV es uno de los productos
                más seguros y efectivos disponibles en el mercado americano.
              </h5>
              <Link smooth to="/Contacto" className="nav-link mt-2 ms-5 ps-5">
                  <button className="btn btn-contacto">¡Construyamos juntos!</button>
                </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default FirstView;
