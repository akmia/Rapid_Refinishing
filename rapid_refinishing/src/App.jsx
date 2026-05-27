// src/App.jsx
import Navbar from "./components/layout/navbar";
import "./index.css";
import Footer from "./components/layout/footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

