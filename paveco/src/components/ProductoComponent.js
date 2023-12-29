import Footer from "./Footer";
import Navbar from "./NavbarPaveco";

function ProductoComponent(props) {
  const classContainer = `col-6 col-md-6 col-lg-4 col-xl-4 ${props.classContainer} p-0`;
  const image = props.imagen;
  return (
    <>
      <div className={classContainer}>
        <section>
            {/* <div className="row prod-card text-start pb-5 pt-4 col-xl-6"> */}
              {/* <div className="col-12 col-md-6">
                <h1>{props.titulo}</h1>
                <p>{props.descripcion}</p>                
                <h5>${props.precio}</h5>
              </div> */}
              <div className="col-12 col-md-6 pe-5 ps-3 pb-5 pt-4">
              {image ? (
                  <img
                    src={require(`../assets/productos/${image}`)}
                    alt={props.titulo}
                    className="producto-imagen p-0"
                  />
                ) : null}
              </div>
            {/* </div> */}
        </section>
      </div>
    </>
  );
}

export default ProductoComponent;
