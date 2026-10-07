import { useId, useMemo } from 'react';
import type { ArtVariant } from '../data/site';

/**
 * Generated, dark architectural compositions used in place of photography.
 * Deterministic (seeded) so they render identically on every load, weigh a
 * few KB, and scale crisply to any viewport. Swap for licensed photography
 * via `media` in data/site.ts.
 */

const W = 1600;
const H = 1000;

function rng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

type Props = {
  variant: ArtVariant;
  seed?: number;
  className?: string;
  label?: string;
};

export default function Art({ variant, seed = 7, className = '', label }: Props) {
  const uid = useId().replace(/:/g, '');
  const body = useMemo(() => draw(variant, seed, uid), [variant, seed, uid]);
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {body}
    </svg>
  );
}

function draw(variant: ArtVariant, seed: number, id: string) {
  switch (variant) {
    case 'skyline':
      return <Skyline seed={seed} id={id} />;
    case 'facade':
      return <Facade seed={seed} id={id} />;
    case 'colonnade':
      return <Colonnade id={id} />;
    case 'horizon':
      return <Horizon seed={seed} id={id} />;
    case 'bridge':
      return <Bridge id={id} />;
    case 'atrium':
      return <Atrium id={id} />;
  }
}

function Sky({ id, glowY = 0.72, glow = 0.22 }: { id: string; glowY?: number; glow?: number }) {
  return (
    <>
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#070808" />
          <stop offset={glowY - 0.1} stopColor="#121412" />
          <stop offset={glowY} stopColor="#2a2721" />
          <stop offset="1" stopColor="#0B0D0C" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="0.5" cy={glowY} r="0.6">
          <stop offset="0" stopColor="#B8A47A" stopOpacity={glow} />
          <stop offset="1" stopColor="#B8A47A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#sky-${id})`} />
      <rect width={W} height={H} fill={`url(#glow-${id})`} />
    </>
  );
}

function Skyline({ seed, id }: { seed: number; id: string }) {
  const r = rng(seed);
  const layers = [
    { fill: '#161917', base: 760, min: 140, max: 360, wMin: 50, wMax: 120, lit: 0.04 },
    { fill: '#101211', base: 820, min: 220, max: 560, wMin: 70, wMax: 170, lit: 0.07 },
    { fill: '#090a09', base: 900, min: 160, max: 700, wMin: 90, wMax: 220, lit: 0.03 },
  ];
  return (
    <>
      <Sky id={id} glowY={0.74} />
      {layers.map((l, li) => {
        const towers: JSX.Element[] = [];
        let x = -40;
        let k = 0;
        while (x < W + 40) {
          const w = l.wMin + r() * (l.wMax - l.wMin);
          const h = l.min + r() * (l.max - l.min);
          const top = l.base - h;
          towers.push(<rect key={`t${k}`} x={x} y={top} width={w} height={H - top} fill={l.fill} />);
          if (r() > 0.6) {
            towers.push(
              <rect key={`c${k}`} x={x + w * 0.42} y={top - 40 - r() * 60} width={2} height={100} fill={l.fill} />,
            );
          }
          // Sparse lit windows
          for (let wy = top + 18; wy < l.base + 80; wy += 14) {
            for (let wx = x + 8; wx < x + w - 8; wx += 12) {
              if (r() < l.lit) {
                towers.push(
                  <rect
                    key={`w${k}-${wx}-${wy}`}
                    x={wx}
                    y={wy}
                    width={5}
                    height={7}
                    fill="#D9C79E"
                    opacity={0.25 + r() * 0.5}
                  />,
                );
              }
            }
          }
          x += w + r() * 18;
          k++;
        }
        return <g key={li}>{towers}</g>;
      })}
      <defs>
        <linearGradient id={`haze-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#0B0D0C" stopOpacity="0" />
          <stop offset="1" stopColor="#0B0D0C" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#haze-${id})`} />
    </>
  );
}

