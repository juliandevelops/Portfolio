import React from "react";

type GlyphVariant = "primary" | "circle" | "mono-light" | "mono-dark";

const STROKE: Record<GlyphVariant, string> = {
  primary: "#E6A23C",
  circle: "#E6A23C",
  "mono-light": "#FFFFFF",
  "mono-dark": "#141414",
};

const TILE: Record<GlyphVariant, React.ReactNode> = {
  primary: <rect width="120" height="120" rx="12" fill="#141414" />,
  circle: <circle cx="60" cy="60" r="60" fill="#141414" />,
  "mono-light": null,
  "mono-dark": null,
};

export default function Glyph({
  variant = "primary",
  size,
  className,
  title = "juliandevelops glyph",
}: {
  variant?: GlyphVariant;
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size ?? 24}
      height={size ?? 24}
      className={className}
      role="img"
      aria-label={title}
    >
      {TILE[variant]}
      <g
        transform="translate(15,15) scale(0.75)"
        fill="none"
        stroke={STROKE[variant]}
        strokeWidth="10"
        strokeLinecap="square"
      >
        <path d="M12 44 V12 H44" />
        <path d="M76 12 H108 V44" />
        <path d="M12 76 V108 H44" />
        <path d="M76 108 H108 V76" />
        <g transform="translate(7.5,20.5)">
          <path
            d="M72 6 V52 A16 16 0 0 1 56 68 H46 A13 13 0 0 1 33 55 V48"
            strokeLinecap="butt"
          />
        </g>
      </g>
    </svg>
  );
}
