import tabla1 from "../assets/img/especificaciones-1.png";
import tabla2 from "../assets/img/especificaciones-2.png";
function FichaTecnicaComponent() {
  return (
    <div className="container-fluid ficha-tecnica text-center">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="text-decoration-underline">FICHA TÉCNICA</h1>
            <h3 className="text-decoration-underline">ESPECIFICACIONES</h3>
            <p className="text-start">
              La especificación cumple con AASHTO M208, ASTM D2397, el
              Departamento de Transporte de Virginia, North Carolina DOT, South
              Carolina DOT, Tennessee DOT, West Virginia DOT Y Maryland State
              Highway Administration
            </p>
            <img src={tabla1} alt="Especificaciones" className="i-tabla mt-3 mb-3"></img>
            <h3 className="text-decoration-underline">MANEJO</h3>
            <p className="">Proteja la emulsión de la congelación</p>
            <p className="">Evite sobrecalentar la emulsión</p>
            <p className="">
              Evite el bombeo excesivo con bombas de alto cizallamiento,
              especialmente si la emulsión es fría.
            </p>
            <img src={tabla2} alt="Especificaciones" className="i-tabla mt-3 mb-3"></img>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
  );
}

export default FichaTecnicaComponent;
