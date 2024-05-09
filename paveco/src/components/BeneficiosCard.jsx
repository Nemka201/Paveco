function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h4 className="ps-5 pe-5 pt-3 m-plus-rounded-1c-regular" key={index}>{value}</h4>);
  return (
    <>
      <div className="pe-lg-3 ps-lg-3 pt-0 ps-4 pe-3 mt-3 col-12 col-md-6 col-lg-4">
        <div className="b-card mb-4">
        <i className="fa-solid fa-circle-check b-icon b-text ps-0"></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