function Facade({ seed, id }: { seed: number; id: string }) {
  const r = rng(seed + 11);
  const cols: JSX.Element[] = [];
  // Columns shrink toward the right to suggest perspective.
  let x = -20;
  let w = 220;
  let i = 0;
  while (x < W) {
    const rows = 9;
    const rowH = H / rows;
    for (let j = 0; j < rows; j++) {
      const shade = 10 + Math.floor(r() * 10);
      cols.push(
        <rect
          key={`p${i}-${j}`}
          x={x + 3}
          y={j * rowH + 3}
          width={w - 6}
          height={rowH - 6}
          fill={`rgb(${shade + 2},${shade + 3},${shade + 2})`}
        />,
      );
      if (r() < 0.05) {
        cols.push(
          <rect key={`l${i}-${j}`} x={x + 3} y={j * rowH + 3} width={w - 6} height={rowH - 6} fill="#B8A47A" opacity={0.12 + r() * 0.12} />,
        );
      }
    }
    cols.push(<rect key={`m${i}`} x={x - 1} y={0} width={3} height={H} fill="#1d201d" />);
    x += w;
    w = Math.max(28, w * 0.86);
    i++;
  }
  return (
    <>
      <rect width={W} height={H} fill="#070808" />
      {cols}
      <defs>
        <linearGradient id={`sweep-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.25" stopColor="#B8A47A" stopOpacity="0" />
          <stop offset="0.45" stopColor="#E6D7B0" stopOpacity="0.16" />
          <stop offset="0.6" stopColor="#B8A47A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`fshade-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0B0D0C" stopOpacity="0.1" />
          <stop offset="1" stopColor="#0B0D0C" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#sweep-${id})`} />
      <rect width={W} height={H} fill={`url(#fshade-${id})`} />
    </>
  );
}

function Colonnade({ id }: { id: string }) {
  const vx = W * 0.5;
  const vy = H * 0.46;
  const items: JSX.Element[] = [];
  for (let i = 0; i < 9; i++) {
    const t = Math.pow(0.72, i);
    const colH = 980 * t;
    const colW = 90 * t;
    const off = 640 * t;
    const top = vy - colH * 0.52;
    const shade = 8 + i * 2;
    const fill = `rgb(${shade},${shade + 1},${shade})`;
    items.push(
      <rect key={`l${i}`} x={vx - off - colW} y={top} width={colW} height={colH} fill={fill} />,
      <rect key={`r${i}`} x={vx + off} y={top} width={colW} height={colH} fill={fill} />,
      <rect key={`le${i}`} x={vx - off - 2} y={top} width={2} height={colH} fill="#B8A47A" opacity={0.2 * t + 0.05} />,
    );
    if (i < 8) {
      const t2 = Math.pow(0.72, i + 1);
      items.push(
        <polygon
          key={`s${i}`}
          points={`${vx - off},${vy + colH * 0.48} ${vx - 640 * t2},${vy + 980 * t2 * 0.48} ${vx + 640 * t2},${vy + 980 * t2 * 0.48} ${vx + off},${vy + colH * 0.48}`}
          fill={`url(#shaft-${id})`}
          opacity={0.6}
        />,
      );
    }
  }
  return (
    <>
      <defs>
        <radialGradient id={`end-${id}`} cx="0.5" cy="0.46" r="0.18">
          <stop offset="0" stopColor="#E6D7B0" stopOpacity="0.35" />
          <stop offset="1" stopColor="#B8A47A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`shaft-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B8A47A" stopOpacity="0.06" />
          <stop offset="1" stopColor="#B8A47A" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="#060707" />
      <rect width={W} height={H} fill={`url(#end-${id})`} />
      {items}
    </>
  );
}

function Horizon({ seed, id }: { seed: number; id: string }) {
  const r = rng(seed + 3);
  const hy = H * 0.58;
  const streaks: JSX.Element[] = [];
  for (let i = 0; i < 70; i++) {
    const y = hy + 6 + Math.pow(r(), 1.6) * (H - hy);
    const w = 60 + r() * 520 * (1 - (y - hy) / (H - hy) + 0.2);
    streaks.push(
      <rect key={i} x={W / 2 - w / 2 + (r() - 0.5) * 500} y={y} width={w} height={1 + r() * 1.5} fill="#D9C79E" opacity={0.03 + r() * 0.12} />,
    );
  }
  const skyline: JSX.Element[] = [];
  let x = W * 0.58;
  while (x < W * 0.86) {
    const w = 8 + r() * 22;
    const h = 8 + r() * 46;
    skyline.push(<rect key={x} x={x} y={hy - h} width={w} height={h} fill="#0d0f0e" />);
    x += w + r() * 4;
  }
  return (
    <>
      <defs>
        <linearGradient id={`hsky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#080909" />
          <stop offset="0.5" stopColor="#151714" />
          <stop offset="0.58" stopColor="#2e2a22" />
          <stop offset="0.6" stopColor="#0f110f" />
          <stop offset="1" stopColor="#070808" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#hsky-${id})`} />
      {skyline}
      <rect x={0} y={hy} width={W} height={1.5} fill="#D9C79E" opacity={0.35} />
      {streaks}
    </>
  );
}

function Bridge({ id }: { id: string }) {
  const px = W * 0.62;
  const deckY = H * 0.7;
  const top = H * 0.08;
  const cables: JSX.Element[] = [];
  for (let i = 1; i <= 16; i++) {
    const a = top + 40 + i * 14;
    cables.push(
      <line key={`l${i}`} x1={px} y1={a} x2={px - i * 62} y2={deckY} stroke="#B8A47A" strokeOpacity={0.12 + i * 0.012} strokeWidth={1.2} />,
      <line key={`r${i}`} x1={px + 36} y1={a} x2={px + 36 + i * 62} y2={deckY} stroke="#B8A47A" strokeOpacity={0.12 + i * 0.012} strokeWidth={1.2} />,
    );
  }
  return (
    <>
      <Sky id={id} glowY={0.7} glow={0.18} />
      {cables}
      <rect x={px} y={top} width={36} height={H - top} fill="#0a0b0a" />
      <rect x={px} y={top} width={2} height={H - top} fill="#B8A47A" opacity={0.3} />
      <rect x={0} y={deckY} width={W} height={18} fill="#0a0b0a" />
      <rect x={0} y={deckY + 18} width={W} height={H} fill="#070808" />
      <rect x={0} y={deckY + 18} width={W} height={1} fill="#D9C79E" opacity={0.15} />
    </>
  );
}

function Atrium({ id }: { id: string }) {
  const frames: JSX.Element[] = [];
  const cx = W / 2;
  const cy = H * 0.5;
  for (let i = 0; i < 14; i++) {
    const t = Math.pow(0.8, i);
    const w = W * 1.1 * t;
    const h = H * 1.1 * t;
    const shade = 6 + i * 2;
    frames.push(
      <rect
        key={i}
        x={cx - w / 2}
        y={cy - h / 2}
        width={w}
        height={h}
        fill={`rgb(${shade},${shade + 1},${shade})`}
        stroke="#B8A47A"
        strokeOpacity={0.05 + i * 0.012}
        strokeWidth={1}
      />,
    );
  }
  return (
    <>
      <defs>
        <radialGradient id={`core-${id}`} cx="0.5" cy="0.5" r="0.3">
          <stop offset="0" stopColor="#E6D7B0" stopOpacity="0.28" />
          <stop offset="1" stopColor="#B8A47A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill="#050606" />
      {frames}
      <rect width={W} height={H} fill={`url(#core-${id})`} />
    </>
  );
}
