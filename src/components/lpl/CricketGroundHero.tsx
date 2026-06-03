export function CricketGroundHero() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: (i * 37 + 13) % 100,
    y: (i * 23 + 7) % 50,
    size: (i % 3) + 1,
    delay: (i % 6) * 0.35,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base sky — dusk cricket atmosphere */}
      <div className="hero-sky absolute inset-0" />

      {/* Aurora / light beams */}
      <div className="hero-aurora absolute inset-0 opacity-70" />

      {/* Stadium floodlights */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-br from-primary/25 via-transparent to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-bl from-accent/20 via-transparent to-transparent blur-3xl" />
      <div className="floodlight-beam absolute left-[12%] top-0 h-[70%] w-40 bg-gradient-to-b from-primary/30 to-transparent blur-2xl" />
      <div className="floodlight-beam absolute right-[12%] top-0 h-[70%] w-40 bg-gradient-to-b from-primary/25 to-transparent blur-2xl" />

      {/* Subtle grid (pitch feel) */}
      <div className="hero-grid absolute inset-0 opacity-[0.04]" />

      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-dot absolute rounded-full bg-white/80"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Horizon glow */}
      <div className="absolute inset-x-0 bottom-[38%] h-32 bg-gradient-to-t from-grass/40 to-transparent blur-2xl" />

      {/* Ground layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[48%]">
        <div className="grass-stripes absolute inset-0" />
        <div className="hero-grass-shine absolute inset-0" />

        {/* Oval boundary */}
        <svg
          className="absolute inset-x-0 bottom-[12%] h-44 w-full opacity-50"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
        >
          <ellipse
            cx="600"
            cy="140"
            rx="520"
            ry="38"
            fill="none"
            stroke="url(#ropeGrad)"
            strokeWidth="2.5"
            strokeDasharray="12 6"
          />
          <defs>
            <linearGradient id="ropeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.82 0.16 85 / 0.2)" />
              <stop offset="50%" stopColor="oklch(0.82 0.16 85 / 0.9)" />
              <stop offset="100%" stopColor="oklch(0.82 0.16 85 / 0.2)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pitch strip */}
        <div className="pitch-center absolute bottom-[16%] left-1/2 h-32 w-10 -translate-x-1/2 rounded-sm bg-pitch/90 shadow-[0_0_40px_oklch(0.82_0.16_85/0.15)]" />
        <div className="absolute bottom-[16%] left-1/2 h-32 w-10 -translate-x-1/2 rounded-sm border border-primary/25" />
        <div className="absolute bottom-[30%] left-1/2 h-px w-20 -translate-x-1/2 bg-white/15" />
        <div className="absolute bottom-[18%] left-1/2 h-px w-20 -translate-x-1/2 bg-white/15" />

        {/* Ball arc */}
        <div className="cricket-ball absolute h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]">
          <div className="absolute inset-0 rounded-full border border-red-900/40" />
        </div>

        {/* Crowd / trees silhouette */}
        <div className="absolute bottom-[42%] left-0 right-0 h-16 bg-gradient-to-t from-background/90 to-transparent" />
        <svg className="absolute bottom-[36%] left-[4%] h-28 w-16 opacity-40" viewBox="0 0 80 128">
          <path
            d="M40 128 L40 60 M40 60 Q20 40 10 20 M40 60 Q35 30 30 10 M40 60 Q50 35 55 15 M40 60 Q60 45 70 25"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className="text-background"
          />
        </svg>
        <svg className="absolute bottom-[36%] right-[4%] h-32 w-20 opacity-35" viewBox="0 0 80 128">
          <path
            d="M40 128 L40 55 M40 55 Q15 35 5 15 M40 55 Q38 25 35 8 M40 55 Q52 38 58 18 M40 55 Q65 42 75 22"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className="text-background"
          />
        </svg>
      </div>

      {/* Cinematic vignette + bottom fade to page */}
      <div className="hero-vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}
