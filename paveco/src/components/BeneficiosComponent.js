import BeneficiosCard from "./BeneficiosCard";
import CarouselBeneficios from "./CarouselBeneficios";

function BeneficiosComponent() {
  return (
    <>
      <div className="container-fluid pe-4 ps-4">
        <div className="row border-top-10">
          <div className="col-12 p-0 p-lg-3">
            <h1 className="titulo text-center mt-5">
              BENEFICIOS Y VENTAJAS
              </h1>
              <div className="row">
                <div className="col-4 col-md-1"></div>
                <div className="col-md-10 col-12">
                <CarouselBeneficios />

                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeneficiosComponent;
