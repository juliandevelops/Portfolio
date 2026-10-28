import type { ElementType, ReactNode } from "react";

type StackProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Stack({ as = "div", className, children }: StackProps) {
  const Tag = as;
  const classes = ["stack", className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
