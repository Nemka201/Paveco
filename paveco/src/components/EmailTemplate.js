const EmailTemplate = (props) => {
  var container = {
    colorWhite: "rgb(255, 255, 255)",
    fuenteOswald: "'Archivo Black', sans-serif",
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "antialiased",
    boxSizing: "border-box",
    bsGutterX: "1.5rem",
    bsGutterY: "0",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    padding: ".25rem !important",
    paddingTop: "1.5rem !important",
    fontFamily: "var(--fuente-Oswald)",
    padding:"3em 2em",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 1) 40%, rgb(47, 255, 0) 100%)",
  };
  var col12 = {
    textSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "antialiased",
    fontFamily: "var(--fuente-Oswald)",
    boxSizing: "border-box",
    maxWidth: "100%",
    flex: "0 0 auto",
    width: "100%",
    textAlign: "center !important",
    bsTextOpacity: "1",
    bsBgOpacity: "1",
    backgroundColor: "black",    
    borderRadius: "20px 20px 0 0",
    borderColor: "unset !important",
    color: "white",
    padding: "2em 10%"
  };
  return (
      <div style={container}>
          <div style={col12}>
            <h1 style={{color:"white"}}>PAVECO - PORTAL WEB</h1>
            <h2 style={{color:"white"}}>
              {props.nombre} llenó el formulario para contactarse contigo.
            </h2>
            <hr style={{color:"white"}}></hr>
            <h2 style={{color:"white"}}><strong>Datos del usuario:</strong></h2>
            <h3 style={{color:"white"}}><strong>Nombre</strong>: {props.nombre}</h3>
            <h3 style={{color:"white"}}><strong>Teléfono</strong>: {props.telefono}</h3>
            <h3 style={{color:"white"}}><strong>Correo Electrónico</strong>: {props.email}</h3>
            <h3 style={{color:"white"}}><strong>Mensaje</strong>: {props.mensaje}</h3>
            <h3 style={{color:"white"}}>
              <a href={props.link}>Link del archivo:</a>
            </h3>
            <img src={require(props.imagen)}></img>
            <hr style={{color:"white"}}></hr>
            <h5 style={{color:"white"}}>
              Este mensaje se envió de manera automática desde el Landing Page
              de Paveco{" "}
              <a href="https://paveco.com.ar/">https://paveco.com.ar/</a>
            </h5>
          </div>
      </div>
  );
};
export default EmailTemplate;
