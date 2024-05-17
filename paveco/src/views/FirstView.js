import { HashLink as Link } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";

function FirstView() {
  const variants = {
    hiddenY: { opacity: 0, y: "-20vh" },
    visibleY: { opacity: 1, y: "-20vh" },
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
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="text-background container-fluid ps-5 pt-5"
        >
          <div className="row pt-5 ps-0 pe-4 ps-md-5">
            <div className="bolsa"></div>
            <div className="col-12 col-md-8 col-lg-6 text-black mt-5 pt-5 ps-md-5">
              <h1 className="ecopav mt-0 pb-2 pt-5 mt-5 m-plus-rounded-1c-regular">
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
                Está disponible en prácticas bolsas de 25 kg, Big Bags de 500 kg
                y a granel.
              </h5>
              <Link smooth to="/Contacto">
                <button className="btn btn-contacto roboto-regular">
                  ¡Contactanos!
                </button>
              </Link>
              <div
                className="rectangulito"
                initial="hiddenX"
                whileInView="visibleRectangulo"
                variants={variants}
                transition={{ duration: 0.3, delay: 1.3, ease: "easeInOut" }}
              >
                <motion.h2
                  className="text-white m-plus-rounded-1c-regular product-h2 not-mobile"
                  initial="hiddenX"
                  whileInView="visibleTop"
                  variants={variants}
                  transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
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
                  transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
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
                  transition={{ duration: 0.3, delay: 1.3, ease: "easeInOut" }}
                >
                  <strong>
                    <i>
                      <span className="green-text">IMPER</span>MEABLE
                    </i>
                  </strong>
                </motion.h2>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
export default FirstView;
