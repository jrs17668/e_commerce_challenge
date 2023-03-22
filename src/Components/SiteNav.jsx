import React from "react";
import { Link } from "react-router-dom";

function SiteNav(props) {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top "
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <button>
            <Link className="nav-link px-2 text-white link-button" to="/">
              Home
            </Link>
          </button>
          <button>
            <Link
              className="nav-link px-2 text-white link-button"
              to="/product"
            >
              Products
            </Link>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SiteNav;
