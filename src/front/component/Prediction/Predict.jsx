import  Navbar  from "../NavBar/Navbar";
import {
  Link,
} from "react-router-dom";
import Footer from "../Footer/Footer";

function Predict({ prediction }) {
  return (
    <>
<Navbar/>
      <div className="bg-dark w-100 my-5 ">
        <div className="contents2  text-capitalize">
          <Link to="/Care-Me/En/Prediction/">
            <div className="btnnn">
              <button className="btnn ">
                <span>RePredict</span>
              </button>
            </div>
          </Link>
          <div className="mainPredict"></div>
          <hr />
          <div className="predict my-5">

            <h1 className="predict2">{prediction.prediction}</h1>
            <hr />
            <h1 className="predict1">{prediction.prediction_in_arabic}</h1>
          </div>

          <div className="percaution">
            <div className="per-en">
              <p>{prediction.precaution_1}</p>
              <p>{prediction.precaution_2}</p>
              <p>{prediction.precaution_3}</p>
              <p>{prediction.precaution_4}</p>
            </div>
            <hr />
            <div className="per-ar">
              <p>{prediction.precaution_1_in_arabic}</p>
              <p>{prediction.precaution_2_in_arabic}</p>
              <p>{prediction.precaution_3_in_arabic}</p>
              <p>{prediction.precaution_4_in_arabic}</p>
            </div>
          </div>
          <div className="my-5">
          <div className="notes">
            <h3 style={{ color: "#660d5f" }} className="predict3 " >{prediction.warning}</h3>
            <hr />
            <h3>Overview</h3>
            <p style={{ backgroundColor: "#7386D5" }}>{prediction.Overview}</p>
            
          </div>
          <div className="notes">
            <h3>Causes</h3>
            <p>{prediction.Causes}</p>
            
          </div>
          <div className="notes">
            <h3>Risk_Factors</h3>
            <p>{prediction.Risk_Factors}</p>
           
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Predict;
