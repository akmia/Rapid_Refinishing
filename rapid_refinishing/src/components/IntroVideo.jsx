import { useEffect, useRef, useState } from "react";

export default function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function scheduleFinish(delayMs) {
    if (!onFinish) return;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      onFinish();
    }, delayMs);
  }

  const safeFinish = () => {
    if (!onFinish) return;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    onFinish();
  };

  return (
    <div className="intro-overlay">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={() => {
          setIsReady(true);
        }}
        onEnded={safeFinish}
        onError={() => {
          // If the video can't be played for any reason, fail open and continue.
          scheduleFinish(0);
        }}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (!v) return;

          const durationSec = v.duration;
          if (Number.isFinite(durationSec) && durationSec > 0) {
            const ms = Math.max(0, durationSec * 1000 - 150);
            scheduleFinish(ms);
          } else {
            scheduleFinish(2000);
          }
        }}
        // Safety fallback: if autoplay is blocked, this still lets users proceed
        // (and avoids the intro overlay getting stuck forever).
        onPlay={() => {
          if (!timeoutRef.current) scheduleFinish(8000);
        }}
      >
        <source
          src={new URL("../assets/intro.mp4", import.meta.url).toString()}
          type="video/mp4"
        />
      </video>

      {/* Prevent a white/blank first paint in case the browser hasn't buffered yet */}
      {!isReady && <div style={{ position: "absolute", inset: 0, background: "#000" }} />}
    </div>
  );
}

