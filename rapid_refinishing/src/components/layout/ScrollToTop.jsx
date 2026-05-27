import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid forcing scroll on initial mount.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

