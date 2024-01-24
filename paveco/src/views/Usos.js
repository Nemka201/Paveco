import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";
import UsosComponent from "../components/UsosComponent";

function Usos() {
  return (
    <>
      <Navbar />
      <div className="container-fluid banner p-4">
        <div className="row bg-black border-top-15">
          <div className="col-12">
            <h1 className="titulo text-center pb-4 pt-4 text-anim-right">USOS</h1>
            <div className="row text-usos">
              <UsosComponent
                classContainer="bg-black text-anim-top"
                text="Reparación de baches y grietas entre otra fracturas superficiales."
              />
              <UsosComponent
                classContainer="bg-white text-black text-anim-right-2 usos-c-2"
                text="Capa de rodamiento en suelos estabilizados en caminos vecinales o rurales, alcantarillas, reparación de ruptura de vías por empresas prestadoras de servicios:
                - Aguas
                – Cable Tv/Internet
                – Luz
                – Gas"
              />
              <UsosComponent
                classContainer="bg-white text-black text-anim-left usos-c-3"
                text="Ideal para reparación y mantenimientos de rutas y Autovias, ya sea por la durabilidad del producto como por la rápida solución que brinda ECOPAV."
              />
              <UsosComponent
                classContainer="bg-black text-anim-bot usos-c-4"
                text="Caminerías en parques/paseos, campos deportivos, ciclovias y otros."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Usos;
