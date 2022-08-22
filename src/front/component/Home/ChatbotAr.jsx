import React  from "react";
import NavbarAr from "../NavBar/NavbarAr";
import SlidesAr from "../Carousel/SlidesAr";
import Footer from './../Footer/Footer';


function ChatbotAr() {
  return (
    <> 
      <div  style={{ backgroundColor: '#2a4766'}}>
        <NavbarAr />
        <SlidesAr />
        {<Footer />}
      </div>
    </>
  );
}
export default ChatbotAr;
