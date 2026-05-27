import { useEffect } from "react";

// Slightly reduced macOS-style arrow cursor (18px instead of default ~24px)
const ARROW_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><path d='M4 2 L4 20 L8.5 15.5 L12.5 22 L14.5 21 L10.5 14.5 L17 14.5 Z' fill='white' stroke='black' stroke-width='1.4' stroke-linejoin='round'/></svg>`;

function toDataURI(svg: string) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const ARROW_CURSOR = `${toDataURI(ARROW_SVG)} 0 0, default`;
const HAND_CURSOR  = "pointer";

export function CustomCursor() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "custom-cursor";
    style.textContent = `
      *, *::before, *::after { cursor: ${ARROW_CURSOR} !important; }
      a, button, [data-magnetic], input, textarea, select, [role='button'], label[for], summary {
        cursor: ${HAND_CURSOR} !important;
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById("custom-cursor")?.remove(); };
  }, []);

  return null;
}
