import pavecoFoto from "../assets/presentacion/presentacion.gif";

function Presentacion() {
  return (
    <>
      <div className="container-fluid bg-black mt-0 pt-5 presentacion">
        <div className="col-12">
          <div className="row m-0 pt-0 pe-lg-4 pe-2">
            <div className="col-sm-12 object-fit-cover mt-3 text-center text-white">
            <section>
                <h2 className="ecopav mt-0 ps-3 ps-lg-5 ps-xl-5 text-center pb-4 text-white">
                  ECO PAV
                </h2>
                <p className="mt-2 ps-3 ps-lg-5 ps-xl-5 text-white">
                  Es un Superpave modificado con biopolímeros de alto
                  rendimiento formulado con aditivos especiales, que permite
                  fabricar asfalto frio al ser mezclado con agregados minerales
                  o pétreos.
                </p>
                <p className="ps-3 ps-lg-5 ps-xl-5 pb-5">
                  Específicamente diseñado para soportar una amplia gama de
                  temperaturas y climas. Es una solución permanente para la
                  pavimentación, reparación y mantenimiento de autopistas,
                  rutas, puentes, avenidas, calles etc. ECOPAV es uno de los
                  productos más seguro y efectivo disponible en el mercado
                  Americano.
                </p>
              </section>
              <h2 className="">ALIANZA ESTRATÉGICA</h2>
              <p className="pb-5">
                La formulación de EcoPAV y su modo de empleo, permite que se
                pueda aplicar en todas las condiciones climáticas, brindando una
                solución permanente. Su presentación es en bolsas de 25 Kg, big
                bags de 500kg o granel, permitiendo una logística de traslado y
                almacenamiento simple, lo cual se traduce en un significativo
                ahorro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentacion;
