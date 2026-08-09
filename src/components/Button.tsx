import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type Variant = "fill" | "outline" | "ghost" | "invert";
type Size = "sm" | "md";
type Tone = "light" | "dark";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  accent?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const sizes: Record<Size, { pad: string; text: string; icon: string }> = {
  sm: { pad: "py-2.5 px-4", text: "text-[9px]", icon: "w-3 h-3" },
  md: { pad: "py-3 px-5", text: "text-[10px]", icon: "w-3.5 h-3.5" },
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  variant = "fill",
  size = "md",
  accent,
  tone = "light",
  children,
  className = "",
  href,
  ...props
}: ButtonProps | LinkProps) {
  const s = sizes[size];
  const isGhost = variant === "ghost";
  const showArrow = !isGhost;

  const base = [
    "group inline-flex items-center justify-center gap-2.5",
    "font-mono uppercase tracking-[0.14em] select-none",
    "transition-[color,background-color,border-color,filter,transform] duration-300 ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0e0e]/30",
    s.text,
    className,
  ].join(" ");

  const style: CSSProperties | undefined =
    accent && (variant === "fill" || variant === "outline")
      ? ({ "--btn-accent": accent } as CSSProperties)
      : undefined;

  const variantClass = (() => {
    if (isGhost) {
      return tone === "dark" ? "btn-ghost-dark" : "btn-ghost-light";
    }
    if (variant === "invert") return "btn-invert";
    if (variant === "outline") return accent ? "btn-outline-accent" : "btn-outline";
    return accent ? "btn-fill-accent" : "btn-fill";
  })();

  const content = (
    <>
      <span className="relative">{children}</span>
      {showArrow && (
        <ArrowIcon
          className={`${s.icon} shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        />
      )}
    </>
  );

  const classes = [base, variantClass, !isGhost ? s.pad : "", !isGhost ? "rounded-sm" : ""]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...(props as Omit<LinkProps, keyof BaseProps | "href">)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} style={style} {...(props as ButtonProps)}>
      {content}
    </button>
  );
}
