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
          classCard="bg-black text-white"
          image="1.png"
          titulo="Paveco - Asfalto en frio"
          descripcion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad. "
          fecha="26/12/23"
        />
        <NoticiaComponent
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
        />
      </div>
      <Footer />
    </>
  );
}

export default Noticias;
