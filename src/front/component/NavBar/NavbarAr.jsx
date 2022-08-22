import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarAr() {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: '#051010' }}
      >

        <div
          className="container-fluid mx-2"
          style={{
            backgroundColor: "#05101c",
            color: "green",
            fontSize: "20px",
          }}
        >
          <Navbar.Brand as={Link} to={"/Care-Me/ChatbotAr"}>
            <i
            className="ac"
              style={{
                width: "120px",
                color: "white",
                backgroundColor: "black",
                fontSize: "30px",
                fontWeight: "30px",
                border: "5px solid black",
                borderRadius: "20%",
              }}
            >
              <span  style={{ color: "green" }}>Care</span>Me
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" style={
              {
                position: "absolute",
                left: "65%"
              }
            }>
          
            
              <Nav.Link className="btn " as={Link} to={"/Care-Me/FirstAidAr"}>
                تواصل  مع طبيبك
              </Nav.Link>
            <Nav.Link className="btn " as={Link} to={"/Care-Me/FirstAidAr"}>
                اسعافات اولية
              </Nav.Link>
              <Nav.Link className="btn" as={Link} to={"/Care-Me/Ar/Prediction"}>
                التشخيص
              </Nav.Link>
               
             
            </Nav>
        
          <Nav style={
            {
              position: "absolute",
              left: "61%"
            }
          }>
              <Link style={{ color:"#7d0fbdcc"}} className="nav-link nav-item btn  lanha" to={'/Care-Me'}>
              English
            </Link>
              <Link style={{ color: "#0fbdb4cc" }} className="nav-link nav-item btn  lanha" to={'/Care-Me/ChatbotAr'}>
              العربيه
            </Link>
          </Nav>
          <Nav style={
            {
              position: "absolute",
              left: "8%"
            }
          }>


            <Link id="lang1" to={'#'} className=" nav-link nav-item btn  active al" >تسجيل الدخول</Link>

              <Link id="lang2" to={'#'} className="nav-link nav-item btn  active al1" >إنشاء حساب</Link>

          </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}/* 
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarAr() {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: '#051010' }}
      >

        <div
          className="container-fluid mx-2"
          style={{
            backgroundColor: "#05101c",
            color: "green",
            fontSize: "20px",
          }}
        >
          <Navbar.Brand as={Link} to={"/Care-Me/home"}>
            <i
              className="ac"
              style={{
                width: "120px",
                color: "white",
                backgroundColor: "black",
                fontSize: "30px",
                fontWeight: "30px",
                border: "5px solid black",
                borderRadius: "20%",
              }}
            >
              <span style={{ color: "green" }}>Care</span>Me
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto af">

              <Nav.Link className="btn " as={Link} to={"/Care-Me/AboutAr"}>
                تواصل معنا
              </Nav.Link>
              <Nav.Link className="btn " as={Link} to={"/Care-Me/FirstAidAr"}>
                الاسعافات الاولية
              </Nav.Link>
              <Nav.Link className="btn" as={Link} to={"/Care-Me/Ar/Prediction"}>
                التشخيص
              </Nav.Link>
              <Nav.Link className="btn active nav-link nav-item btn  " as={Link} to={"/Care-Me/ChatbotAr"}>
                الرئيسية
              </Nav.Link>

            </Nav>
            <Nav style={
              {
                position: "absolute",
                left: "60%"
              }
            }>
              <Link className="nav-link nav-item btn  lanha" to={'/Care-Me'}>
                English
              </Link>
              <Link className="nav-link nav-item btn  lanha" to={'/Care-Me/ChatbotAr'}>
                العربيه
              </Link>
            </Nav>
            <Nav style={
              {
                position: "absolute",
                left: "80%"
              }
            }>


              <Link to={'#'} className=" nav-link nav-item btn  active al" >تسجيل الدخول</Link>

              <Link to={'#'} className="nav-link nav-item btn  active al1" >إنشاء حساب</Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
 */