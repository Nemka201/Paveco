import React, { useState } from "react";
import { motion } from "framer-motion";

function BeneficiosCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(prevState => !prevState);
  };
  const backCardStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.cardBack})`,
  };
  const leftIn = {
    hidden: { transform: "rotateY(-180deg)", x:-150 },
    visible: { transform: "rotateY(0deg)", x:0},
  };
  const bottomIn = {
    hidden: { y:0 },
    visible: { y:0 },
  };
  const rightIn = {
    hidden: { transform: "rotateY(180deg)", x:150 },
    visible: { transform: "rotateY(0deg)", x:0},
  };
  const logoStyle = {
    width: "calc(10px + 2.4vw)",
  };
  const variantsMap = {
    leftIn: leftIn,
    bottomIn: bottomIn,
    rightIn: rightIn,
  };
  let variants = variantsMap[props.animation] || {};

  return (
    <div className="pe-lg-2 ps-1 pe-1 mt-1 col-4 card-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ delay: 0.3, type: "spring", stiffness: 50, damping: 20, duration: 0.2, ease:"linear"  }}
        className={`b-card ${props.className} mb-2 ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleClick}
      >
        <div className="card-front">
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio}
          </h4>
          <div className="text-center not-mobile p-lg-1">
            {props.imagen && (
              <img
                src={require(`../assets/beneficios/${props.imagen}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio2}
          </h4>
          <div className="text-center not-mobile p-lg-1">
            {props.imagen2 && (
              <img
                src={require(`../assets/beneficios/${props.imagen2}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio3}
          </h4>
          <div className="text-center not-mobile p-lg-1 pt-0">
            {props.imagen3 && (
              <img
                src={require(`../assets/beneficios/${props.imagen3}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio4}
          </h4>
          <div className="text-center not-mobile p-lg-1">
            {props.imagen4 && (
              <img
                src={require(`../assets/beneficios/${props.imagen4}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
        </div>
        <div className="card-back" style={backCardStyle}></div>
      </motion.div>
    </div>
  );
}

export default BeneficiosCard;
