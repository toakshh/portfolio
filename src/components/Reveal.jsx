import useReveal from "../hooks/useReveal";

/*
 * Wraps children in a scroll-reveal animation.
 * `delay` (ms) staggers grouped items; `as` lets you change the tag.
 */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
