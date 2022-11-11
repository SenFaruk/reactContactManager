import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <h2>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              <i
                className="fa fa-mobile text-warning"
                style={{ marginRight: "10px" }}
              ></i> 
              Contact <span className="text-warning">Manager</span>
            </Link>
          </h2>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
