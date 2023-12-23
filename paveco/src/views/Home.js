import Banner from "../components/Banner";
import Navbar from "../components/NavbarPaveco";
import pavecoFoto from "../assets/img/paveco_1.png";
import AlianzaEstrategica from "../components/AlianzaEstrategica";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container-fluid bg-black">
        <div className="col-1"></div>
        <div className="col-11">
          <div className="row m-0">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 object-fit-cover mt-3 text-center">
              <img src={pavecoFoto} alt="Paveco"></img>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4 ps-md-5">
              <h1 className="text-normal mt-3 ps-3 ps-lg-5 ps-xl-5 text-center text-decoration-underline">
                ECOPAV
              </h1>
              <h2 className="text-normal mt-2 ps-3 ps-lg-5 ps-xl-5 ">
                Es un Superpave modificado con biopolímeros de alto rendimiento
                formulado con aditivos especiales, que permite fabricar asfalto
                frio al ser mezclado con agregados minerales o pétreos.
                Específicamente diseñado para soportar una amplia gama de
                temperaturas y climas. Es una solución permanente para la
                pavimentación, reparación y mantenimiento de autopistas, rutas,
                puentes, avenidas, calles etc. ECOPAV es uno de los productos
                más seguro y efectivo disponible en el mercado Americano.
              </h2>
            </div>
          </div>
        </div>
        <div className=" over">
          <div className="t-black"></div>
        </div>
      </div>
      <AlianzaEstrategica/>
    </>
  );
}

export default Home;
