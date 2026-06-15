import useReveal from "../hooks/useReveal";

/*
 * Masked, line-by-line heading reveal. Pass an array of lines; each slides up
 * from behind a clip with a staggered delay once it scrolls into view.
 */
const RevealText = ({ lines = [], as: Tag = "h2", className = "", step = 90 }) => {
  const [ref, inView] = useReveal({ threshold: 0.25 });
  return (
    <Tag ref={ref} className={`${inView ? "in-view" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span
            className="line-inner"
            style={{ transitionDelay: `${i * step}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
