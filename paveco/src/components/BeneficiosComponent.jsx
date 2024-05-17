import BeneficiosCard from "./BeneficiosCard";
import { motion } from "framer-motion";

function BeneficiosComponent() {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-4 p-lg-4 mt-5 b-view">
            <motion.h1
              className="titulo text-center text-white mt-4 m-plus-rounded-1c-regular pb-5"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
            >
              SUS <span className="green-text">BENIFICIOS</span>
            </motion.h1>
            <motion.div
              className="row ps-3 pe-3 ps-md-5 pe-md-5"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
            >
              <BeneficiosCard
                b="No contamina, no emite gases no daña la salud de los trabajadores."
                b2="Producto modificado con bio-polímeros."
              />
              <BeneficiosCard
                b="Aplicable en cualquier clima: todas las estaciones."
                b2="Solución permanente adhiriendo al asfalto y concreto."
              />
              <BeneficiosCard
                b="Se puede fabricar el asfalto frio Paveco en cualquier lugar cercano a la obra."
                b2="Una vez colocado el producto se puede reanudar el tráfico inmediatamente."
              />
              <BeneficiosCard
                b="Compactación por presión de tráfico o compactadoras."
                b2="Se puede aplicar en forma directa en la superficie a reparar (no precisa riego de imprimación o riego de liga)"
              />
              <BeneficiosCard
                b="Se puede fabricar cualquier cantidad, optimizando el espacio de almacenajes y logística."
                b2="Facilidad de almacenamiento de hasta 2 años, sin perder propiedades."
              />
              <BeneficiosCard b="Ahorros significativos por el costo de reparar vías." />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeneficiosComponent;
