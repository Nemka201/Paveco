function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h2 className="ps-2 pt-4 b-text" key={index}>{value}</h2>);
  return (
    <>
      <div className="pe-lg-3 ps-lg-3 pt-5 ps-4 pe-3 col-12">
        <div className="b-card mb-5 b-animacion">
        <i className="fa-solid fa-circle-check b-icon b-text"></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
