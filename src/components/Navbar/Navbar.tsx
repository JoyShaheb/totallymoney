import React, { FC } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light py-3">
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">
          Totally Money
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
