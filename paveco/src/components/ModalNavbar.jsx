import { HashLink as Link } from "react-router-hash-link";

function ModalNavbar(props) {
  const { visible } = props;
  const closeModal = () => {
    props.setVisible(false);
  };
  return (
    <>
      <div className="modal sticky-bottom" style={{ display: visible ? "inline-block" : "none", justifyContent:"end"}}>
        <div className="container pt-4">
          <div className="row text-end">
            <div className="col-12">
              <ul className="navbar-nav">
                <li className="nav-item mt-0">
                  <a className="nav-link">
                  <Link smooth to="/" onClick={closeModal}>
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 ">
                  <a className="nav-link" onClick={closeModal}>
                    <Link smooth to="/#beneficios">
                      Beneficios
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0">
                  <a className="nav-link">
                  <Link smooth to="/Productos-y-Servicios">
                      Productos y Servicios
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0">
                  <a className="nav-link" onClick={closeModal}>
                    <Link smooth to="/#usos">
                      Usos
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0">
                  <a className="nav-link">
                    <Link smooth to="/#fichatecnica" onClick={closeModal}>
                      Ficha Técnica
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 ">
                  <a className="nav-link">
                    <Link smooth to="/Noticias" onClick={closeModal}>
                      Noticias
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 ">
                  <div>
                    <i
                      onClick={closeModal}
                      className="btn-x nav-link"
                    >
                      <i class="fa-solid fa-x"></i>
                    </i>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalNavbar;
