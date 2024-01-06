import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand text-primary">Football</a>
          </Link>

          <Link to="/signup" className="nav-link">
            <button className="d-flex btn btn-primary" type="submit">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
