import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Romana Bac
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Accueil
            </Link>
            <Link className="nav-link" to="/list">
              Liste des donateurs
            </Link>
            <Link className="nav-link" to="#">
              Videos
            </Link>
            <Link className="nav-link" to="#">
              Photos
            </Link>
            <Link className="nav-link" to="#">
              Sondages
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
