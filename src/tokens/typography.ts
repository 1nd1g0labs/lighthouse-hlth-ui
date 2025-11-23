/**
 * Lighthouse Health Design System - Typography Tokens
 *
 * Version 0.3.0 - Framer Aligned
 *
 * Design Philosophy:
 * - Clean, professional sans-serif for healthcare credibility
 * - Excellent readability for clinical and data-heavy content
 * - Clear hierarchy supporting "less is more" minimalism
 * - Accessible font sizes meeting WCAG guidelines
 *
 * Framer Alignment:
 * Typography scale extracted from Framer text styles ensures consistency with marketing site.
 * Font Family Strategy: Inter for all text (Option B - font fallback approach)
 */

export const typography = {
  // ============================================================================
  // FONT FAMILIES
  // ============================================================================
  // Option B: Inter for everything (fallback strategy)
  // Framer uses InterDisplay + Satoshi, but we use Inter universally for simplicity
  fonts: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, Monaco, "Courier New", monospace',
    display: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // ============================================================================
  // FONT SIZES - Framer Typography Scale
  // ============================================================================
  // Exact values from Framer text styles
  fontSize: {
    // Framer Headings (h1-h6)
    h1: '54px',      // Framer /Heading xl
    h2: '42px',      // Framer /Heading l
    h3: '38px',      // Framer /Heading m
    h4: '32px',      // Framer /Heading s
    h5: '28px',      // Framer /Heading xs
    h6: '24px',      // Framer /Heading xxs

    // Framer Body/Paragraph
    bodyXl: '20px',  // Framer /Paragraph xl
    bodyLg: '18px',  // Framer /Paragraph l
    body: '16px',    // Framer /Paragraph m (default)
    bodySm: '14px',  // Framer /Paragraph s

    // Standard Tailwind sizes (backward compatibility)
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

  // ============================================================================
  // FONT WEIGHTS
  // ============================================================================
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // ============================================================================
  // LINE HEIGHTS - Framer Exact
  // ============================================================================
  lineHeight: {
    // Framer heading line heights
    h1: '1.2em',     // Framer /Heading xl
    h2: '1.25em',    // Framer /Heading l
    h3: '1.25em',    // Framer /Heading m
    h4: '1.3em',     // Framer /Heading s
    h5: '1.35em',    // Framer /Heading xs
    h6: '1.4em',     // Framer /Heading xxs

    // Framer body line heights
    bodyXl: '1.5em',   // Framer /Paragraph xl
    bodyLg: '1.55em',  // Framer /Paragraph l
    body: '1.6em',     // Framer /Paragraph m
    bodySm: '1.65em',  // Framer /Paragraph s

    // Standard values (backward compatibility)
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // ============================================================================
  // LETTER SPACING - Framer Exact
  // ============================================================================
  letterSpacing: {
    // Framer heading letter spacing (negative for tighter)
    h1: '-0.045em',   // Framer /Heading xl
    h2: '-0.04em',    // Framer /Heading l
    h3: '-0.03em',    // Framer /Heading m
    h4: '-0.025em',   // Framer /Heading s
    h5: '-0.02em',    // Framer /Heading xs
    h6: '-0.015em',   // Framer /Heading xxs

    // Framer body letter spacing
    body: '0em',      // Framer /Paragraph (all sizes)

    // Standard values (backward compatibility)
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // ============================================================================
  // TEXT STYLES - Pre-composed type scales
  // ============================================================================
  // Framer-aligned text styles with exact specifications
  textStyles: {
    // ========================================
    // Framer Headings
    // ========================================
    heading: {
      xl: {
        // Framer /Heading xl
        fontSize: '54px',
        fontWeight: 600,
        lineHeight: '1.2em',
        letterSpacing: '-0.045em',
        fontFamily: 'Inter',
      },
      l: {
        // Framer /Heading l
        fontSize: '42px',
        fontWeight: 600,
        lineHeight: '1.25em',
        letterSpacing: '-0.04em',
        fontFamily: 'Inter',
      },
      m: {
        // Framer /Heading m
        fontSize: '38px',
        fontWeight: 600,
        lineHeight: '1.25em',
        letterSpacing: '-0.03em',
        fontFamily: 'Inter',
      },
      s: {
        // Framer /Heading s
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '1.3em',
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      xs: {
        // Framer /Heading xs
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '1.35em',
        letterSpacing: '-0.02em',
        fontFamily: 'Inter',
      },
      xxs: {
        // Framer /Heading xxs
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '1.4em',
        letterSpacing: '-0.015em',
        fontFamily: 'Inter',
      },

      // Aliases matching h1-h6
      h1: {
        fontSize: '54px',
        fontWeight: 600,
        lineHeight: '1.2em',
        letterSpacing: '-0.045em',
        fontFamily: 'Inter',
      },
      h2: {
        fontSize: '42px',
        fontWeight: 600,
        lineHeight: '1.25em',
        letterSpacing: '-0.04em',
        fontFamily: 'Inter',
      },
      h3: {
        fontSize: '38px',
        fontWeight: 600,
        lineHeight: '1.25em',
        letterSpacing: '-0.03em',
        fontFamily: 'Inter',
      },
      h4: {
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '1.3em',
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      h5: {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '1.35em',
        letterSpacing: '-0.02em',
        fontFamily: 'Inter',
      },
      h6: {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '1.4em',
        letterSpacing: '-0.015em',
        fontFamily: 'Inter',
      },
    },

    // ========================================
    // Framer Paragraphs/Body
    // ========================================
    body: {
      xl: {
        // Framer /Paragraph xl
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '1.5em',
        letterSpacing: '0em',
        fontFamily: 'Inter',
      },
      lg: {
        // Framer /Paragraph l
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '1.55em',
        letterSpacing: '0em',
        fontFamily: 'Inter',
      },
      base: {
        // Framer /Paragraph m (default)
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.6em',
        letterSpacing: '0em',
        fontFamily: 'Inter',
      },
      sm: {
        // Framer /Paragraph s
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '1.65em',
        letterSpacing: '0em',
        fontFamily: 'Inter',
      },
      xs: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '1.5em',
        fontFamily: 'Inter',
      },
    },

    // ========================================
    // Labels & UI (kept for backward compatibility)
    // ========================================
    label: {
      lg: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '1.5em',
        letterSpacing: '0.025em',
        textTransform: 'uppercase' as const,
        fontFamily: 'Inter',
      },
      base: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1.5em',
        fontFamily: 'Inter',
      },
      sm: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '1.5em',
        fontFamily: 'Inter',
      },
    },

    // ========================================
    // Code & Data (kept for backward compatibility)
    // ========================================
    code: {
      inline: {
        fontSize: '0.875em',
        fontWeight: 400,
        lineHeight: 1,
      },
      block: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '1.625em',
      },
    },

    // ========================================
    // Display - Large headlines (kept for backward compatibility)
    // ========================================
    display: {
      '2xl': {
        fontSize: '72px',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      xl: {
        fontSize: '60px',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      lg: {
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      md: {
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: '-0.025em',
        fontFamily: 'Inter',
      },
      sm: {
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: 1.3,
        fontFamily: 'Inter',
      },
    },
  },
} as const;

export type Typography = typeof typography;

/**
 * FRAMER TEXT STYLE MAPPINGS:
 *
 * Framer Style → Token
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * /Heading xl    → typography.textStyles.heading.xl  (54px, -0.045em)
 * /Heading l     → typography.textStyles.heading.l   (42px, -0.04em)
 * /Heading m     → typography.textStyles.heading.m   (38px, -0.03em)
 * /Heading s     → typography.textStyles.heading.s   (32px, -0.025em)
 * /Heading xs    → typography.textStyles.heading.xs  (28px, -0.02em)
 * /Heading xxs   → typography.textStyles.heading.xxs (24px, -0.015em)
 *
 * /Paragraph xl  → typography.textStyles.body.xl     (20px, 1.5em)
 * /Paragraph l   → typography.textStyles.body.lg     (18px, 1.55em)
 * /Paragraph m   → typography.textStyles.body.base   (16px, 1.6em)
 * /Paragraph s   → typography.textStyles.body.sm     (14px, 1.65em)
 *
 * USAGE IN TAILWIND:
 * - text-h1, text-h2, text-h3, text-h4, text-h5, text-h6
 * - text-body-xl, text-body-lg, text-body, text-body-sm
 * - leading-h1, leading-h2, etc.
 * - tracking-h1, tracking-h2, etc.
 *
 * MIGRATION NOTES:
 * v0.3.0 introduces Framer-aligned typography with exact font sizes,
 * line heights, and letter spacing from the marketing site.
 * All fonts now use Inter (Option B - fallback strategy).
 */
