import logo from "../assets/pavecoIcon.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-gradient">
        <div className="container-fluid text-center">
          <div className="col-sm-2 col-md-4 col-lg-6 col-xl-6 text-start navbar-icon">
            <a className="navbar-brand ms-4" href="/">
              <img src={logo} alt="Bootstrap" width="145" height="115" className="drop-shadow"></img>
            </a>            
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 text-shadow">
              <ul className="navbar-nav align-items-center ps-5 pe-3" id="navbar-links">
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li> 
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link" href="/Beneficios">
                    Beneficios
                  </a>
                </li>
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link" href="/Productos-y-Servicios">
                    Productos Servicios
                  </a>
                </li>
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link" href="/Usos">
                    Usos
                  </a>
                </li>
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link ficha-t" href="/Ficha-Tecnica">
                    Ficha Técnica
                  </a>
                </li>
                <li className="nav-item mt-2 pe-1">
                  <a className="nav-link" href="/Noticias">
                    Noticias
                  </a>
                </li>
                <li className="nav-item pe-1">
                  <a className="nav-link mt-2" href="/Contacto">
                    <button className="btn btn-contacto text-shadow box-shadow">CONTACTO</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
