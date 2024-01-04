function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h2 className="ps-2 pt-4 b-text" key={index}><i className="fa-solid fa-arrow-right pe-4" style={{color: "white"}}></i>{value}</h2>);
  return (
    <>
      <div className="col-4 pe-lg-3 ps-lg-3 pt-5 ps-4 pe-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <div className="b-card mb-5 b-animacion">
        <i className="fa-solid fa-circle-check b-icon b-text" style={{color: "#00ff22",fontSize: "50px",}}></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
