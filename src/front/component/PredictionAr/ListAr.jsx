import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import NavbarAr from "../NavBar/NavbarAr";
import Footer from "../Footer/Footer";
import Content from "./ContentAr";

function ListAr({
  keys,
  keysAr,
  onHandleCheckboxAr,
  onHandleSubmit,
  predictionHandle,
  prediction,
  posts
}) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  return (
    <>
      <NavbarAr />
      <div className="container-fluid Appp">
        <ul className="categories1 my-2">
          <div className="p-2 lang">
            <Link
              id="lang11"
              className="btn btn-danger active"
              aria-current="page"
              to="/Care-Me/En/prediction"
            >
              En
            </Link>
            <Link
              id="lang22"
              className="btn btn-success  active"
              to="/Care-Me/Ar/prediction"
            >
              العربيه
            </Link>
          </div>
          <div className="bdy">
            <h2>أجزاء الجسم</h2>
          </div>
          {Object.keys(keysAr).map((el) => (
            <li key={generateId()}>
              <NavLink className="cat" to={"/Care-Me/Ar/Prediction/" + el}>
                <button className="catbtn"> {el}</button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Route
        path="/Care-Me/Ar/Prediction/:key"
        render={(props) => (
          <Content
            keys={keys}
            keysAr={keysAr}
            onHandleCheckboxAr={onHandleCheckboxAr}
            onHandleSubmit={onHandleSubmit}
            predictionHandle={predictionHandle}
            prediction={prediction}
            posts={posts}
            {...props}
          />
        )}
      />
      <Footer />
    </>
  );
}

export default ListAr;
