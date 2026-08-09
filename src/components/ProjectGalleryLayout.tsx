import type { ReactNode } from "react";
import type { ProjectGalleryItem } from "@/data/types";
import { GalleryImageFrame } from "@/components/GalleryImageFrame";

type Row = ProjectGalleryItem | ProjectGalleryItem[];

function isWide(item: ProjectGalleryItem, index: number) {
  return item.wide ?? index % 3 === 0;
}

function buildRows(items: ProjectGalleryItem[]): Row[] {
  const rows: Row[] = [];
  let pair: ProjectGalleryItem[] = [];

  items.forEach((item, index) => {
    if (isWide(item, index)) {
      if (pair.length) {
        rows.push(pair);
        pair = [];
      }
      rows.push(item);
      return;
    }

    pair.push(item);
    if (pair.length === 2) {
      rows.push(pair);
      pair = [];
    }
  });

  if (pair.length) rows.push(pair);
  return rows;
}

type Props = {
  items: ProjectGalleryItem[];
  accent?: string;
  showAccent?: boolean;
  renderFigure?: (content: ReactNode, item: ProjectGalleryItem, index: number) => ReactNode;
};

export function ProjectGalleryLayout({
  items,
  accent,
  showAccent = false,
  renderFigure,
}: Props) {
  const rows = buildRows(items);

  const figure = (item: ProjectGalleryItem, index: number) => {
    const content = (
      <>
        <GalleryImageFrame item={item} accent={accent} showAccent={showAccent} />
        {item.caption && (
          <figcaption className="mt-3 type-body type-body-muted" style={{ maxWidth: "48ch" }}>
            {item.caption}
          </figcaption>
        )}
      </>
    );

    if (renderFigure) return renderFigure(content, item, index);

    return (
      <figure key={`${item.src}-${index}`} className="min-w-0">
        {content}
      </figure>
    );
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {rows.map((row, rowIndex) => {
        if (Array.isArray(row)) {
          return (
            <div
              key={`pair-${rowIndex}`}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start"
            >
              {row.map((item, i) => (
                <div key={`${item.src}-${i}`} className={i === 1 ? "sm:mt-6" : "min-w-0"}>
                  {figure(item, rowIndex * 2 + i)}
                </div>
              ))}
            </div>
          );
        }

        return figure(row, rowIndex);
      })}
    </div>
  );
}
