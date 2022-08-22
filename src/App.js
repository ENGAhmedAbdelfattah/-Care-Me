import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import Component
import Chatbot from "./front/component/Home/Chatbot";
// import ChatbotAr from "./front/component/Home/ChatbotAr";
import ChatbotAr from "./front/component/Home/ChatbotAr";
import About from "./front/component/About/About";
import AboutAr from "./front/component/About/AboutAr";

import FirstAid from "./front/component/FirstAid/FirstAid";
import FirstAidAr from "./front/component/FirstAid/FirstAidAr";

import SlidesAr from "./front/component/Carousel/SlidesAr";
import NavbarAr from "./front/component/NavBar/NavbarAr";
// import Style
import "./App.css";
import Main from "./front/component/Main";

function App() {
  return (
    <div style={{ backgroundColor: "#031425" }} className="App">
      <Router>
        <Switch>
          <Route exact path="/Care-Me" component={Chatbot} />
          <Route exact path="/Care-Me/chatAr" component={ChatbotAr} />
          <Route exact path="/">
            <Redirect to="/Care-Me" />
          </Route>
          <Route exact path="/Care-Me/Home">
            <Redirect to="/" />
          </Route>

          <Route path="/Care-Me/En" component={Main} />
          <Route path="/Care-Me/Ar" component={Main} />
          
          <Route exact path="/Care-Me/About" component={About} />
          <Route exact path="/Care-Me/AboutAr" component={AboutAr} />
          <Route exact path="/Care-Me/FirstAid" component={FirstAid} />
          <Route exact path="/Care-Me/firstaidar" component={FirstAidAr} />


          <Route exact path="/Care-Me/SlidesAr" component={SlidesAr} />
          <Route exact path="/Care-Me/NavbarAr" component={NavbarAr} />
          <Route exact path="/Care-Me/ChatbotAr" component={ChatbotAr} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
