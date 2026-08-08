export function emitCursor(label: string) {
  window.dispatchEvent(new CustomEvent("cursor-label", { detail: label }));
}
