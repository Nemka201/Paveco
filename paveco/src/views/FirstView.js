import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

function FirstView() {
  const variants = {
    hiddenY: { opacity: 0, y: "-20%" },
    visibleY: { opacity: 1, y: "calc(-25% + 5vh)" },
    hiddenX: { opacity: 0, x: "-20vh", y: "20vh" },
    visibleTop: { opacity: 1, x: "+36vh", y: "15vh" },
    visibleMiddle: { opacity: 1, x: "+36svh", y: "20vh" },
    visibleBot: { opacity: 1, x: "+36vh", y: "25vh" },
    visibleRectangulo: { opacity: 1, x: "-0vh", y: "0vh" },
  };
  return (
    <>
      <div className="first-background pt-5" id="home">
        <div className="background-image"></div>
        <motion.section
          initial="hiddenY"
          whileInView="visibleY"
          variants={variants}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="text-background container-fluid ps-5 pt-5"
        >
          <div className="row pt-5 ps-0 pe-4 ps-md-5 mt-5">
            <div className="bolsa"></div>
            <div className="col-12 col-md-8 col-lg-6 text-black mt-5 pt-5 ps-md-5">
              <div className="header-text">
                <h1 className="ecopav mt-0 pb-2 pt-5 mt-5 m-plus-rounded-1c-regular text-start">
                  PAV<span className="green-text">ECO</span>
                </h1>
                <h5 className="text-white roboto-regular">
                  Nuestro producto insignia es un asfalto en frío ecológico.
                </h5>
                <h5 className="text-white roboto-regular">
                  Gracias a su formulación, es de tipo SUPERPAVE, lo que le
                  confiere características únicas.
                </h5>
                <h5 className="roboto-regular text-white pb-4">
                  Está disponible en prácticas bolsas de 25 kg, Big Bags de 500
                  kg y a granel.
                </h5>
                <Link smooth to="/Contacto">
                  <button className="btn btn-contacto roboto-regular">
                    ¡Contactanos!
                  </button>
                </Link>
              </div>

              <div className="ecotext-container">
                <motion.h2
                  className="text-white m-plus-rounded-1c-regular product-h2 not-mobile"
                  initial="hiddenX"
                  whileInView="visibleTop"
                  variants={variants}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                >
                  <strong>
                    <i>
                      <span className="green-text">SUPER</span>PAVE
                    </i>
                  </strong>
                </motion.h2>
                <motion.h2
                  className="text-white m-plus-rounded-1c-regular pt-3 pb-3 product-h2 not-mobile"
                  initial="hiddenX"
                  whileInView="visibleMiddle"
                  variants={variants}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
                >
                  <strong>
                    <i>
                      <span className="green-text">ECO</span>FRIENDLY
                    </i>
                  </strong>
                </motion.h2>
                <motion.h2
                  className="text-white m-plus-rounded-1c-regular product-h2 not-mobile"
                  initial="hiddenX"
                  whileInView="visibleBot"
                  variants={variants}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.8, ease: "easeInOut" }}
                >
                  <strong>
                    <i>
                      <span className="green-text">IMPER</span>MEABLE
                    </i>
                  </strong>
                </motion.h2>
              </div>
            </div>
            <div className="col-0 col-lg-6 p-lg-5 mt-5 p-5 not-mobile ">
              <motion.h2 className="text-center text-light m-plus-rounded-1c-regular"
                initial={{ y: "35dvh", left: "30%", opacity: 0 }}
                whileInView={{ opacity: 1, right: "15%" }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
              >
                Noticias recientes
                <div className="row">
                  <hr className="col-4" style={{ color: "transparent" }} />
                  <hr className="col-4" />
                  <hr className="col-4" style={{ color: "transparent" }} />
                </div>
              </motion.h2>

              <motion.div className="card mt-2 bg-blur"
                initial={{ y: "35dvh", width: "70%", left: "30%", opacity: 0 }}
                whileInView={{ left: "15%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}>
                <Link smooth to="/Noticias">
                  <div className="card-body text-white">
                    <h5 className="card-title">ASFALTO EN FRÍO: UNA FORMA DE COMBATIR EL CALENTAMIENTO GLOBAL
                    </h5>
                    <p className="card-text">Un reciente estudio del MIT destaca el impacto positivo del asfalto frío en la reducción de emisiones de gases de efecto invernadero y la disminución de la temperatura en ciudades como Boston y Phoenix...</p>
                    <p className="card-text"><small className="text-light">26 de Diciembre de 2023</small></p>
                  </div>
                </Link>
              </motion.div>
              <motion.div className="card mt-2 bg-blur"
                initial={{ y: "35dvh", width: "70%", left: "30%", opacity: 0 }}
                whileInView={{ left: "15%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}>
                <Link smooth to="/Noticias">
                  <div className="card-body text-white">
                    <h5 className="card-title">ASFALTO EN FRÍO: UNA FORMA DE COMBATIR EL CALENTAMIENTO GLOBAL
                    </h5>
                    <p className="card-text">Un reciente estudio del MIT destaca el impacto positivo del asfalto frío en la reducción de emisiones de gases de efecto invernadero y la disminución de la temperatura en ciudades como Boston y Phoenix...</p>
                    <p className="card-text"><small className="text-light">26 de Diciembre de 2023</small></p>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
export default FirstView;
