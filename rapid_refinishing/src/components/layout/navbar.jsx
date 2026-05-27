// src/components/layout/Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/rapid_logo.jpg";
import "./navbar.css";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <nav className="navbar">

      {/* Left - Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Rapid Refinishing" />
        </Link>
      </div>

      {/* Center - Nav Links */}
      <div className="nav-links">

        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span className="dropdown-trigger">
            Services <span className="arrow">▾</span>
          </span>

          {servicesOpen && (
            <div className="dropdown-menu">

              <NavLink
                to="/services"
                className={navLinkClass}
              >
                All Services
              </NavLink>

              <NavLink
                to="/services/bathtub"
                className={navLinkClass}
              >
                Bathtub & Shower Refinishing
              </NavLink>

              <NavLink
                to="/services/counter"
                className={navLinkClass}
              >
                Countertops
              </NavLink>

              <NavLink
                to="/services/cabinet"
                className={navLinkClass}
              >
                Cabinet Resurfacing & Refacing
              </NavLink>

              <NavLink
                to="/services/vanity"
                className={navLinkClass}
              >
                Vanity & Sink Resurfacing
              </NavLink>

            </div>
          )}
        </div>

        <NavLink
          to="/gallery"
          className={navLinkClass}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/about"
          className={navLinkClass}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={navLinkClass}
        >
          Contact Us
        </NavLink>

      </div>

      {/* Right - Contact Info */}
      <div className="navbar-contact">

        <a href="tel:6025709821">
          (602) 570-9821
        </a>

        <a href="mailto:customerservice@rapidrefinishingco.com">
          customerservice@rapidrefinishingco.com
        </a>

      </div>

    </nav>
  );
}