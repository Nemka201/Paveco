import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../components/NavbarPaveco";
function FirstView() {
  return (
    <>
      <div className="first-background">
      <Navbar />
        <div className="background-image"></div>
        <section className="text-background container-fluid">
          <div className="row pt-5">
            <div className="col-6 text-black">
              <h1 className="ecopav mt-0 ps-3 ps-lg-5 ps-xl-5 pb-4">
                PAVECO
              </h1>
              <p className="text-white mt-2 ps-3 ps-lg-5 ps-xl-5 pb-2">
                Es un Superpave modificado con biopolímeros de alto rendimiento
                formulado con aditivos especiales, que permite fabricar asfalto
                frío al ser mezclado con agregados minerales o pétreos.
              </p>
              <p className="text-white mt-2 ps-3 ps-lg-5 ps-xl-5 pb-5">
                Específicamente diseñado para soportar una amplia gama de
                temperaturas y climas. Es una solución permanente para la
                pavimentación, reparación y mantenimiento de autopistas, rutas,
                puentes, avenidas, calles, etc. ECOPAV es uno de los productos
                más seguros y efectivos disponibles en el mercado americano.
              </p>
              <Link smooth to="/Contacto" className="nav-link mt-2 ms-5 ps-5">
                  <button className="btn btn-contacto">CONTACTO</button>
                </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default FirstView;
