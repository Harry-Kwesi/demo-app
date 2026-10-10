/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D0C',
        'ink-2': '#1A1C1B',
        paper: '#F3F1EB',
        stone: '#EDEBE4',
        // Neutral surfaces for the light, high-contrast layout.
        surface: '#F5F5F2',
        line: '#DEDDD8',
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
        hero: ['clamp(44px, 6.4vw, 104px)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        display: ['clamp(36px, 4.4vw, 68px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        headline: ['clamp(28px, 3vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        title: ['clamp(20px, 1.7vw, 26px)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        eyebrow: ['12px', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
