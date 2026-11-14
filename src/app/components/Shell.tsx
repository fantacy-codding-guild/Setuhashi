import type { ReactNode } from "react";

function BridgeScene() {
  return (
    <svg
      viewBox="0 0 800 360"
      className="w-full max-w-2xl"
      role="img"
      aria-label="A bridge connecting India and Japan"
    >
      <defs>
        <linearGradient id="sky" x1="0" x2="1">
          <stop offset="0" stopColor="#FF9933" stopOpacity=".30" />
          <stop offset="1" stopColor="#BC002D" stopOpacity=".30" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" rx="24" fill="url(#sky)" />

      {/* Japan: sun */}
      <circle cx="640" cy="110" r="46" fill="#BC002D" />

      {/* India: chakra */}
      <g
        transform="translate(160 110)"
        stroke="#FF9933"
        strokeWidth="2"
        fill="none"
      >
        <circle r="40" strokeWidth="4" />
        <circle r="6" fill="#FF9933" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="-6"
            x2="0"
            y2="-38"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>

      {/* Bridge */}
      <path
        d="M90 270 Q400 90 710 270"
        stroke="#FFF8EC"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {[200, 300, 400, 500, 600].map((x) => {
        const t = (x - 90) / 620;
        const y = (1 - t) * (1 - t) * 270 + 2 * (1 - t) * t * 90 + t * t * 270;
        return (
          <line
            key={x}
            x1={x}
            y1={y}
            x2={x}
            y2={278}
            stroke="#FFF8EC"
            strokeWidth="3"
            opacity=".6"
          />
        );
      })}

      {/* Water */}
      {[290, 312, 334].map((y, i) => (
        <path
          key={y}
          d={`M40 ${y} q40 -14 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0`}
          stroke="#FFF8EC"
          strokeOpacity={0.35 - i * 0.08}
          strokeWidth="2"
          fill="none"
        />
      ))}
    </svg>
  );
}

export default function Shell({
  badge,
  title,
  message,
  children,
}: {
  badge: string;
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 py-12 text-center">
      {/* giant faint kanji */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none text-[28rem] font-bold leading-none text-vermilion/10"
      >
        橋
      </span>

      <BridgeScene />

      <div className="relative z-10 max-w-xl space-y-4">
        <span className="inline-block rounded-full border border-saffron/50 px-4 py-1 text-xs tracking-[0.25em] text-saffron uppercase">
          {badge}
        </span>
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="text-lg text-washi/80">{message}</p>
        {children}
      </div>

      <footer className="relative z-10 text-sm text-washi/50">
        <span className="text-saffron">सेतु</span> +{" "}
        <span className="text-vermilion">橋</span> · setuhashi.com
      </footer>
    </main>
  );
}
