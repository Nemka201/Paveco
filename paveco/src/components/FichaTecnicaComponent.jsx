import tabla from "../assets/img/ficha1.png"
import tabla1 from "../assets/img/especificaciones-1.png";
import tabla2 from "../assets/img/especificaciones-2.png";
import tabla1Mobile from "../assets/img/especificaciones-1-mobile.png";
import tabla2Mobile from "../assets/img/especificaciones-2-mobile.png";
import { motion } from "framer-motion";

function FichaTecnicaComponent() {
  return (
    <>
      <div className="container-fluid text-center pe-md-4 ps-md-4 ps-2 pe-2 pt-0 mt-0">
        <div className="container">
          <div className="row pb-0">
            <div className="col-12 text-white pt-5">
              <section>
                <div className="container border-top-10 pt-5">
                  <div className="row">
                    <motion.div className="col-12">
                      <h1 className="pb-3 m-plus-rounded-1c-regular">FICHA TÉCNICA</h1>
                      <h3 className="pb-2 m-plus-rounded-1c-regular">ESPECIFICACIONES</h3>
                      <p className="roboto-light ficha-text">
                        Nuestro producto, comercializado en Argentina como
                        Paveco, ha demostrado su eficacia desde 1989 en más de
                        41 países de América del Sur y Caribe. Contamos con
                        certificaciones internacionales, cumpliendo con
                        estándares como AASHTO M208, ASTM D2397 y normativas de
                        diversos departamentos de transporte, como también
                        estudios internacionales de CONCREMAT, PASSARELLI y JBA.
                      </p>
                      <motion.img
                        src={tabla1}
                        alt="Especificaciones"
                        className="i-tabla mt-3 mb-5"
                        initial={{ x: "0" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      ></motion.img>
                      <motion.img
                        src={tabla1Mobile}
                        alt="Especificaciones"
                        className="i-tabla-mobile mt-3 mb-5"
                        style={{ width: "100%" }}
                        initial={{ x: "0" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      ></motion.img>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row p-0 pb-0">
            <div className="col-12 text-white pb-5">
              <section>
                <h2 className="pt-4 text-center mb-5 m-plus-rounded-1c-regular" style={{ fontSize: "280%" }}
                >MANEJO</h2>
                <motion.h3 className="h3-beneficios mt-3 text-start roboto-regular ms-3"
                  initial={{ x: "-30dvh" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>Evite
                  sobrecalentar la emulsión.
                </motion.h3>
                <motion.h3 className="h3-beneficios mt-3 text-start roboto-regular ms-3"
                  initial={{ x: "-30dvh" }}
                  whileInView={{ x: 0}}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}>
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>Proteja la
                  emulsión de la congelación.
                </motion.h3>
                <motion.h3 className="h3-beneficios mt-3 text-start roboto-regular ms-3"
                  initial={{ x: "-30dvh" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}>
                  <i class="fa-solid fa-circle-arrow-right pe-3"></i>
                  Evite el bombeo excesivo con bombas de alto cizallamiento.
                </motion.h3>
                <div className="img-container text-center pt-md-5">
                  <motion.img
                    src={tabla2}
                    alt="Especificaciones"
                    className="i-tabla mt-3 mb-5"
                    initial={{ x: 0 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  ></motion.img>
                  <motion.img
                    src={tabla2Mobile}
                    alt="Especificaciones"
                    className="i-tabla-mobile mt-3 mb-5 pe-3"
                    initial={{ x: "-30dvh" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.img>
                  <motion.img
                    src={tabla}
                    alt="Especificaciones"
                    className="i-tabla mt-3 mb-5"
                    initial={{ x: "-30dvh" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.img>
                  <motion.img
                    src={tabla}
                    alt="Especificaciones"
                    className="i-tabla-mobile mt-3 mb-5 pe-3"
                    initial={{ x: "-30dvh" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.img>
                </div>
              </section>
              <div className="mb-3"></div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default FichaTecnicaComponent;
