import Navbar from "../components/NavbarPaveco";
import { HashLink as Link } from "react-router-hash-link";
import React, { useRef, useState } from "react";
import FirstView from "./FirstView";
import SecondView from "./SecondView";
import ThirdView from "./ThirdView";
import LastView from "./LastView";
import { motion } from "framer-motion";

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
    <motion.div className="home">
      <div className="left-line"></div>
      <div className="right-line"></div>
      <Navbar />
      <div
        className="view"
        ref={(el) => (viewsRef.current[0] = el)}
        tabIndex={-1}
      >
        <FirstView />
      </div>{" "}
      <Link smooth to="/#home">
        <button id="upButton" title="Ir arriba">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <a href="https://wa.me/message/PWL5RB5BZEEKJ1" className="wsp" title="Enviar un WhatsApp!">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </Link>
      <div
        className="view"
        ref={(el) => (viewsRef.current[1] = el)}
        tabIndex={-1}
      >
        <SecondView />
      </div>{" "}
      <div
        className="view"
        ref={(el) => (viewsRef.current[2] = el)}
        tabIndex={-1}
      >
        <ThirdView />
      </div>{" "}
      <div
        className="view"
        ref={(el) => (viewsRef.current[3] = el)}
        tabIndex={-1}
      >
        <LastView />
      </div>{" "}
      <div
        className="view"
        ref={(el) => (viewsRef.current[4] = el)}
        tabIndex={-1}
      >
        <FirstView />
      </div>{" "}
      <div
        className="view"
        ref={(el) => (viewsRef.current[5] = el)}
        tabIndex={-1}
      >
        <FirstView />
      </div>{" "}
    </motion.div>
  );
}

export default Home;
