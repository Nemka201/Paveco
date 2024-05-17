function BeneficiosCard({...props}){
  const values = Object.values(props);
  const list = values.map((value, index) => 
    <h4 className="ps-2 pe-2 pe-lg-5 ps-lg-5 pt-3 m-plus-rounded-1c-regular" key={index}>{value}</h4>);
  return (
    <>
      <div className="pe-lg-3 pt-0 ps-2 pe-3 mt-3 col-12 col-lg-6 col-xl-4">
        <div className="b-card mb-2 p-0">
        <i className="fa-solid fa-circle-check b-icon b-text ps-2 pt-2"></i>
          {list}
        </div>
      </div>
    </>
  );
}

export default BeneficiosCard;
