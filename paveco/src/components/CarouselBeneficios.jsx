import BeneficiosCard from "./BeneficiosCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselBeneficios(props) {
  return (
    <>
      <Carousel
        showArrows={false}
        infiniteLoop
        showStatus={false}
        autoPlay
        emulateTouch
        interval={2500}
        selectedItem={2}
        className="b-carousel"
        centerMode
        centerSlidePercentage={40}
        showThumbs={false}
      >
        <div>
          <BeneficiosCard b="No contamina, no emite gases no daña la salud de los trabajadores." />
        </div>
        <div>
          <BeneficiosCard b="Aplicable en cualquier clima: todas las estaciones." />
        </div>
        <div>
          <BeneficiosCard b="Producto modificado con bio-polímeros." />
        </div>
        <div>
          <BeneficiosCard b="Se puede fabricar el asfalto frio Paveco en cualquier lugar cercano a la obra." />
        </div>
        <div>
          <BeneficiosCard b="Solución permanente adhiriendo al asfalto y concreto." />
        </div>
        <div>
          <BeneficiosCard b="Compactación por presión de tráfico o compactadoras." />
        </div>
        <div>
          <BeneficiosCard b="Se puede fabricar cualquier cantidad, optimizando el espacio de almacenajes y logística." />
        </div>
        <div>
          <BeneficiosCard b="Facilidad de almacenamiento de hasta 2 años, sin perder propiedades." />
        </div>
        <div>
          <BeneficiosCard b="Se puede aplicar en forma directa en la superficie a reparar (no precisa riego de imprimación o riego de liga)" />
        </div>
        <div>
          <BeneficiosCard b="Una vez colocado el producto se puede reanudar el tráfico inmediatamente." />
        </div>
        <div>
          <BeneficiosCard b="Ahorros significativos por el costo de reparar vías." />
        </div>
      </Carousel>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel
              showThumbs={false}
              showArrows={false}
              infiniteLoop
              showStatus={false}
              autoPlay
              emulateTouch
              interval={2500}
              selectedItem={2}
              className="b-carousel-md"
            >
              <div>
                <BeneficiosCard b="No contamina, no emite gases no daña la salud de los trabajadores." />
              </div>
              <div>
                <BeneficiosCard b="Aplicable en cualquier clima: todas las estaciones." />
              </div>
              <div>
                <BeneficiosCard b="Producto modificado con bio-polímeros." />
              </div>
              <div>
                <BeneficiosCard b="Se puede fabricar el asfalto frio EcoPAV en cualquier lugar cercano a la obra." />
              </div>
              <div>
                <BeneficiosCard b="Solución permanente adhiriendo al asfalto y concreto." />
              </div>
              <div>
                <BeneficiosCard b="Compactación por presión de tráfico o compactadoras." />
              </div>
              <div>
                <BeneficiosCard b="Se puede fabricar cualquier cantidad, optimizando el espacio de almacenajes y logística." />
              </div>
              <div>
                <BeneficiosCard b="Facilidad de almacenamiento de hasta 2 años, sin perder propiedades." />
              </div>
              <div>
                <BeneficiosCard b="Se puede aplicar en forma directa en la superficie a reparar (no precisa riego de imprimación o riego de liga)" />
              </div>
              <div>
                <BeneficiosCard b="Una vez colocado el producto se puede reanudar el tráfico inmediatamente." />
              </div>
              <div>
                <BeneficiosCard b="Ahorros significativos por el costo de reparar vías." />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
