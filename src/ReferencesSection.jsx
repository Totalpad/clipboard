import google from "./assets/logo-google.png";
import ibm from "./assets/logo-ibm.png";
import microsoft from "./assets/logo-microsoft.png";
import hp from "./assets/logo-hp.png";
import vector from "./assets/logo-vector-graphics.png";

function ReferencesSection() {
  return (
    <section id="references">
      <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0">
        <img src={google} alt="" />
        <img src={ibm} alt="" />
        <img src={microsoft} alt="" />
        <img src={hp} alt="" />
        <img src={vector} alt="" />
      </div>
    </section>
  );
}

export default ReferencesSection;
