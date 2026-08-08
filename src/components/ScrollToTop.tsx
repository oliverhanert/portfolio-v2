import { useEffect } from "react";
import { useLocation } from "react-router";
import { emitCursor } from "@/lib/cursor";

/** Scroll til top ved route-skift (React Router bevarer ellers scroll-position). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    emitCursor("");
  }, [pathname]);

  return null;
}
