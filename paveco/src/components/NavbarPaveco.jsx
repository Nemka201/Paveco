import logo from "../assets/pavecoIcon.png";
import React, { useState } from "react";
import ModalNavbar from "./ModalNavbar";
import Boton from "./Boton";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [modalVisible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!modalVisible);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-blur sticky-top ">
        <div className="container-fluid text-center">
          <div className="col-sm-2 col-md-4 col-lg-6 col-xl-6 text-start navbar-icon">
            <a className="navbar-brand ms-4 pt-0" href="/">
              <img
                src={logo}
                alt="Bootstrap"
                width="80"
                height="55"
              ></img>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 ">
            <ul
              className="navbar-nav align-items-center roboto-regular ps-5 pe-3 justify-content-end"
              id="navbar-links"
            >
              <li className="nav-item mt-0 pe-sm-1 ">
                <div>
                  <Boton toggleModal={toggleModal} />
                  <ModalNavbar visible={modalVisible} setVisible={setVisible}/>
                </div>
              </li>
              <li className="nav-item mt-0 pe-1 nav-lg-item ">
                  <a className="nav-link">
                  <Link smooth to="/#home">
                      Inicio
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-1 nav-lg-item">
                  <a className="nav-link">
                    <Link smooth to="/#beneficios">
                      Nosotros
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe- nav-lg-item">
                  <a className="nav-link">
                  <Link smooth to="/Productos-y-Servicios">
                      Beneficios
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-1 nav-lg-item">
                  <a className="nav-link">
                    <Link smooth to="/#usos">
                      Usos
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-1 nav-lg-item">
                  <a className="nav-link">
                    <Link smooth to="/#fichatecnica">
                      Ficha Técnica
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-1 nav-lg-item">
                  <a className="nav-link">
                    <Link smooth to="/Noticias">
                      Noticias
                    </Link>
                  </a>
                </li>
              <li className="nav-item pe-1 mt-0 mb-2">
                {/* <Link smooth to="/Contacto" className="nav-link mt-2">
                  <button className="btn btn-contacto">CONTACTO</button>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
