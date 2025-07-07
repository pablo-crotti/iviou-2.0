import type { JSX } from "react";
import React from "react";

export const interpolate = (
  str: string,
  components: Record<string, JSX.Element>
): React.ReactNode[] => {
  const parts = str.split(/(<\/?\w+\s*\/?>)/g).filter(Boolean);

  return parts.map((part, index) => {
    const match = part.match(/^<(\w+)\s*\/>$/);
    if (match) {
      const tag = match[1];
      return <React.Fragment key={index}>{components[tag]}</React.Fragment>;
    } else {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });
};
