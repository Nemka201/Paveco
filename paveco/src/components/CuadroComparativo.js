function CuadroComparativo({ ...props }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-black p-4 text-anim-top">
            <div className="tabla-comparativa-titulo text-anim-left">
              <h1 className="text-white text-black text-center ">
                TABLA COMPARATIVA
              </h1>
              <h2 className="text-white text-black text-center pb-5 mb-5">
                ASFALTO EN CALIENTE VS ASFALTO EN FRIO
              </h2>
            </div>

            <section>
              <table className="m-0">
                <thead>
                  <th className="text-center text-decoration-underline">
                    ITEM
                  </th>
                  <th className="pe-2 ps-2 text-center text-decoration-underline">
                    ASFALTO EN CALIENTE
                  </th>
                  <th className="text-center text-decoration-underline">
                    PAVECO
                  </th>
                </thead>
                <tr>
                  <td>KILOS POR METRO CÚBICO</td>
                  <td className="pe-2 ps-2">2.500 kg</td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    1.500 kg
                  </td>
                </tr>
                <tr>
                  <td>USO PARA BACHEO</td>
                  <td className="pe-2 ps-2">Desperdicio 65%</td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    Desperdicio 0%
                  </td>
                </tr>
                <tr>
                  <td>ÍNDICE DE COMPACTACIÓN</td>
                  <td className="pe-2 ps-2">
                    42% (debido a su diseño de mezcla)
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    Inferior al 2%
                  </td>
                </tr>
                <tr>
                  <td>COLOCACIÓN EN DIAS LLUVIOSOS</td>
                  <td className="pe-2 ps-2">NO</td>
                  <td>
                    {" "}
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    SI
                  </td>
                </tr>
                <tr>
                  <td>PRECISA RIEGO DE LIGA</td>
                  <td className="pe-2 ps-2">SI</td>
                  <td>
                    {" "}
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    NO
                  </td>
                </tr>
                <tr>
                  <td>CANTIDAD MÍNIMA DE PERSONAL</td>
                  <td className="pe-2 ps-2">Entre 10 y 15 personas</td>
                  <td>
                    {" "}
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    2 personas
                  </td>
                </tr>
                <tr>
                  <td>REQUIERE MAQUINARIA ESPECIAL</td>
                  <td className="pe-2 ps-2">SI</td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    NO
                  </td>
                </tr>
                <tr>
                  <td>COMPOSICIÓN</td>
                  <td className="pe-2 ps-2">AC 30</td>
                  <td>
                    {" "}
                    <i
                      className="fa-solid fa-check b-icon b-text pe-1 ps-0"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    SUPERAV (biopolímeros)
                  </td>
                </tr>
                <tr>
                  <td>TIEMPO DE RELLENO BACHE 10M X 2M X 0,1M</td>
                  <td className="pe-2 ps-2">Media jornada</td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    20 minutos
                  </td>
                </tr>
                <tr>
                  <td>RIESGOS DE SALUD</td>
                  <td className="pe-2 ps-2">
                    Por liberación de gases tóxicos: náuseas, dolores de cabeza,
                    irritación de la piel, ojos, garganta y pulmones, quemaduras
                    leves y/o graves, etc
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    No presenta problemas
                  </td>
                </tr>
                <tr>
                  <td>EQUIPAMIENTO NECESARIO PARA EL CUIDADO DEL PERSONAL</td>
                  <td className="p-0 pt-5 ps-2 pe-2 ps-lg-5 pe-lg-5">
                    <tr className="text-center">
                      Gafas con ventilación indirecta para proteger los ojos
                      contra vapores.
                    </tr>
                    <tr>
                      Gafas y botas con aislamiento térmico para prevenir
                      quemaduras e impedir que los disolventes penetren en la
                      piel.
                    </tr>
                    <tr>
                      Camisa manga larga y pantalón largo para prevenir
                      quemaduras y exposición a los productos químicos del
                      asfalto caliente.
                    </tr>
                    <tr>
                      El uso de respiradores puede ser necesario, verificar
                      ficha técnica para obtener información sobre la
                      composicion química.
                    </tr>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-check b-icon b-text pe-3"
                      style={{ color: "#00ff22", fontSize: "1.2em" }}
                    ></i>
                    No precisa
                  </td>
                </tr>
              </table>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CuadroComparativo;
