import Carousel from "./Carousel";
import pavecoFoto from "../assets/img/paveco_1.png";
function Banner() {
  return (
    <>
      <div className="container-fluid m-0 banner">
        <div className="row m-0">
          <Carousel />
          <div className="col-1"></div>
          <div className="col-11">
            <div className="row m-0">
              <div className="col-5 col-xl-5 col-sm-12 object-fit-cover">
                <img src={pavecoFoto} alt="Paveco" className=""></img>
              </div>
              <div className="col-6 col-xl-6 col-sm-12 mt-4">
                <h1 className="text-normal mt-5 ps-3 ps-lg-5 ps-xl-5">
                  ECOPAV
                </h1>
                <h2 className="text-normal mt-2 ps-3 ps-lg-5 ps-xl-5">
                  Es un Superpave modificado con biopolímeros de alto
                  rendimiento formulado con aditivos especiales, que permite
                  fabricar asfalto frio al ser mezclado con agregados minerales
                  o pétreos. Específicamente diseñado para soportar una amplia
                  gama de temperaturas y climas. Es una solución permanente para
                  la pavimentación, reparación y mantenimiento de autopistas,
                  rutas, puentes, avenidas, calles etc. ECOPAV es uno de los
                  productos más seguro y efectivo disponible en el mercado
                  Americano.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
