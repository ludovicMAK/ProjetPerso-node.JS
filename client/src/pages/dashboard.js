import React from "react";

const dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/profil">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/statique">
            Statistique
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/planning">
            Planning
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to="/addLecon">
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

export default dashboard;
