function NoticiaComponent(props) {
  const classContainer = `container ${props.classContainer} p-2 pt-0 mt-0`;
  const classCard = `col-12 noticia-card ${props.classCard} ps-3 pe-3 ps-lg-5 pe-lg-5 pt-3 pb-2`;
  const image = props.image;
  return (
    <>
      <div className={classContainer}>
        <div className="row p-3 pt-0">
          <div className={classCard}>
            <h2 className="text-center text-black">{props.titulo}</h2>
            <div className="description text-oswald">
              <p>{props.descripcion1}</p>
              <p>{props.descripcion2}</p>
              <p>{props.descripcion3}</p>
            </div>

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
