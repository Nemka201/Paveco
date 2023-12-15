import logo from "../assets/pavecoIcon.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="col-7">
            <a className="navbar-brand ms-4" href="#">
              <img src={logo} alt="Bootstrap" width="100" height="88.5"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-5">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Paveco
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Beneficios
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="#">
                    Usos
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link ficha-t" href="/Ficha-Tecnica">
                    Ficha Técnica
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contacto">
                    <button className="btn btn-contacto">CONTACTO</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
