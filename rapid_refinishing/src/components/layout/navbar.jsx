// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/rapid_logo.jpg"; 
import "./navbar.css";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

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
        <Link to="/">Home</Link>

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
              <Link to="/services">All Services</Link>
              <Link to="/services/bathtub">Bathtub & Shower Refinishing</Link>
              <Link to="/services/counter">Countertops</Link>
              <Link to="/services/cabinet">Cabinet Resurfacing & Refacing</Link>
              <Link to="/services/vanity">Vanity & Sink Resurfacing</Link>

            </div>
          )}
        </div>

        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Right - Contact Info */}
      <div className="navbar-contact">
        <a href="tel:6025709821">(602) 570-9821</a>

        <a href="mailto:customerservice@rapidrefinishingco.com">
            customerservice@rapidrefinishingco.com
        </a>
    </div>

    </nav>
  );
}