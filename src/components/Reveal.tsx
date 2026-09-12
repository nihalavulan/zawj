import type { ElementType, ReactNode } from "react";

/**
 * Adds a scroll-reveal animation via CSS only (see `.reveal` in globals.css).
 * Content is present and visible by default — the animation is pure
 * progressive enhancement, so it never hides content while JS loads and it
 * degrades to fully-visible on browsers without scroll-timeline support.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={`reveal ${className ?? ""}`}>{children}</Tag>;
}
