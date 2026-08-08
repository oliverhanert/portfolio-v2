type Props = {
  src: string;
  size?: number;
  className?: string;
};

export function ContactIcon({ src, size = 48, className = "" }: Props) {
  return (
    <span
      className={`block shrink-0 opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 ${className}`}
      style={{
        width: size,
        height: size,
        background: "rgba(250,249,247,0.9)",
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      aria-hidden
    />
  );
}
