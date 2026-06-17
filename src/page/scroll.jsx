import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroll() {

const { pathname } = useLocation();

useEffect(() => {
    // Force the window to snap to the top center on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default Scroll