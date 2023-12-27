import tabla1 from "../assets/img/especificaciones-1.png";
import tabla2 from "../assets/img/especificaciones-2.png";
function FichaTecnicaComponent() {
  return (
    <div className="container-fluid ficha-tecnica text-center">
      <div className="row ficha-tecnica-first ps-3 pe-3 pt-4">
        <div className="col-12 bg-black text-white ficha-card pt-5 border-top">
          <h1 className="text-decoration-underline">FICHA TÉCNICA</h1>
          <h3 className="text-decoration-underline">ESPECIFICACIONES</h3>
          <p className="text-start ms-2 me-2 ms-lg-4 me-lg-4">
            La especificación cumple con AASHTO M208, ASTM D2397, el
            Departamento de Transporte de Virginia, North Carolina DOT, South
            Carolina DOT, Tennessee DOT, West Virginia DOT Y Maryland State
            Highway Administration.
          </p>
          <img
            src={tabla1}
            alt="Especificaciones"
            className="i-tabla mt-3 mb-5"
          ></img>
        </div>
      </div>
      <div className="t-black m-0"></div>
      <div className="row p-2 pb-0">
        <div className="col-12 ficha-tecnica bg-white text-black pb-5">
          <h2 className="text-decoration-underline pt-4">MANEJO</h2>
          <h3 className="">Proteja la emulsión de la congelación.</h3>
          <h3 className="">Evite sobrecalentar la emulsión.</h3>
          <h3 className="">
            Evite el bombeo excesivo con bombas de alto cizallamiento,
            especialmente si la emulsión es fría.
          </h3>
          <img
            src={tabla2}
            alt="Especificaciones"
            className="i-tabla mt-3 mb-5"
          ></img>
          <div className="mb-3"></div>
        </div>
      </div>
      <div className="t-black-i"></div>
    </div>
  );
}

export default FichaTecnicaComponent;
