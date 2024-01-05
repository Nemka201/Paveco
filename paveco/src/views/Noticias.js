import Footer from "../components/Footer";
import Navbar from "../components/NavbarPaveco";
import NoticiaComponent from "../components/NoticiaComponent";

function Noticias() {
  return (
    <>
      <Navbar />
      <div className="noticias-first pt-3">
        <NoticiaComponent
          classContainer="noticias-first"
          classCard="bg-white text-black"
          image="1.png"
          titulo="ASFALTO EN FRÍO: UNA FORMA DE COMBATIR EL CALENTAMIENTO GLOBAL"
          descripcion1="
          Un reciente estudio del MIT destaca el impacto positivo del asfalto frío en la reducción de emisiones de gases de efecto invernadero y la disminución de la temperatura en ciudades como Boston y Phoenix. Publicado en la revista Environmental Science and Technology, el estudio revela que el uso de asfalto frío puede contribuir a combatir el cambio climático al reflejar más radiación solar, generando una disminución significativa en la temperatura y, por ende, en las emisiones. "
          descripcion2="Este avance representa un paso importante hacia soluciones sostenibles y destaca la importancia de difundir estos hallazgos científicos para fomentar la conciencia ambiental y la adopción de tecnologías más respetuosas con el medio ambiente. Empresas como Camaloon también se suman al esfuerzo, facilitando la difusión de mensajes efectivos a través de productos promocionales personalizados. "
          descripcion3="La investigación subraya la urgencia de abordar el cambio climático en medio de eventos climáticos extremos, resaltando el potencial del asfalto frío para mitigar el fenómeno de la isla de calor urbano y mejorar la calidad del aire. La reducción en el consumo de electricidad gracias a temperaturas más frescas en verano y la posibilidad de aprovechar la luz solar para el calentamiento en invierno son beneficios adicionales que resaltan la relevancia de esta innovadora solución. Estos hallazgos destacan la necesidad de colaboración entre la comunidad científica, empresas y la sociedad en general para lograr avances significativos en la lucha contra el cambio climático y avanzar hacia un futuro más sostenible."
          fecha="26/12/23"
          link="https://www.innovaspain.com/asfalto-frio-calentamiento-global/"
        />
        {/* <NoticiaComponent
          classContainer="bg-black"
          classCard="bg-white text-black"
          image="1.png"
          titulo="Paveco - Asfalto en frio"
          descripcion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad."
          fecha="26/12/23"
        />
          <NoticiaComponent
          classContainer="bg-black"
          classCard="bg-black text-white"
          image="1.png"
          titulo="Paveco - Asfalto en frio"
          descripcion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad."
          fecha="26/12/23"
        /> */}
      </div>
      <Footer />
    </>
  );
}

export default Noticias;
