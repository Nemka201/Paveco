import { HashLink as Link } from "react-router-hash-link";

function ModalNavbar(props) {
  const { visible } = props;
  const closeModal = () => {
    props.setVisible(false);
  };
  return (
    <>
      <div className="modal sticky-bottom" style={{ display: visible ? "flex" : "none", justifyContent:"center"}}>
        <div className="container-fluid">
          <div className="row p-5">
            <div className="col-12">
              <ul className="navbar-nav">
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5">
                  <Link smooth to="/" onClick={closeModal}>
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5" onClick={closeModal}>
                    <Link smooth to="/#beneficios">
                      Beneficios
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5">
                  <Link smooth to="/Productos-y-Servicios">
                      Productos y Servicios
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5" onClick={closeModal}>
                    <Link smooth to="/#usos">
                      Usos
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5">
                    <Link smooth to="/#fichatecnica" onClick={closeModal}>
                      Ficha Técnica
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <a className="nav-link pe-5">
                    <Link smooth to="/Noticias" onClick={closeModal}>
                      Noticias
                    </Link>
                  </a>
                </li>
                <li className="nav-item mt-0 pe-4">
                  <div>
                    <i
                      onClick={closeModal}
                      className="btn-x nav-link pe-5"
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
