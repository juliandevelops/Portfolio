import type { ElementType, ReactNode } from "react";

type PageSectionProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function PageSection({
  as = "section",
  className,
  children,
}: PageSectionProps) {
  const Tag = as;
  const classes = ["pageSection", "stack", className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
