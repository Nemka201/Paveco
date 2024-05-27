import React, { useState } from "react";

function UsosComponent(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const classContainer = `col-12 col-lg-6 ${
    props.classContainer
  } p-5 usos-c u-card ${isFlipped ? "flipped" : ""}`;

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const backCardStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.cardBack})`,
  };

  return (
    <div style={{ height: "25vh" }} className={classContainer}>
      <div className="">
        <div className="text-center pb-4">
          <i
            className="fa-solid fa-circle-down text-center pt-0 pb-4 usos-t"
            style={{ fontSize: "2em" }}
          ></i>
        </div>
        <h2 className="text-center usos-t">{props.text}</h2>
      </div>
      <div className="card-back" style={backCardStyle}></div>
    </div>
  );
}

export default UsosComponent;
