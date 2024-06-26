import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div class="container">

        <Link to='/' className="fs-3 ubuntu fw-bold  navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
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

            <style jsx>
                {`
                    button[aria-expanded='false'] > .close {
                        display: none;
                    }

                    button[aria-expanded='false'] > .open {
                        display: none;
                    }
                `}
            </style>

          <i class='fas fa-bars open fw-bold text-dark'></i>
          <i class='fas fa-times close fw-bold text-dark'></i>

          
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-6">
            <NavLink activeClassName='active' to="/" className="nav-link active" >
              Characters
            </NavLink> 
            <NavLink to="/episodes"className="nav-link" >
              Episodes
            </NavLink> 
            <NavLink to="/location" className="nav-link" >
              Location
            </NavLink> 
              
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
