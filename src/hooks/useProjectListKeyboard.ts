import { useEffect } from "react";

export function useProjectListKeyboard(
  listId: string,
  enabled: boolean,
  onOpen: (id: string) => void,
) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const list = document.getElementById(listId);
      if (!list) return;

      const buttons = Array.from(
        list.querySelectorAll<HTMLButtonElement>("button[data-project-id]"),
      );
      if (!buttons.length) return;

      const active = document.activeElement as HTMLElement | null;
      const idx = buttons.findIndex((b) => b === active);

      if (e.key === "ArrowDown" || e.key === "j") {
        if (idx >= 0 && idx < buttons.length - 1) {
          e.preventDefault();
          buttons[idx + 1].focus();
        } else if (idx === -1) {
          buttons[0].focus();
        }
      }

      if (e.key === "ArrowUp" || e.key === "k") {
        if (idx > 0) {
          e.preventDefault();
          buttons[idx - 1].focus();
        }
      }

      if ((e.key === "Enter" || e.key === " ") && idx >= 0) {
        e.preventDefault();
        const id = buttons[idx].dataset.projectId;
        if (id) onOpen(id);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, listId, onOpen]);
}
