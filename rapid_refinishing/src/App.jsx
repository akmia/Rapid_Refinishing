// src/App.jsx
import { useState } from "react";

import Navbar from "./components/layout/navbar";
import "./index.css";
import Footer from "./components/layout/footer";
import AppRoutes from "./routes/AppRoutes";
import IntroVideo from "./components/IntroVideo";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroVideo onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <Navbar />
          <AppRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;