export const THEME = {
  colors: {
    background: '#050816',
    foreground: '#F5F7FA',

    primary: '#38FF9C',
    secondary: '#121A30',

    accent: '#72FFBF',

    pitch: {
      primary: '#0D5F33',
      secondary: '#1EA85D',
      line: 'rgba(255,255,255,0.1)',
    },

    heatmap: {
      low: '#38FF9C',
      medium: '#D9FF3F',
      high: '#FF6B3D',
    },
  },

  radius: {
    sm: '8px',
    md: '14px',
    lg: '22px',
    xl: '30px',
  },

  shadows: {
    soft: '0px 8px 30px rgba(0,0,0,0.22)',

    card: '0px 12px 40px rgba(0,0,0,0.35)',

    glow: '0px 0px 30px rgba(56,255,156,0.18)',
  },
} as const
