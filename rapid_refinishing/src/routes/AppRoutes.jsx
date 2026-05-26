//src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Bathtub from "../pages/Services/bathtub";
import Counter from "../pages/Services/counter";
import Cabinet from "../pages/Services/cabinet";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/bathtub" element={<Bathtub />} />
      <Route path="/services/counter" element={<Counter />} />
      <Route path="/services/cabinet" element={<Cabinet />} />
    </Routes>
  );
}


