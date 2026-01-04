// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";

/**
 * Improved loader:
 * - Shows immediately without entrance animation (prevents 'pop').
 * - After 4s, triggers a smooth fade-out sequence (isHiding -> overlay transitions).
 * - Logo is static (no scale/pop) so it looks integrated with background.
 */

export default function MyApp({ Component, pageProps }: AppProps) {
  // overlayVisible keeps the overlay mounted; isHiding toggles the fade animation
  const [overlayVisible, setOverlayVisible] = useState<boolean>(true);
  const [isHiding, setIsHiding] = useState<boolean>(false);
  const hideTimer = useRef<number | null>(null);
  const removeTimer = useRef<number | null>(null);

  useEffect(() => {
    // Always show loader for 4 seconds
    hideTimer.current = window.setTimeout(() => {
      // start hide animation
      setIsHiding(true);

      // after fade duration (1200ms), unmount the overlay
      removeTimer.current = window.setTimeout(() => {
        setOverlayVisible(false);
        setIsHiding(false);
        removeTimer.current = null;
      }, 1200); // matches fade out duration
      hideTimer.current = null;
    }, 4000);

    return () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
      if (removeTimer.current) {
        window.clearTimeout(removeTimer.current);
        removeTimer.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Overlay is mounted while overlayVisible is true */}
      {overlayVisible && (
        <div
          aria-hidden={!overlayVisible}
          // NOTE: no transition on mount; transitions only when isHiding === true
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
            isHiding
              ? "opacity-0 translate-y-8 pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            {/* -- STATIC LOGO: no transform/scale/shadow to avoid pop effect -- */}
            <img
              src="/images/carekov-logo.png"
              alt="CareKov"
              className="w-72 h-auto" /* larger per your previous request */
              style={{ imageRendering: "auto" }}
            />

            {/* Loading bar (animation only) */}
            <div className="w-[60vw] max-w-md h-3 rounded-full bg-slate-100 overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg,#06b6d4,#0891b2)",
                  transformOrigin: "left center",
                  animation: "carekov-fill 4s ease-in-out forwards",
                }}
              />
            </div>
          </div>

          <style jsx global>{`
            @keyframes carekov-fill {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(1);
              }
            }
          `}</style>
        </div>
      )}

      {/* Main app content (disable pointer events while overlay mounted to prevent clicks) */}
      <div className={`${overlayVisible ? "pointer-events-none" : ""}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
