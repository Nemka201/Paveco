import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";
import ProductoComponent from "../components/ProductoComponent";

function ProductosServicios() {
  return (
    <>
      <Navbar />
      <div className="container-fluid ps-4 pe-4 pt-4">
        <div className="row bg-black border-top-15">
          <div className="col-12 titulo text-center">
            <h1 className="text-white">Productos</h1>
            <div className="row ps-5 pe-1 pt-4">
              <ProductoComponent
                classContainer="text-black"
                titulo="Bolsa 25Kg"
                descripcion="Toda la calle"
                precio="4000"
                imagen="bolsa-25kg.jpg"
              />
              <ProductoComponent
                classContainer="text-black"
                titulo="Bolsa 500Kg"
                descripcion="Toda la calle"
                precio="4000"
                imagen="bolsa-500kg.jpg"
              />
              <ProductoComponent
                classContainer="text-black"
                titulo="Gasoil"
                descripcion="Toda la calle"
                precio="4000"
                imagen="gasoil-g2.jpg"
              />
              <ProductoComponent
                classContainer="text-black"
                titulo="Contenedores"
                descripcion="Toda la calle"
                precio="4000"
                imagen="contenedores.jpg"
              />
              <ProductoComponent
                classContainer="text-black"
                titulo="Equipos AC-30"
                descripcion="Toda la calle"
                precio="4000"
                imagen="equipos-ac30.jpg"
              />
              <ProductoComponent
                classContainer="text-black"
                titulo="Contenedores Maritimos"
                descripcion="Toda la calle"
                precio="4000"
                imagen="containers-maritimos.jpg"
              />
              <h1 className="pt-5 text-white">Servicios</h1>
              <div className="row ps-5 pe-1 pt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductosServicios;
