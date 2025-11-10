import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que mudar de rota, rola suavemente até o topo
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
};
