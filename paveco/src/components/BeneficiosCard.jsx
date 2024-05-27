import React, { useState } from "react";
import { motion, transform } from "framer-motion";

function BeneficiosCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lastEnter, setLastEnter] = useState(0);

  const handleMouseEnter = () => {
    const now = Date.now();
    const timeSinceEnter = now - lastEnter;
    if (timeSinceEnter > 1000) {
      setIsFlipped(true);
      setLastEnter(now); 
    }
  };

  const handleMouseLeave = () => {
    const now = Date.now();
    const timeSinceEnter = now - lastEnter;
    if (timeSinceEnter > 1000) { 
      setIsFlipped(false);
    } else {
      setTimeout(() => {
        setIsFlipped(false);
      }, 2500 - timeSinceEnter); 
    }
  };
  const backCardStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.cardBack})`,
  };
  const leftIn = {
    hidden: { transform: "rotateY(-180deg)", x:-150 },
    visible: { transform: "rotateY(-5deg)", x:0},
  };
  const bottomIn = {
    hidden: { y:0 },
    visible: { y:-10, height: "101.5%" },
  };
  const rightIn = {
    hidden: { transform: "rotateY(180deg)", x:150 },
    visible: { transform: "rotateY(5deg)", x:0},
  };
  const logoStyle = {
    width: "7.2vh",
  };
  const variantsMap = {
    leftIn: leftIn,
    bottomIn: bottomIn,
    rightIn: rightIn,
  };
  const heightText = {
    // height: "3.1em"
  }
  let variants = variantsMap[props.animation] || {};

  return (
    <div className="pe-lg-3 pt-0 ps-2 pe-3 mt-1 col-12 col-lg-4 col-xl-4 card-container m-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ delay: 0.3, type: "spring", stiffness: 50, damping: 20, duration: 0.2, ease:"linear"  }}
        className={`b-card ${props.className} mb-2 ${
          isFlipped ? "flipped" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-front">
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s" style={heightText}>
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
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s" style={heightText}>
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
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s" style={heightText}>
            {props.beneficio3}
          </h4>
          <div className="text-center not-mobile p-lg-1">
            {props.imagen3 && (
              <img
                src={require(`../assets/beneficios/${props.imagen3}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-2 pe-2 pt-1 pe-lg-4 ps-lg-4 pt-lg-2 pb-0 m-plus-rounded-1c-regular text-black-s" style={heightText}>
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
