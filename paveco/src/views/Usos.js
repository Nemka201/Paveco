import UsosComponent from "../components/UsosComponent";

function Usos() {
  return (
    <>
      <div className="container p-4 pt-0" id="usos">
        <div className="row p-4 pt-0">
          <div className="col-12">
            <h1 className="titulo text-center pb-4 pt-4 m-plus-rounded-1c-regular">USOS</h1>
            <div className="row text-usos roboto-medium">
              <UsosComponent
                classContainer="bg-black"
                text="Reparación de baches y grietas entre otra fracturas superficiales."
              />
              <UsosComponent
                classContainer="bg-white text-black"
                text="Capa de rodamiento en suelos estabilizados en caminos vecinales o rurales, alcantarillas, reparación de ruptura de vías por empresas prestadoras de servicios:
                - Aguas
                – Cable Tv/Internet
                – Luz
                – Gas"
              />
              <UsosComponent
                classContainer="bg-white text-black"
                text="Ideal para reparación y mantenimientos de rutas y Autovias, ya sea por la durabilidad del producto como por la rápida solución que brinda ECOPAV."
              />
              <UsosComponent
                classContainer="bg-black"
                text="Caminerías en parques/paseos, campos deportivos, ciclovias y otros."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usos;
