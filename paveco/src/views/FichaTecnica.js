import FichaTecnicaComponent from "../components/FichaTecnicaComponent";
import { motion } from "framer-motion";
import motionVariants from "../motionVariants";

function FichaTecnica() {
  return (
    <>
      <motion.div>
        <FichaTecnicaComponent />
      </motion.div>
    </>
  );
}

export default FichaTecnica;
