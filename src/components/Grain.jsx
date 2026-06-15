/* Fixed film-grain overlay — adds analog texture, a hallmark of editorial sites. */
const Grain = () => (
  <svg className="grain" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <filter id="grain-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-noise)" />
  </svg>
);

export default Grain;
