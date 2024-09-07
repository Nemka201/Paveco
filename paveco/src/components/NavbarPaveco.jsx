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
              width="60"
              height="45"
            ></img>
          </a>
          <button className="navbar-toggler btn-bars" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa-solid fa-bars p-1"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-center pe-md-5" id="navbarNavAltMarkup">
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
