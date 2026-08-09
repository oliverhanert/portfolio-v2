import type { ProjectGalleryItem } from "@/data/types";

type Props = {
  item: ProjectGalleryItem;
  accent?: string;
  showAccent?: boolean;
};

export function GalleryImageFrame({ item, accent, showAccent = false }: Props) {
  const contain = (item.fit ?? "cover") === "contain";

  return (
    <div
      className="overflow-hidden relative"
      style={{
        background: item.bg ?? "#111",
        borderTop: showAccent && accent ? `2px solid ${accent}` : undefined,
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full block"
        style={
          contain
            ? {
                objectFit: "contain",
                width: "100%",
                height: "auto",
                maxHeight: "min(72vh, 640px)",
                opacity: 0.95,
              }
            : {
                aspectRatio: item.aspect ?? "16/10",
                objectFit: "cover",
                objectPosition: "center",
                opacity: 0.92,
              }
        }
      />
    </div>
  );
}
