/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D0C',
        'ink-2': '#141715',
        paper: '#F3F1EB',
        stone: '#EDEBE4',
        mute: '#A5A49E',
        // Darker muted tone for small text on light backgrounds (WCAG AA).
        'mute-deep': '#5F5E58',
        gold: '#B8A47A',
        // Darker champagne for small text on light backgrounds (WCAG AA).
        'gold-deep': '#7A6842',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(56px, 8vw, 130px)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        display: ['clamp(44px, 6vw, 96px)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        headline: ['clamp(32px, 4vw, 64px)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        title: ['clamp(24px, 2.4vw, 38px)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        eyebrow: ['11px', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        site: '1600px',
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
