function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h4 className="ps-2 pt-4 pt-serif-bold" key={index}>{value}</h4>);
  return (
    <>
      <div className="pe-lg-3 ps-lg-3 pt-5 ps-4 pe-3 col-12">
        <div className="b-card mb-5 b-animacion bg-white">
        <i className="fa-solid fa-circle-check b-icon b-text"></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
