import { motion } from "framer-motion";

function UsosComponent(props) {


  const leftIn = {
    hidden: { x:"-2%" },
    visible: { x:0},
  };
  const rightIn = {
    hidden: { x:"2%" },
    visible: {x:-5},
  };
  const variantsMap = {
    leftIn: leftIn,
    rightIn: rightIn,
  };
  let variants = variantsMap[props.animation] || {};
  const classContainer = `col-12 col-lg-8 p-lg-5 pt-lg-4 pb-lg-4 p-2 mt-2 u-card ${props.classContainer}`;

  return (
    <motion.div style={{ height: "18vh" }} className={classContainer}
    initial="hidden"
    whileInView="visible"
    variants={variants}
    transition={{ delay: 0.1, type: "spring", stiffness:500, damping: 2500  }}>
      <div className="">
        <div className="text-center text-light">
          {/* <i
            className="fa-solid fa-circle-down pt-4 pb-3 u-text"
            style={{ fontSize: "2em", left:"10vw" }}
          ></i> */}
        </div>
        <h2 className="text-center usos-t m-lg-5 p-4 mt-lg-3 pe-lg-5 pe-lg-5 text-light p-lg-3">{props.text}</h2>
      </div>
    </motion.div>
  );
}

export default UsosComponent;
