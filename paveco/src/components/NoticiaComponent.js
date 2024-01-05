function NoticiaComponent(props) {
  const classContainer = `container-fluid ${props.classContainer} p-2`;
  const classCard = `col-12 noticia-card ${props.classCard} ps-5 pe-5 pt-3`;
  const image = props.image;
  return (
    <>
      <div className={classContainer}>
        <div className="row p-3 pt-0">
          <div className={classCard}>
            <h1 className="text-center">{props.titulo}</h1>
            <h3>{props.descripcion1}</h3>
            <h3>{props.descripcion2}</h3>
            <h3>{props.descripcion3}</h3>

            <div className="text-center">
              <a href={props.link}>
                <img
                  src={require(`../assets/noticias/${image}`)}
                  alt={props.titulo}
                  className="noticia-image mb-3"
                />
              </a>
            </div>
            <h5 className="text-end">{props.fecha}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoticiaComponent;
