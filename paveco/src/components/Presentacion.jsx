import React, { useRef, useEffect } from 'react';

function Presentacion() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 1 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="container bg-black mt-0 pt-5 presentacion">
        <div className="col-12 fade-in-top" ref={sectionRef}>
          <div className="row m-0 pt-5 pe-lg-4 pe-2">
            <div className="col-sm-12 object-fit-cover mt-3 text-white ps-3 pe-3 ps-md-0 pe-md-0">
              <section>
                <h1 className="mt-0 text-center pb-4 text-white pt-2">
                  ¿QUIENES SOMOS?
                </h1>
                <p className="text-white roboto-regular pb-4 text-center">
                  Paveco Argentina es una empresa especializada en la
                  formulación de asfalto en frío e infraestructura vial de
                  vanguardia. Nuestra compañía cuenta con el respaldo y aval de
                  nuestra casa matriz en Estados Unidos, La cual provee el
                  ECOPAV, uno de los productos más seguro y efectivo disponible
                  en el mercado americano para la fabricación de asfalto en
                  frio.
                </p>
              </section>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  <hr></hr>
                </div>
                <div className="col-4"></div>

              </div>
              <section className="aside-text position-relative fade-in-slow ">
                <h2 className="text-start pb-3 pt-md-4 pt-0" >ECOPAV</h2>
                <p className="pb-5 roboto-regular text-start mt-3">
                  Es un Superpave modificado con biopolímeros de alto
                  rendimiento formulado con aditivos especiales Específicamente
                  diseñado para soportar una amplia gama de temperaturas y
                  climas. Es una solución permanente para la pavimentación,
                  reparación y mantenimiento de autopistas, rutas, puentes,
                  avenidas, calles etc.
                </p>
              </section>
              <section className="aside-text fade-in-slow ">
                <h2 className="text-start pb-3 pt-md-4 pt-0">
                  ALIANZA ESTRATÉGICA
                </h2>
                <p className="pb-5 roboto-regular text-start mt-3">
                  La formulación de EcoPAV y su modo de empleo, permite que se
                  pueda aplicar en todas las condiciones climáticas, brindando
                  una solución permanente. Su presentación es en bolsas de 25
                  Kg, big bags de 500kg o granel, permitiendo una logística de
                  traslado y almacenamiento simple, lo cual se traduce en un
                  significativo ahorro.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentacion;
