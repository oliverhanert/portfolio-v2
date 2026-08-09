import { useNavigate, useLocation, Link } from "react-router";
import { motion } from "motion/react";
import { OHMark } from "./OHMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/context";
import { MONO } from "@/lib/constants";

export function TopBar({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-7 py-5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <button
        onClick={() => navigate("/")}
        aria-label="Home"
        className="rounded-full flex items-center justify-center hover:opacity-60 transition-opacity"
        style={{ cursor: "none" }}
      >
        <OHMark dark={dark} />
      </button>

      <div className="flex items-center gap-4 sm:gap-5">
        <LanguageSwitcher dark={dark} />
        {isHome ? (
          <Link
            to="/contacts"
            className="hover:opacity-40 transition-opacity"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
              cursor: "none",
              textDecoration: "none",
            }}
          >
            {t.nav.contact}
          </Link>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="hover:opacity-40 transition-opacity"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
              cursor: "none",
            }}
          >
            {t.nav.back}
          </button>
        )}
      </div>
    </motion.header>
  );
}
