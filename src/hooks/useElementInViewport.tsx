import React, { useEffect } from "react";

const useElementInViewport = (
  ref: React.RefObject<HTMLElement>,
  inViewportCallback: () => void,
  notInViewportCallback: () => void
) => {
  useEffect(() => {
    const checkVisibility = () => {
      const rect = ref.current && ref.current.getBoundingClientRect();
      const isInViewport =
        rect &&
        rect.top <= window.innerHeight - rect.height &&
        rect.top >= 0 &&
        rect.bottom > 0 &&
        rect.bottom < window.innerHeight + rect.height;
      if (!isInViewport) {
        notInViewportCallback();
        return;
      }
      inViewportCallback();
    };
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [inViewportCallback, notInViewportCallback, ref]);
};

export default useElementInViewport;
