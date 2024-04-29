import BeneficiosComponent from "../components/BeneficiosComponent";
import Socios from "../components/Socios";
import Usos from "./Usos";
function ThirdView() {
  return (
    <div className="container-fluid" id="beneficios" style={{height: "100vh", borderTop:"1px solid white"}}>
      <BeneficiosComponent />
      <Socios/>
    </div>
  );
}
export default ThirdView;
