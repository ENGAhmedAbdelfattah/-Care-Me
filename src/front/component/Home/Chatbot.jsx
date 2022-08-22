import React  from "react";
import Navbar from '../NavBar/Navbar';
import Slides from '../Carousel/Slides';
import Footer from './../Footer/Footer';


function Chatbot() {
  return (
    <> 
      <div  style={{ backgroundColor: '#2a4766'}}>
        <Navbar />
        <Slides />
        <Footer />
      </div>
    </>
  );
}
export default Chatbot;
