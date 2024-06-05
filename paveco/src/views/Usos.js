import UsosComponent from "../components/UsosComponent";
function Usos() {
  return (
    <>
      <div className="container-fluid p-5 pt-0 bg-black" id="usos">
        <div className="row p-4 pt-0">
          <div className="col-12">
            <h1 className="titulo text-center pb-4 pt-4 m-plus-rounded-1c-regular text-white-s mt-5">USOS</h1>
            <div className="row text-usos roboto-medium card-container">
              <UsosComponent
                classContainer="usos-left"
                text="Reparación de baches y grietas entre otra fracturas superficiales."
                animation="leftIn"
              />
              <UsosComponent
                classContainer="usos-right"
                text="Capa de rodamiento en suelos estabilizados en caminos vecinales o rurales, alcantarillas, reparación de ruptura de vías por empresas prestadoras de servicios:
                - Aguas
                – Cable Tv/Internet
                – Luz
                – Gas"
                animation="rightIn"

              />
              <UsosComponent
                classContainer="usos-left"
                text="Ideal para reparación y mantenimientos de rutas y Autovias, ya sea por la durabilidad del producto como por la rápida solución que brinda ECOPAV."
                animation="leftIn"
              />
              <UsosComponent
                classContainer="usos-right"
                text="Caminerías en parques/paseos, campos deportivos, ciclovias y otros."
                animation="rightIn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usos;
