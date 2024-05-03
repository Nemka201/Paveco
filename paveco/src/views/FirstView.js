import { HashLink as Link } from "react-router-hash-link";
function FirstView() {
  return (
    <>

      <div className="first-background pt-5" id="home">
        <div className="background-image"></div>
        <section className="text-background container-fluid ps-5 pt-5">
          <div className="row pt-5 ps-0 pe-4 ps-md-5">
            <div className="col-12 col-md-8 text-black mt-5 pt-5 ps-md-5">
              <h1 className="ecopav mt-0 pb-4 pt-5 mt-5">
                PAVECO
              </h1>
              <h5 className="text-white mt-2 roboto-regular">
                Específicamente diseñado para soportar una amplia gama de
                temperaturas y climas.</h5> 
                <h5 className="roboto-regular text-white pb-5">ECOPAV es uno de los productos
                más seguros y efectivos disponibles en el mercado americano.
              </h5>
              <Link smooth to="/Contacto">
                  <button className="btn btn-contacto roboto-regular">¡Construyamos juntos!</button>
                </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default FirstView;
