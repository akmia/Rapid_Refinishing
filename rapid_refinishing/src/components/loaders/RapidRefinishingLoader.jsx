// src/components/loaders/RapidRefinishingLoader.jsx

import { useEffect, useRef, useState } from "react";

export default function RapidRefinishingLoader({ onFinish }) {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      // START FADE OUT
      setFadeOut(true);

      // REMOVE LOADER AFTER FADE
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1000);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white
        transition-opacity duration-1000
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src={new URL("../../assets/videos/rapid.mp4", import.meta.url).toString()}
          type="video/mp4"
        />
      </video>
    </div>
  );
}