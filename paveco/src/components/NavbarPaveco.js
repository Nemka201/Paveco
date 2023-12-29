import logo from "../assets/pavecoIcon.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-gradient">
        <div className="container-fluid text-center">
          <div className="col-sm-2 col-md-4 col-lg-6 col-xl-7 text-start">
            <a className="navbar-brand ms-4" href="/">
              <img src={logo} alt="Bootstrap" width="145" height="115" className="drop-shadow animacion-img"></img>
            </a>            
          </div>
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li> 
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/Beneficios">
                    Beneficios
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/Productos-y-Servicios">
                    Productos Servicios
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/Usos">
                    Usos
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link ficha-t" href="/Ficha-Tecnica">
                    Ficha Técnica
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/Noticias">
                    Noticias
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-2" href="/Contacto">
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
