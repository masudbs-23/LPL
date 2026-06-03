import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  /** Keep animating every time element enters viewport */
  repeat?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  repeat = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal",
        `scroll-reveal-${direction}`,
        visible && "scroll-reveal-visible",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type ScrollRevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

/** Stagger children — pass delay via index on each child ScrollReveal, or use wrapper */
export function ScrollRevealStagger({
  children,
  className,
  stagger = 80,
}: ScrollRevealGroupProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) =>
            typeof child === "object" && child !== null ? (
              <ScrollReveal key={i} delay={i * stagger}>
                {child}
              </ScrollReveal>
            ) : (
              child
            ),
          )
        : children}
    </div>
  );
}
