function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h2 className="ps-2 pt-4" key={index}>{value}</h2>);
  return (
    <>
      <div className="col-4 pt-5 pe-5">
        <div className="b-card">
        <i class="fa-solid fa-circle-check" style={{color: "#61CE70",fontSize: "50px",}}></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
