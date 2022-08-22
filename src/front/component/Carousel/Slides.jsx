import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import img1 from '../../images/Conversational.png'
import img2 from '../../images/Male_Doctor-512.png'
import img4 from '../../images/chatbot-health-care-.png'
import Footer from "../Footer/Footer";

function Slides() {
  return (
    <div className="carr">
      <div style={{ backgroundColor:  '#2a4766' }} className="container-fluid carr" >
        <div className="mini ms-5 mt-5">
          <div className="pm">

            <h1 className="om">Online Diagnostics</h1><p> Our service offers you many
              advantages.. <br></br>Like providing you with a robotic doctor
              <br></br> It displays a list of symptoms that you<br></br>can choose from and provides you with <br></br>the necessary diagnosis <br>
              </br>and more information as well.<br></br>
              <Link className="cha" to={'/Robot-Care/prediction'}>check now</Link>
            </p>
          </div>
          <img
            src={img1}
            className="d-block img center"
            alt="...."
          />
        </div>
        <Carousel className=" car">
          <Carousel.Item className="ms-5 mt-5">
            <div className="pm">

              <h1 className="om">Online Diagnostics</h1><p> Our service offers you many
                advantages.. <br></br>Like providing you with a robotic doctor
                <br></br> It displays a list of symptoms that you<br></br>can choose from and provides you with <br></br>the necessary diagnosis <br>
                </br>and more information as well.<br></br>
                <Link className="cha" to={'/Robot-Care/prediction'}>check now</Link>
              </p>
            </div>
            <img
              src={img1}
              className="d-block img center"
              alt="...."
            />
          </Carousel.Item>

          <Carousel.Item className="ms-5 mt-5">
            <div className="pm">

              <h1 className="om">Online Doctor</h1><p> You can also open a session
                with a real doctor... <br></br>through our service<br></br>without
                the need to make an effort.<br></br>{" "}
                <Link className="cha" to={'/cha'}>Make session</Link>
              </p>
            </div>
            <img
              src={img2}
              className="d-block xim  center1"
              alt="...."
            />
          </Carousel.Item>



          <Carousel.Item className="ms-5 mt-5">
            <div className="pm">

              <h1 className="om">Online First Aid</h1> <p>You can get information on
                first aid.. <br></br> help people with your self,<br></br> and save
                their lives.<br></br> <Link className="cha" to={'/Robot-Care/firstaid'}>Have Help</Link>
              </p>
            </div>
            <img
              src={img4}
              className="d-block  xi   center3"
              alt="...."
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Slides;
