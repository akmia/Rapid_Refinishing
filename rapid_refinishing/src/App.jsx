// src/App.jsx
import Navbar from "./components/layout/navbar";
import "./index.css";
import Footer from "./components/layout/footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

