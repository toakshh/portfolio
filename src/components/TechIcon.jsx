import { useState } from "react";

/*
 * Renders a tech logo from a CDN URL. If the image is missing (or no URL was
 * provided), it falls back to a tinted monogram chip so the UI never breaks.
 */
const TechIcon = ({ icon, name, color = "#22d3ee", size = 26 }) => {
  const [failed, setFailed] = useState(false);
  const letters = name
    .replace(/[^A-Za-z0-9 .]/g, "")
    .split(/[ .]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!icon || failed) {
    return (
      <span
        style={{ color, width: size, height: size, fontSize: size * 0.42 }}
        className="grid place-items-center font-mono font-semibold rounded-md"
        aria-hidden="true"
      >
        {letters}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
};

export default TechIcon;
