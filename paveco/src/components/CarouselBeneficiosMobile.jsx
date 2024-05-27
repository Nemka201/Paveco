import BeneficiosCardMobile from "./BeneficiosCardMobile";
import { Carousel } from "react-responsive-carousel";
import firstImage from "./../assets/beneficios/1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselBeneficiosMobile(props) {
  return (
    <>
      <Carousel
        showArrows={false}
        infiniteLoop
        showStatus={false}
        autoPlay
        emulateTouch
        interval={50000}
        selectedItem={2}
        className="b-carousel-md"
        showThumbs={false}
      >
        <div>
          <BeneficiosCardMobile
            beneficio="Una vez colocado el producto se puede reanudar el tráfico inmediamente."
            beneficio2="Solución permanente uniendo aslfato y concreto por sus cualidades se adhiere perfectamente
                al hormigon."
            beneficio3="Compactación por presión del tráfico o maquinas compactadoras."
            beneficio4="Se puede aplicar en forma directa en la superficie o reparo (no precisa riego de imprimación
                  ni riego de liga) y poseé propiedades anti-deslizantes."
            imagen="trf.png"
            imagen2="adh.png"
            imagen3="cmp.png"
            imagen4="apl.png"
            cardBack={firstImage}
            animation="leftIn"
          />
        </div>
        <div>
          <BeneficiosCardMobile
            beneficio="La formulación de PAVECO es un asfalto de ultima generación (SUPERPAVE) fabricado en
                USA."
            beneficio2="No contamina, no emite gases y no compromete la salud de los trabajadores."
            beneficio3="Al ser su composición 95% petróleo y no contener agua, la película que crea es ampliamente
  menos permeable al agua que otros asfaltos."
            beneficio4="Asfalto modificado con polimeros y agregado de Bio-polímeros."
            imagen="1.png"
            imagen2="eco.png"
            imagen3="imp.png"
            imagen4="bio.png"
            cardBack={firstImage}
            animation="bottomIn"
          />
        </div>
        <div>
          <BeneficiosCardMobile
            beneficio="Aplicable en cualquier clima, todas las estaciones del año. Soporta temperaturas
                -50° /+80° grados."
            beneficio2="Ahorros significativos en construcción de vías."
            beneficio3="Periodo de almacenamiento de hasta 2 años sin perder sus propiedades."
            beneficio4="Se puede fabricar cualquier cantidad optimizando el espacio de almacenaje logístico."
            imagen="tmp.png"
            imagen2="cst.png"
            imagen3="cld.png"
            imagen4="prd.png"
            cardBack={firstImage}
            animation="rightIn"
          />
        </div>
      </Carousel>
  </>
  );
}
