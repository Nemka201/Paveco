import UsosComponent from "../components/UsosComponent";
import { motion } from "framer-motion";

function Usos() {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="container-fluid p-5 pt-4 bg-black" id="usos" style={{ maxHeight: "100vh" }}>
        <div className="row p-4 pt-0" >
          <div className="col-12">
            <motion.h1 className="titulo text-center m-plus-rounded-1c-regular text-white-s mt-5"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}>
              USOS
            </motion.h1>
            <div className="row text-usos roboto-medium usos-container">
              <UsosComponent
                classContainer="usos-left item1"
                text="Reparación de baches y grietas entre otra fracturas superficiales."
                animation="leftIn"
              />
              <div className="usos-image item item2"></div>
              <UsosComponent
                classContainer="usos-right item3"
                text="Capa de rodamiento en suelos estabilizados en caminos vecinales o rurales, alcantarillas, reparación de ruptura de vías por empresas prestadoras de servicios:
                - Aguas
                – Cable Tv/Internet
                – Luz
                – Gas"
                animation="rightIn"
              />
              <div className="usos-image item item4"></div>
              <UsosComponent
                classContainer="usos-left item5"
                text="Ideal para reparación y mantenimientos de rutas y Autovias, ya sea por la durabilidad del producto como por la rápida solución que brinda ECOPAV."
                animation="leftIn"
              />
              <div className="usos-image item item6"></div>
              <UsosComponent
                classContainer="usos-right item7"
                text="Caminerías en parques/paseos, campos deportivos, ciclovias y otros."
                animation="rightIn"
              />
              <div className="usos-image item item8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usos;
