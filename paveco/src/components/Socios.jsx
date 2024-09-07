import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aguas_norte from '../assets/logos_clientes/aguas_norte.png'
import agd from '../assets/logos_clientes/agd.jfif'
import aysa from '../assets/logos_clientes/AYSA.png'
import caasd from '../assets/logos_clientes/caasd.png'
import cobra_group from '../assets/logos_clientes/cobra_group.png'
import essap from '../assets/logos_clientes/essap.jfif'
import estadio_unico from '../assets/logos_clientes/estadio_unico.jpg'
import municipalidad_corrientes from '../assets/logos_clientes/municipalidad_corrientes.png'
import municipalidad_tigre from '../assets/logos_clientes/municipalidad_tigre.jpg'
import municipio_matanza from '../assets/logos_clientes/municipio_matanza.jpg'
import municipio_vicente_lopez from '../assets/logos_clientes/municipio_vicente_lopez.png'
import san_lorenzo from '../assets/logos_clientes/san_lorenzo.png'
import sapem from '../assets/logos_clientes/sapem.png'
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";


function Socios() {
  const logoStyle = {
    height: "200px",
    objectFit: "contain"
  };
  return (
    <div className="view bg-white-s pt-md-4 pt-0" style={{ height: "100vh" }}>
      <div className="container pb-5 mt-md-5 mt-0 pt-md-5 pt-1">
        <div className="row pt-5 mt-5">
          <motion.div className="col-12 pt-md-5 mt-md-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
          >
            <h2 className="m-plus-rounded-1c-regular text-black text-center mt-md-5 mt-2 mb-md-0 mb-5 titulo">
              ALGUNOS DE NUESTROS CLIENTES
            </h2>
            <Carousel
              showArrows={true}
              infiniteLoop
              showStatus={false}
              autoPlay
              emulateTouch
              interval={3000}
              selectedItem={6}
              showThumbs={false}
              centerMode
              centerSlidePercentage={25}
            >
              <div className="m-3 pb-3">
                <img
                  src={caasd}
                  alt="CAASD"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={aguas_norte}
                  alt="Aguas del Norte"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={aysa}
                  alt="AYSA"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={agd}
                  alt="AGD"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={cobra_group}
                  alt="Grupo Cobra"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={municipio_matanza}
                  alt="Municipio de la Matanza"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={essap}
                  alt="ESSAP"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={estadio_unico}
                  alt="Estadio Unico"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={municipalidad_corrientes}
                  alt="Municipalidad de Corrientes"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={municipalidad_tigre}
                  alt="Municipalidad de Tigre"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={municipio_vicente_lopez}
                  alt="Municipio Vicente López"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={san_lorenzo}
                  alt="San Lorenzo"
                  style={logoStyle}
                />
              </div>
              <div className="m-3">
                <img
                  src={sapem}
                  alt="SAPEM"
                  style={logoStyle}
                />
              </div>
            </Carousel>
          </motion.div>
          <div className="row">
            <div className="col-12 text-end pe-4">
              <Link smooth to="/Ficha-tecnica" className="me-4" aria-current="location">
                Ficha Técnica
              </Link>
              <button className="btn-noticias p-2 mt-5">Ver Noticias</button>

            </div>

          </div>
        </div>



      </div>

    </div>


  );
}
export default Socios;