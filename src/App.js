import React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Services from "./component/Services";

function App() {
  return(

    <Router>
      <Navbar/><br/><br/><br/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/services" exact>
          <Services/>
        </Route>
        <Route path="/gallery" exact>
          <Gallery/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
    </Switch>
    <br/>
    <Footer/>
    </Router>
  );
}

export default App;
