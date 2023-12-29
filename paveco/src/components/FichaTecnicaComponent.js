import tabla1 from "../assets/img/especificaciones-1.png";
import tabla2 from "../assets/img/especificaciones-2.png";
function FichaTecnicaComponent() {
  return (
    <div className="container-fluid noticias-first text-center pe-4 ps-4 pt-4">
      <div className="row bg-black border-top-15 pb-5 " id="border-verde">
        <div className="col-12 bg-black text-white ficha-card pt-5 border-top-15 text-anim-left">
          <section>
            <h1 className="pb-3">FICHA TÉCNICA</h1>
            <h3 className="text-decoration-underline pb-2">ESPECIFICACIONES</h3>
            <p className="text-start ms-2 me-2 ms-lg-4 me-lg-4" style={{fontSize: "1.5em"}}>
              Nuestro producto, comercializado en Argentina como Paveco, ha
              demostrado su eficacia desde 1989 en más de 41 países de América
              del Sur y Caribe. Contamos con certificaciones internacionales,
              cumpliendo con estándares como AASHTO M208, ASTM D2397 y
              normativas de diversos departamentos de transporte, como también
              estudios internacionales de CONCREMAT, PASSARELLI y JBA.
            </p>
            <img
              src={tabla1}
              alt="Especificaciones"
              className="i-tabla mt-3 mb-5"
            ></img>
          </section>
        </div>
      </div>
      <div className="row p-0 pb-0">
        <div className="col-12 bg-ficha text-white text-normal pb-5">
          <section className="text-anim-right-2">
            <h1 className="text-decoration-underline pt-4">MANEJO</h1>
            <p className="">
              <i class="fa-solid fa-circle-arrow-right pe-3"></i>Proteja la
              emulsión de la congelación.
            </p>
            <p className="">
              <i class="fa-solid fa-circle-arrow-right pe-3"></i>Evite
              sobrecalentar la emulsión.
            </p>
            <p className="">
              <i class="fa-solid fa-circle-arrow-right pe-3"></i>
              Evite el bombeo excesivo con bombas de alto cizallamiento,
              especialmente si la emulsión es fría.
            </p>
            <img
              src={tabla2}
              alt="Especificaciones"
              className="i-tabla mt-3 mb-5"
            ></img>
          </section>
          <div className="mb-3"></div>
        </div>
      </div>
    </div>
  );
}

export default FichaTecnicaComponent;
