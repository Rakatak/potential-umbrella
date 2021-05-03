import logo from './ukw-logo.png';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ImprintPage from "./pages/ImprintPage/ImprintPage";
import StarsPage from "./pages/StarsPage/StarsPage";
import UniversesPage from "./pages/UniversesPage/UniversesPage";


function App() {
  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="spinning logo" />
          <Navigation />
        </header>

        <section>
          <Switch>
            <Route path="/stars">
              <StarsPage />
            </Route>
            <Route path="/imprint">
              <ImprintPage />
            </Route>
            <Route path="/">
              <UniversesPage />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
