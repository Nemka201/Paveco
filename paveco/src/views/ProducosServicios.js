import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";

function ProductosServicios() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 text-decoration-underline titulo-beneficio text-center">
            <h1 className="text-normal">Productos y Servicios</h1>
            
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductosServicios;
