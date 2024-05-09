import ContactoForm from "../components/ContactoForm";
import Navbar from "../components/NavbarPaveco";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import motionVariants from "../motionVariants";

function Contacto() {
  return (
    <>
      <Navbar />
      <motion.div
        className="container-fluid contacto text-oswald p-1 pt-4 background-form"
      >
        <div className="row ps-lg-2 pe-lg-2" style={{ margin: "0px" }}>
          <div className="col-lg-3"></div>
          <div className="col-12 col-lg-6">
            <ContactoForm />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Contacto;
