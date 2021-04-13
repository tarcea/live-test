import React from "react";
import "./css/App.css";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import NavBar from "./pages/Section/Header/NavBar/NavBar";
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Career } from "./pages/Career";
import { AboutUs } from "./pages/AboutUs";
import OwnCitySection from "./pages/OwnCitySection";
import { SignUp } from "./pages/SignUp";
import Helsinki from "./pages/Helsinki";
import City from "./pages/City/index";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
console.log(history.location.pathname, pathname)

  return (
    <>
      {pathname !== "/signup" && pathname !== "/own-city-section" && (
        // <Navigation />
        <NavBar pathname={pathname} />
      )}
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/own-city-section">
          <OwnCitySection />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        {/* <Route path="/helsinki">
          <Helsinki />
        </Route> */}
        <Route path="/:city">
          <City name={pathname}/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
