function UsosComponent(props) {
  const classContainer = `col-12 col-lg-6 ${props.classContainer} p-5 usos-c`;
  const image = props.image;

  return (
    <>
      <div className={classContainer}>
        <section>
          <div className="text-center pb-4">
            <i
              class="fa-solid fa-circle-down text-center pt-0 pb-4 usos-t"
              style={{ fontSize: "55px" }}
            ></i>
          </div>
          <h2 className="text-center usos-t">{props.text}</h2>
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
