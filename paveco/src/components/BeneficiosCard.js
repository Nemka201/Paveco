function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h2 className="ps-2 pt-4" key={index}><i className="fa-solid fa-arrow-right me-2" style={{color: "white",}}></i>{value}</h2>);
  return (
    <>
      <div className="col-4 pt-5 pe-5 col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <div className="b-card mb-5">
        <i className="fa-solid fa-circle-check" style={{color: "#61CE70",fontSize: "50px",}}></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
