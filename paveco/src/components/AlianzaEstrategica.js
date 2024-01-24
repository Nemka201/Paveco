import logoAlianza from "../assets/img/alianza-estrategica.jpg";

function AlianzaEstrategica() {
  return (
    <>
      <div className="container-fluid bg-presentacion">
        <div className="container pb-5 p-0">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className="alianza-estrategica pt-5 text-white text-shadow">
                <h1 className="">ALIANZA ESTRATÉGICA</h1>
                <h3 className="pt-2 pb-2">PRESENTACIÓN</h3>
                <p className="pb-5">
                  La formulación de EcoPAV y su modo de empleo, permite que se
                  pueda aplicar en todas las condiciones climáticas, brindando
                  una solución permanente. Su presentación es en bolsas de 25
                  Kg, big bags de 500kg o granel, permitiendo una logística de
                  traslado y almacenamiento simple, lo cual se traduce en un
                  significativo ahorro.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-6 pt-5">
                {/* <img src={logoAlianza} className="alianza-img"></img> */}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlianzaEstrategica;
