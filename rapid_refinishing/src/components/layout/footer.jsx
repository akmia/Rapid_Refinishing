// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/images/rapid_logo.jpg";
import "../../components/layout/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Col 1 - Logo only */}
        <div className="footer-logo">
          <img src={logo} alt="Rapid Refinishing Co." />
        </div>

        {/* Col 2 - Services + Areas */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/bathtub">Bathtubs & Showers</Link></li>
            <li><Link to="/services/countertops">Countertops</Link></li>
            <li><Link to="/services/sink">Vanities & Sinks</Link></li>
            <li><Link to="/services/cabinet">Cabinet Resurfacing & Refacing</Link></li>
          </ul>
          <h4 className="footer-subheading">Areas we serve</h4>
          <p className="footer-areas">
            Serving Phoenix, <Link to="#">Scottsdale</Link>, Avondale, Tempe, Chandler,{" "}
            <Link to="#">Mesa</Link>, Peoria, <Link to="#">Cave Creek</Link>, Tucson, and
            even Northern Arizona including Flagstaff, Prescott and surrounding areas!
          </p>
        </div>

        {/* Col 3 - Stone Colors + More */}
        <div className="footer-col">
          <h4>Stone Colors</h4>
          <ul>
            <li><Link to="#">Spray Stone</Link></li>
          </ul>
          <h4 className="footer-subheading">More</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="#">Blog</Link></li>
          </ul>
        </div>

        {/* Col 4 - Contact + Hours */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <p><a href="tel:6025709821">(602) 570-9821</a></p>
          <p>
            <a href="mailto:customerservice@rapidrefinishingco.com">
              customerservice@rapidrefinishingco.com
            </a>
          </p>
          <h4 className="footer-subheading">Working Hours</h4>
          <p>Monday - Saturday: 9:00am - 5:00pm</p>
          <p>(Phone until 4:30pm)</p>
        </div>

        {/* Col 5 - Map */}
        <div className="footer-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1!2d-112.07!3d33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiTiAxMTLCsDA0JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

      </div>
    </footer>
  );
}