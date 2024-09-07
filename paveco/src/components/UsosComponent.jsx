import { motion } from "framer-motion";

function UsosComponent(props) {


  const leftIn = {
    hidden: { x:"-2%", opacity:0 },
    visible: { x:0, opacity:1},
  };
  const rightIn = {
    hidden: { x:"2%", opacity:0 },
    visible: {x:0, opacity:1},
  };
  const variantsMap = {
    leftIn: leftIn,
    rightIn: rightIn,
  };
  let variants = variantsMap[props.animation] || {};
  const classContainer = `col-12 col-lg-8 p-lg-1 p-2 mb-0 u-card item ${props.classContainer}`;

  return (
    <motion.div className={classContainer}
    initial="hidden"
    whileInView="visible"
    variants={variants}
    transition={{ delay: 0.5, duration:1, ease:"linear" }}>
        <h2 className="text-center m-lg-5 mt-lg-3 pe-lg-5 pe-lg-5 text-light p-lg-3">{props.text}</h2>
    </motion.div>
  );
}

export default UsosComponent;
