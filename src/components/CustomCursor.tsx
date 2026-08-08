import { useState, useEffect, useRef } from "react";
import { MONO } from "@/lib/constants";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const h = (e: Event) => setLabel((e as CustomEvent).detail ?? "");
    window.addEventListener("cursor-label", h);
    return () => window.removeEventListener("cursor-label", h);
  }, []);

  const has = !!label;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ willChange: "transform", mixBlendMode: "difference" }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            marginLeft: -3,
            marginTop: -3,
            borderRadius: "50%",
            background: "#fff",
            opacity: visible && !has ? 1 : 0,
            transition: "opacity 0.15s",
          }}
        />
      </div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ willChange: "transform", mixBlendMode: has ? "normal" : "difference" }}
      >
        <div
          style={{
            width: has ? 72 : 28,
            height: has ? 72 : 28,
            marginLeft: has ? -36 : -14,
            marginTop: has ? -36 : -14,
            borderRadius: "50%",
            border: has ? "none" : "1.5px solid #fff",
            background: has ? "#fff" : "transparent",
            opacity: visible ? 1 : 0,
            transition:
              "width .26s cubic-bezier(0.34,1.56,0.64,1),height .26s cubic-bezier(0.34,1.56,0.64,1),margin .26s cubic-bezier(0.34,1.56,0.64,1),background .18s,opacity .15s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {has && (
            <span
              style={{
                fontFamily: MONO,
                fontSize: 8,
                letterSpacing: "0.14em",
                color: "#000",
                lineHeight: 1.4,
                textAlign: "center",
              }}
            >
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
