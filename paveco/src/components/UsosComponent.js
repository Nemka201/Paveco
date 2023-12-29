function UsosComponent(props) {
  const classContainer = `col-12 col-lg-6 ${props.classContainer} p-5 animacion-img`;
  const image = props.image;

  return (
    <>
      <div className={classContainer}>
        <section>
          <div className="text-center p-0">
            <i
              class="fa-solid fa-circle-down text-center pt-0 pb-4"
              style={{ fontSize: "55px" }}
            ></i>
          </div>
          <h2 className="text-center">{props.text}</h2>
          {image ? (
            <img
              src={require(`../assets/usos/${image}`)}
              alt={props.titulo}
              className="usos-image"
            />
          ) : null}
        </section>
      </div>
    </>
  );
}

export default UsosComponent;
