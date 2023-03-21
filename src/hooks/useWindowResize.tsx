import React, { useState, useEffect } from "react";

const useWindowResize = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const updateIsMobile = () => {
      const mobileBreakpoint = 768;
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);
  return isMobile;
};

export default useWindowResize;
