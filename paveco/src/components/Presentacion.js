import pavecoFoto from "../assets/presentacion/presentacion.gif";

function Presentacion() {
  return (
    <>
      <div className="container-fluid bg-black mt-0 pt-5">
        <div className="col-12">
          <div className="row m-0 pt-0 pe-lg-4 pe-2">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 object-fit-cover mt-3 text-center">
              <img
                src={pavecoFoto}
                alt="Paveco"
                className="presentacion-img mt-5"
              ></img>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4 ps-md-5 pb-5 text-anim-right" >
              <section>
                <h1 className="ecopav mt-0 ps-3 ps-lg-5 ps-xl-5 text-center pb-4">
                  ECO PAV
                </h1>
                <h2 className="text-normal mt-2 ps-3 ps-lg-5 ps-xl-5 pb-2">
                  Es un Superpave modificado con biopolímeros de alto
                  rendimiento formulado con aditivos especiales, que permite
                  fabricar asfalto frio al ser mezclado con agregados minerales
                  o pétreos.
                </h2>
                <h2 className="text-normal mt-2 ps-3 ps-lg-5 ps-xl-5 pb-5">
                  Específicamente diseñado para soportar una amplia gama de
                  temperaturas y climas. Es una solución permanente para la
                  pavimentación, reparación y mantenimiento de autopistas,
                  rutas, puentes, avenidas, calles etc. ECOPAV es uno de los
                  productos más seguro y efectivo disponible en el mercado
                  Americano.
                </h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentacion;
