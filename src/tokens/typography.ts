/**
 * Lighthouse Health Design System - Typography Tokens
 *
 * Design Philosophy:
 * - Clean, professional sans-serif for healthcare credibility
 * - Excellent readability for clinical and data-heavy content
 * - Clear hierarchy supporting "less is more" minimalism
 * - Accessible font sizes meeting WCAG guidelines
 */

export const typography = {
  // Font Families
  fonts: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, Monaco, "Courier New", monospace',
    display: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Font Sizes - Scaled for readability and hierarchy
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights - Optimized for readability
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Text Styles - Pre-composed type scales
  textStyles: {
    // Display - Large headlines
    display: {
      '2xl': {
        fontSize: '4.5rem',      // 72px
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
      },
      xl: {
        fontSize: '3.75rem',     // 60px
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
      },
      lg: {
        fontSize: '3rem',        // 48px
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
      },
      md: {
        fontSize: '2.25rem',     // 36px
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: '-0.025em',
      },
      sm: {
        fontSize: '1.875rem',    // 30px
        fontWeight: 600,
        lineHeight: 1.3,
      },
    },

    // Headings
    heading: {
      h1: {
        fontSize: '2.25rem',     // 36px
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '1.875rem',    // 30px
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.5rem',      // 24px
        fontWeight: 600,
        lineHeight: 1.375,
      },
      h4: {
        fontSize: '1.25rem',     // 20px
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: '1.125rem',    // 18px
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',        // 16px
        fontWeight: 600,
        lineHeight: 1.5,
      },
    },

    // Body text
    body: {
      xl: {
        fontSize: '1.25rem',     // 20px
        fontWeight: 400,
        lineHeight: 1.625,
      },
      lg: {
        fontSize: '1.125rem',    // 18px
        fontWeight: 400,
        lineHeight: 1.625,
      },
      base: {
        fontSize: '1rem',        // 16px
        fontWeight: 400,
        lineHeight: 1.5,
      },
      sm: {
        fontSize: '0.875rem',    // 14px
        fontWeight: 400,
        lineHeight: 1.5,
      },
      xs: {
        fontSize: '0.75rem',     // 12px
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },

    // Labels & UI
    label: {
      lg: {
        fontSize: '0.875rem',    // 14px
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: '0.025em',
        textTransform: 'uppercase' as const,
      },
      base: {
        fontSize: '0.875rem',    // 14px
        fontWeight: 500,
        lineHeight: 1.5,
      },
      sm: {
        fontSize: '0.75rem',     // 12px
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },

    // Code & Data
    code: {
      inline: {
        fontSize: '0.875em',
        fontWeight: 400,
        lineHeight: 1,
      },
      block: {
        fontSize: '0.875rem',    // 14px
        fontWeight: 400,
        lineHeight: 1.625,
      },
    },
  },
} as const;

export type Typography = typeof typography;
