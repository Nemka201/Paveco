import CarouselBeneficios from "./CarouselBeneficios";

function BeneficiosComponent() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 p-lg-3 mt-5">
            <h1 className="titulo text-center text-white mt-4">
              BENEFICIOS
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
