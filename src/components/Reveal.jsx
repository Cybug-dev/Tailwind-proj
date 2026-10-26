import { useEffect, useRef } from "react";

const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;

    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      element.dataset.revealed = "true";
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className={`reveal ${className}`}
      data-reveal={direction}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
