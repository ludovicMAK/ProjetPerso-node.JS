import React from "react";
import { NavLink } from "react-router-dom";

import Navigation from "../components/Navigation";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <ul>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/profil">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/statistique">
            Statistique
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/planning">
            Planning
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/ajouterLecon">
            Ajouter une leçon
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/deconnexion">
            deconnexion
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
