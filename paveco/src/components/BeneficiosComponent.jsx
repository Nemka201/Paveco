import BeneficiosCard from "./BeneficiosCard";
import { motion } from "framer-motion";
import firstImage from "./../assets/beneficios/WEB1.png";
import CarouselBeneficiosMobile from "./CarouselBeneficiosMobile";

function BeneficiosComponent() {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="container-fluid p-lg-5 pt-0 pt-lg-0 bg-white-s">
        <div className="row">
          <div className="col-12 p-4 p-lg-3 mt-3 mt-lg-5 b-view">
            <motion.h1
              className="titulo text-center text-black mt-4 m-plus-rounded-1c-regular pb-4 pt-3"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
            >
              <span>BENEFICIOS</span>
            </motion.h1>
            <CarouselBeneficiosMobile />
            <div
              className="row ps-3 pe-3 ps-md-5 pe-md-5 m-5 mt-1"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
            >
              <BeneficiosCard
                beneficio="Una vez colocado el producto se puede reanudar el tráfico inmediamente."
                beneficio2="Solución permanente uniendo aslfato y concreto por sus cualidades se adhiere perfectamente
                al hormigon."
                beneficio3="Compactación por presión del tráfico o maquinas compactadoras."
                beneficio4="Se puede aplicar en forma directa en la superficie o reparo (no precisa riego de imprimación
                  ni riego de liga) y poseé propiedades anti-deslizantes."
                imagen="trf.png"
                imagen2="adh.png"
                imagen3="cmp.png"
                imagen4="apl.png"
                cardBack={firstImage}
                className="not-mobile"
                animation="leftIn"
              />
              <BeneficiosCard
                beneficio="La formulación de PAVECO es un asfalto de ultima generación (SUPERPAVE) fabricado en
                USA."
                beneficio2="No contamina, no emite gases y no compromete la salud de los trabajadores."
                beneficio3="Al ser su composición 95% petróleo y no contener agua, la película que crea es ampliamente
  menos permeable al agua que otros asfaltos."
                beneficio4="Asfalto modificado con polimeros y agregado de Bio-polímeros."
                imagen="1.png"
                imagen2="eco.png"
                imagen3="imp.png"
                imagen4="bio.png"
                cardBack={firstImage}
                className="not-mobile"
                animation="bottomIn"
              />
              <BeneficiosCard
                beneficio="Aplicable en cualquier clima, todas las estaciones del año. Soporta temperaturas
                -50° /+80° grados."
                beneficio2="Ahorros significativos en construcción de vías."
                beneficio3="Periodo de almacenamiento de hasta 2 años sin perder sus propiedades."
                beneficio4="Se puede fabricar cualquier cantidad optimizando el espacio de almacenaje logístico."
                imagen="tmp.png"
                imagen2="cst.png"
                imagen3="cld.png"
                imagen4="prd.png"
                cardBack={firstImage}
                className="not-mobile"
                animation="rightIn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeneficiosComponent;
