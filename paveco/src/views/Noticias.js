import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";
import NoticiaComponent from "../components/NoticiaComponent";

function Noticias() {
  return (
    <>
      <Navbar />
      <div className="background-noticias pt-3">
        <section>
          <NoticiaComponent
            classContainer=""
            classCard="bg-white-p text-black"
            image="1.png"
            titulo="ASFALTO EN FRÍO: UNA FORMA DE COMBATIR EL CALENTAMIENTO GLOBAL"
            descripcion1="
          Un reciente estudio del MIT destaca el impacto positivo del asfalto frío en la reducción de emisiones de gases de efecto invernadero y la disminución de la temperatura en ciudades como Boston y Phoenix. Publicado en la revista Environmental Science and Technology, el estudio revela que el uso de asfalto frío puede contribuir a combatir el cambio climático al reflejar más radiación solar, generando una disminución significativa en la temperatura y, por ende, en las emisiones. "
            descripcion2="La investigación subraya la urgencia de abordar el cambio climático en medio de eventos climáticos extremos, resaltando el potencial del asfalto frío para mitigar el fenómeno de la isla de calor urbano y mejorar la calidad del aire. La reducción en el consumo de electricidad gracias a temperaturas más frescas en verano y la posibilidad de aprovechar la luz solar para el calentamiento en invierno son beneficios adicionales que resaltan la relevancia de esta innovadora solución. Estos hallazgos destacan la necesidad de colaboración entre la comunidad científica, empresas y la sociedad en general para lograr avances significativos en la lucha contra el cambio climático y avanzar hacia un futuro más sostenible."
            fecha="26/12/23"
            link="https://www.innovaspain.com/asfalto-frio-calentamiento-global/"
          />
          <NoticiaComponent
            classContainer=""
            classCard="bg-white-p text-black"
            image="1.png"
            titulo="ASFALTO EN FRÍO: UNA FORMA DE COMBATIR EL CALENTAMIENTO GLOBAL"
            descripcion1="
          Un reciente estudio del MIT destaca el impacto positivo del asfalto frío en la reducción de emisiones de gases de efecto invernadero y la disminución de la temperatura en ciudades como Boston y Phoenix. Publicado en la revista Environmental Science and Technology, el estudio revela que el uso de asfalto frío puede contribuir a combatir el cambio climático al reflejar más radiación solar, generando una disminución significativa en la temperatura y, por ende, en las emisiones. "
            descripcion2="La investigación subraya la urgencia de abordar el cambio climático en medio de eventos climáticos extremos, resaltando el potencial del asfalto frío para mitigar el fenómeno de la isla de calor urbano y mejorar la calidad del aire. La reducción en el consumo de electricidad gracias a temperaturas más frescas en verano y la posibilidad de aprovechar la luz solar para el calentamiento en invierno son beneficios adicionales que resaltan la relevancia de esta innovadora solución. Estos hallazgos destacan la necesidad de colaboración entre la comunidad científica, empresas y la sociedad en general para lograr avances significativos en la lucha contra el cambio climático y avanzar hacia un futuro más sostenible."
            fecha="26/12/23"
            link="https://www.innovaspain.com/asfalto-frio-calentamiento-global/"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Noticias;
