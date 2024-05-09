import { HashLink as Link } from "react-router-hash-link";
import { motion, useInView } from "framer-motion";

function FirstView() {
  const variants = {
    hidden: { opacity: 0, y: '-20vh' },
    visible: { opacity: 1, y: '-20vh' },
  };
  return (
    <>
      <div className="first-background pt-5" id="home">
        <div className="background-image"></div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="text-background container-fluid ps-5 pt-5"
        >
          <div className="row pt-5 ps-0 pe-4 ps-md-5">
            <div className="bolsa"></div>
            <div className="col-12 col-md-8 text-black mt-5 pt-5 ps-md-5">
              <h1 className="ecopav mt-0 pb-2 pt-5 mt-5 m-plus-rounded-1c-regular ">PAVECO</h1>
              <h5 className="text-white roboto-regular">
                Específicamente diseñado para soportar una amplia gama de
                temperaturas y climas.
              </h5>
              <h5 className="roboto-regular text-white pb-4">
                ECOPAV es uno de los productos más seguros y efectivos
                disponibles en el mercado americano.
              </h5>
              <Link smooth to="/Contacto">
                <button className="btn btn-contacto roboto-regular">
                  ¡Contactanos!
                </button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
export default FirstView;
