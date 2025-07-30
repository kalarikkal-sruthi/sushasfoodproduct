import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top-left of the page
  }, [pathname]);

  return null; // this component doesn't render anything
};

export default ScrollToTop;
