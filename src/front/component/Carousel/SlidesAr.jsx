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
          <div className="pm1">

            <h1 className="om">التشخيص</h1><p> خدمتنا تقدم لك الكثير
              مزايا.. <br></br>مثل تزويدك بطبيب آلي
              <br></br> يعرض قائمة الأعراض التي<br></br>يمكن الاختيار من بينها ويعرض لك <br></br>التشخيص اللازم <br>
              </br>والمزيد من المعلومات كذلك.<br></br>
              <Link className="cha" to={'/Robot-Care/prediction'}>أفحص نفسك الان</Link>
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
            <div className="pm1">

              
            <h1 className="om">التشخيص</h1><p> خدمتنا تقدم لك الكثير
             من المزايا <br></br>مثل تزويدك بطبيب آلي
              <br></br> يعرض قائمة الأعراض التي<br></br>يمكن الاختيار من بينها ويعرض لك <br></br>التشخيص اللازم <br>
              </br>والمزيد من المعلومات كذلك<br></br>
              <Link className="cha" to={'/Robot-Care/prediction'}>أفحص نفسك الان</Link>
            </p>
            </div>
            <img
              src={img1}
              className="d-block img center11"
              alt="...."
            />
          </Carousel.Item>

          <Carousel.Item className="ms-5 mt-5">
            <div className="pm1">

              <h1 className="om">استشارة طبيب</h1><p> يمكنك أيضًا فتح جلسة
                مع طبيب <br></br>من خلال خدمتنا<br></br>بدون
                الحاجة إلى بذل جهد.<br></br>{" "}
                <Link className="cha" to={'/cha'}>أبدأ محادثتك الان</Link>
              </p>
            </div>
            <img
              src={img2}
              className="d-block xim  center12"
              alt="...."
            />
          </Carousel.Item>



          <Carousel.Item className="ms-5 mt-5">
            <div className="pm1">

              <h1 className="om">إسعافات أولية</h1> <p>يمكنك الحصول على معلومات عن
                إسعافات أولية<br></br> ساعد الناس بنفسك, <br></br> وحفظ
                حياتهم<br></br> <Link className="cha" to={'/Robot-Care/firstaid'}>احصل علي المساعدة</Link>
              </p>
            </div>
            <img
              src={img4}
              className="d-block  xi   center13"
              alt="...."
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Slides;
