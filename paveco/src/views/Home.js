import Banner from "../components/Banner";
import Navbar from "../components/NavbarPaveco";
import AlianzaEstrategica from "../components/AlianzaEstrategica";
import Footer from "../components/Footer";
import Presentacion from "../components/Presentacion";
import Beneficios from "../views/Beneficios";
import Usos from "../views/Usos";
import FichaTecnica from "../views/FichaTecnica";
import React, { useRef, useState } from "react";
import FirstView from "./FirstView";

function Home() {
  const viewsRef = useRef([]);
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const handleScroll = (event) => {
    event.preventDefault();
    const { deltaY } = event;
    const direction = deltaY > 0 ? 1 : -1;
    const nextViewIndex = currentViewIndex + direction;

    if (nextViewIndex >= 0 && nextViewIndex < viewsRef.current.length) {
      viewsRef.current[nextViewIndex].scrollIntoView({ behavior: "smooth" });
      setCurrentViewIndex(nextViewIndex);
    }
  };

  return (
    <div className="home">
      <div className="view" ref={(el) => (viewsRef.current[0] = el)} tabIndex={-1}
      >
        <FirstView />
      </div>{" "}
      {/* <button onClick={irArriba} id="upButton" title="Ir arriba">
        <i class="fa-solid fa-arrow-up"></i>
      </button> */}
      <div className="view" ref={(el) => (viewsRef.current[1] = el)} tabIndex={-1}>
        <FirstView />
      </div>{" "}
      <div className="view" ref={(el) => (viewsRef.current[2] = el)} tabIndex={-1}>
        <FirstView />
      </div>{" "}
      <div className="view" ref={(el) => (viewsRef.current[3] = el)} tabIndex={-1}>
        <FirstView />
      </div>{" "}
      <div className="view" ref={(el) => (viewsRef.current[4] = el)} tabIndex={-1}>
        <FirstView />
      </div>{" "}
      <div className="view" ref={(el) => (viewsRef.current[5] = el)} tabIndex={-1}>
        <FirstView />
      </div>{" "}
    </div>
    //     <div
    //     className="view"
    //     ref={(el) => (viewsRef.current[1] = el)}
    //     tabIndex={-1}
    //   ></div>{" "}
    //   <Navbar />
    //   <Presentacion />
    //   <div
    //     className="view"
    //     ref={(el) => (viewsRef.current[2] = el)}
    //     tabIndex={-1}
    //   ></div>{" "}
    //   <Navbar />
    //   <AlianzaEstrategica />
    //   <div
    //     className="view"
    //     ref={(el) => (viewsRef.current[3] = el)}
    //     tabIndex={-1}
    //   ></div>{" "}
    //   <Navbar />
    //   <Beneficios />
    //   <div
    //     className="view"
    //     ref={(el) => (viewsRef.current[4] = el)}
    //     tabIndex={-1}
    //   ></div>{" "}
    //   <Navbar />
    //   <Usos />
    //   <div
    //     className="view"
    //     ref={(el) => (viewsRef.current[5] = el)}
    //     tabIndex={-1}
    //   ></div>{" "}
    //   <Navbar />
    //   <FichaTecnica />
    //   <Footer />
    // </div>
  );

  function irArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default Home;
