import React from "react";
import Home from "./Home.jsx";
import AboutMePage from "./AboutMePage.jsx";
import ContactPage from "./ContactPage";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/Home" component={Home} />
          <Route path="/AboutMe" component={AboutMePage} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=qJt-FtzJ5fo - good intro to framer-motion
