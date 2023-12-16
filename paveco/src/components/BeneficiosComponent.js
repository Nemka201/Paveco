import BeneficiosCard from "./BeneficiosCard";

function BeneficiosComponent() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="text-normal text-center text-decoration-underline">
              BENEFICIOS Y VENTAJAS
            </h1>
            <div className="row">
              <BeneficiosCard
                b1="No contamina, no emite gases no daña la salud de los trabajadores."
                b2="Producto modificado con bio-polímeros."
                b3="Se puede fabricar el asfalto frio EcoPAV en cualquier lugar cercano a la obra."
                b4="Aplicable en cualquier clima: todas las estaciones."
              />
              <BeneficiosCard
                b1="No contamina, no emite gases no daña la salud de los trabajadores."
                b2="Producto modificado con bio-polímeros."
                b3="Se puede fabricar el asfalto frio EcoPAV en cualquier lugar cercano a la obra."
                b4="Aplicable en cualquier clima: todas las estaciones."
              />
              <BeneficiosCard
                b1="No contamina, no emite gases no daña la salud de los trabajadores."
                b2="Producto modificado con bio-polímeros."
                b3="Se puede fabricar el asfalto frio EcoPAV en cualquier lugar cercano a la obra."
                b4="Aplicable en cualquier clima: todas las estaciones."
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default BeneficiosComponent;
