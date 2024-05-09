import { motion } from "framer-motion";
function Presentacion() {

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="container bg-black mt-0 pt-5 presentacion" id="nosotros">
        <div className="col-12">
          <div className="row m-0 pt-5 pe-lg-4 pe-2">
            <div className="col-sm-12 object-fit-cover mt-3 text-white ps-3 pe-3 ps-md-0 pe-md-0">
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <h1 className="mt-0 pb-4 text-white pt-1 m-plus-rounded-1c-regular">
                  ¿QUIENES SOMOS?
                </h1>
                <motion.p 
                className="text-white roboto-regular pb-4 text-start"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  Paveco Argentina es una empresa especializada en la
                  formulación de asfalto en frío e infraestructura vial de
                  vanguardia. Nuestra compañía cuenta con el respaldo y aval de
                  nuestra casa matriz en Estados Unidos, La cual provee el
                  ECOPAV, uno de los productos más seguro y efectivo disponible
                  en el mercado americano para la fabricación de asfalto en
                  frio.
                </motion.p>
              </motion.section>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  <hr></hr>
                </div>
                <div className="col-4"></div>
              </div>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-start pb-3 pt-md-4 pt-0 m-plus-rounded-1c-regular ">
                  ECOPAV
                </h2>
                <motion.p 
                className="pb-5 roboto-regular text-start mt-3"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  Es un Superpave modificado con biopolímeros de alto
                  rendimiento formulado con aditivos especiales Específicamente
                  diseñado para soportar una amplia gama de temperaturas y
                  climas. Es una solución permanente para la pavimentación,
                  reparación y mantenimiento de autopistas, rutas, puentes,
                  avenidas, calles etc.
                </motion.p>
              </motion.section>
              <motion.section
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              >
                <h2 className="text-start pb-3 pt-md-4 pt-0 m-plus-rounded-1c-regular ">
                  ALIANZA ESTRATÉGICA
                </h2>
                <motion.p 
                className="pb-5 roboto-regular text-start mt-3"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                >
                  La formulación de EcoPAV y su modo de empleo, permite que se
                  pueda aplicar en todas las condiciones climáticas, brindando
                  una solución permanente. Su presentación es en bolsas de 25
                  Kg, big bags de 500kg o granel, permitiendo una logística de
                  traslado y almacenamiento simple, lo cual se traduce en un
                  significativo ahorro.
                </motion.p>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentacion;
