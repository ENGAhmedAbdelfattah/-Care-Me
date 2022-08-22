import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

export default function About() {
  return (
    <section className="Contact p-3 pb-5">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="content_left p-3">
              <h5 className="font-weight">CONTACT INFO</h5>
              <i className="fas fa-home"></i>
              <h3 className="font-weight-bold">
                CONTACT INFO<br></br>
              </h3>
              <ul className="list-unstyled p-0">
                <li>
                  <i className="fas fa-phone-alt"></i>Phone : 08684254254{" "}
                </li>
                <li>
                  <i className="fas fa-fax"></i>Fax: (+20)000222988
                </li>
                <li>
                  <i className="fas fa-envelope-open-text"></i>Email :
                  el-eng.menoufia@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8 pb-5">
            <div className="content_right p-3 pb-5">
              <h3 className=" font-weight-bold">CONTACT</h3>
              <h3 className="font-weight-bold">SEND US A QUICK MESSAGE</h3>
              <h5>
                You can send us if there any problem and we will fix it quickly
              </h5>
              <form action="/Robot-Care/About" method="Get" >
                <label>First Name</label>
                <input className="field" type="text" />
                <label>Last Name</label>
                <input className="field" type="text" />
                <label>Email Name</label>
                <input className="field" type="text" />
                <label>Message</label>
                <textarea className="field" rows="4"></textarea>
             
              <br />
              <br />
              <input
                className="btn btn-secondary"
                type="submit"
                value="SEND MESSAGE"
              /></form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
