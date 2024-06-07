import logo from "../assets/pavecoIcon.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-blur sticky-top text-light">
        <div className="container-fluid roboto-regular">
          <a className="navbar-brand" href="/">              
          <img
            src={logo}
            alt="Bootstrap"
            width="75"
            height="54"
          ></img>
          </a>
          <button className="navbar-toggler bg-white-traslucent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-center pe-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link smooth to="/#home" className="nav-link" aria-current="page">
                  Inicio
                </Link>
                <Link smooth to="/#nosotros" className="nav-link" aria-current="location">
                  Nosotros
                </Link>
                <Link to="/#beneficios" className="nav-link" aria-current="location">
                  Beneficios
                </Link>
                <Link smooth to="/#usos" className="nav-link" aria-current="location">
                  Usos
                </Link>
                <Link smooth to="/Ficha-tecnica" className="nav-link" aria-current="location">
                  Ficha Técnica
                </Link>
                <Link smooth to="/Noticias" className="nav-link" aria-current="location">
                  Noticias
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
