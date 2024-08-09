import React, { useState } from "react";

function BeneficiosCardMobile(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prevState => !prevState);
  };


  const backCardStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.cardBack})`,
  };
  const logoStyle = {
    width: "11%",
  };

  return (
    <div className="pe-lg-3 pt-0 ps-0 pe-0 mt-1 col-12 card-container m-0">
      <div className={`b-card-m ${props.className} mb-2 ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleClick}
      >
        <div className="card-front">
          <h4 className="ps-3 pe-2 pt-4 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio}
          </h4>
          <div className="text-end me-4">
            {props.imagen && (
              <img
                src={require(`../assets/beneficios/${props.imagen}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4"/>
          <h4 className="ps-3 pe-2 pt-2 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio2}
          </h4>
          <div className="text-end me-4">
            {props.imagen2 && (
              <img
                src={require(`../assets/beneficios/${props.imagen2}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-3 pe-2 pt-2 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio3}
          </h4>
          <div className="text-end me-4">
            {props.imagen3 && (
              <img
                src={require(`../assets/beneficios/${props.imagen3}`)}
                alt="Imagen de beneficio"
                style={logoStyle}
              />
            )}
          </div>
          <hr className="me-4 ms-4" />
          <h4 className="ps-3 pe-2 pt-2 pe-lg-4 ps-lg-4 pt-lg-4 pb-0 m-plus-rounded-1c-regular text-black-s">
            {props.beneficio4}
          </h4>
          <div className="text-end me-4">
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
      </div>
    </div>
  );
}

export default BeneficiosCardMobile;
