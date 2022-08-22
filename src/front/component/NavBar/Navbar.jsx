import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function _Navbar() {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: "#051010" }}
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
            <Nav className="mr-auto">
              <Nav.Link className="btn active " as={Link} to={"/Care-Me"}>
                Home
              </Nav.Link>

              <Nav.Link
                className="btn  "
                as={Link}
                to={"/Care-Me/En/Prediction"}
              >
                Diagnoses
              </Nav.Link>
              <Nav.Link className="btn " as={Link} to={"/Care-Me/FirstAid"}>
                First Aid
              </Nav.Link>

              <Nav.Link className="btn  " as={Link} to={"/Care-Me/About"}>
                Contact Us
              </Nav.Link>

  
             
              {/* <Nav.Link className="btn " as={Link} >
              
              <select class="form-select form-select-sm slct" aria-label=".form-select-sm example">
              <Link  className="nav-link nav-item btn  active" to={"/Care-Me/ChatbotAr"}>
              <option value="2" >Arabic</option>
              </Link>
              <option selected>Language</option>
              <option value="1">English</option>
              
              
            </select>
              </Nav.Link> */}
             
            </Nav>
            <Nav
              style={{
                position: "absolute",
                left: "70%",
              }}
            >
              <Link style={{ color: "#7d0fbdcc" }} className="nav-link nav-item btn active  lan" to={'/Care-Me'}>
                English
              </Link>
              <Link style={{ color: "#0fbdb4cc" }} className="nav-link nav-item btn  lan" to={'/Care-Me/ChatbotAr'}>
                العربيه
              </Link>
              </Nav>
            <Nav
              style={{
                position: "absolute",
                left: "87%",
              }}
            >
                 

              <Link id="lang1" className=" nav-link nav-item btn  active" to={'#'}>
                Sign In
              </Link>
              <Link id="lang2" className="nav-link nav-item btn  active" to={'#'}>
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
