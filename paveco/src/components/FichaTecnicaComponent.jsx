import tabla1 from "../assets/img/especificaciones-1.png";
import tabla2 from "../assets/img/especificaciones-2.png";
import tabla1Mobile from "../assets/img/especificaciones-1-mobile.png";
import tabla2Mobile from "../assets/img/especificaciones-2-mobile.png";
import Navbar from "../components/NavbarPaveco";

function FichaTecnicaComponent() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid text-center pe-4 ps-4 pt-0 mt-0"
        id="fichatecnica"
      >
        <div className="container">
          <div className="row pb-0">
            <div className="col-12 bg-black text-white pt-5">
              <section>
                <div className="container bg-black border-top-10 pt-5">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="pb-3 m-plus-rounded-1c-regular">FICHA TÉCNICA</h1>
                      <h3 className="pb-2 m-plus-rounded-1c-regular">ESPECIFICACIONES</h3>
                      <p style={{ fontSize: "1.4em" }} className="roboto-light">
                        Nuestro producto, comercializado en Argentina como
                        Paveco, ha demostrado su eficacia desde 1989 en más de
                        41 países de América del Sur y Caribe. Contamos con
                        certificaciones internacionales, cumpliendo con
                        estándares como AASHTO M208, ASTM D2397 y normativas de
                        diversos departamentos de transporte, como también
                        estudios internacionales de CONCREMAT, PASSARELLI y JBA.
                      </p>
                      <img
                        src={tabla1}
                        alt="Especificaciones"
                        className="i-tabla mt-3 mb-5"
                      ></img>
                      <img
                        src={tabla1Mobile}
                        alt="Especificaciones"
                        className="i-tabla-mobile mt-3 mb-5"
                        style={{ width: "100%" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row p-0 pb-0">
            <div className="col-12 text-white text-normal pb-5">
              <section>
                <h2 className="pt-4 text-center mb-5 m-plus-rounded-1c-regular">MANEJO</h2>
                <h3 className="h3-beneficios mt-3 text-start poetsen-one-regular">
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>Evite
                  sobrecalentar la emulsión.
                </h3>
                <h3 className="h3-beneficios mt-3 text-start poetsen-one-regular">
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>Proteja la
                  emulsión de la congelación.
                </h3>
                <h3 className="h3-beneficios mt-3 text-start poetsen-one-regular">
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>
                  Evite el bombeo excesivo con bombas de alto cizallamiento.
                </h3>
                <div className="img-container text-center">
                  <img
                    src={tabla2}
                    alt="Especificaciones"
                    className="i-tabla mt-3 mb-5"
                  ></img>
                  <img
                    src={tabla2Mobile}
                    alt="Especificaciones"
                    className="i-tabla-mobile mt-3 mb-5 pe-3"
                  ></img>
                </div>
              </section>
              <div className="mb-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FichaTecnicaComponent;
