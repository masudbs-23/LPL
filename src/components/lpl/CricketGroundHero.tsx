const HERO_BG_IMAGE = "/images/hero-stadium.jpg";

export function CricketGroundHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Stadium photo background */}
      <div
        className="hero-photo absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      />

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/45 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      <div className="hero-vignette absolute inset-0 opacity-90" />

      {/* Warm accent glow */}
      <div className="hero-aurora absolute inset-0 opacity-30" />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/85 to-transparent" />
    </div>
  );
}
