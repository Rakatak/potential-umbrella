import './Navigation.css';
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div >
      <nav>
        <ul className="App-navigation">
          <li className="App-navigation-item">
            <NavLink exact activeClassName="is-active" to="/">Universes</NavLink>
          </li>
          <li className="App-navigation-item">
            <NavLink exact activeClassName="is-active" to="/stars">Stars</NavLink>
          </li>
          <li className="App-navigation-item">
            <NavLink exact activeClassName="is-active" to="/imprint">Imprint</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
