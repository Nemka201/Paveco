import BeneficiosCard from "./BeneficiosCard";

function BeneficiosComponent() {
  return (
    <>
      <div className="container-fluid banner pe-4 ps-4 pt-4">
        <div className="row bg-black border-top-15">
          <div className="col-12 p-0 p-lg-3">
            <h1 className="titulo text-center mt-5">
              BENEFICIOS Y VENTAJAS
            </h1>
            <div className="row mb-5">
              <BeneficiosCard
                b1="No contamina, no emite gases no daña la salud de los trabajadores."
                b2="Producto modificado con bio-polímeros."
                b3="Se puede fabricar el asfalto frio EcoPAV en cualquier lugar cercano a la obra."
                b4="Aplicable en cualquier clima: todas las estaciones."
              />
              <BeneficiosCard
                b1="Solución permanente adhiriendo al asfalto y concreto."
                b2="Compactación por presión de tráfico o compactadoras."
                b3="Se puede fabricar cualquier cantidad, optimizando el espacio de almacenajes y logística."
                b4="Facilidad de almacenamiento de hasta 2 años, sin perder propiedades."
              />
              <BeneficiosCard
                b1="Ahorros significativos por el costo de reparar vías."
                b2="Una vez colocado el producto se puede reanudar el tráfico inmediatamente."
                b3="Se puede aplicar en forma directa en la superficie a reparar (no precisa riego de imprimación o riego de liga)"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default BeneficiosComponent;
