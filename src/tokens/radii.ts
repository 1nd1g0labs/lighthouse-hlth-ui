/**
 * Lighthouse Health Design System - Border Radius Tokens
 *
 * Design Philosophy:
 * - Modern, soft corners without being overly casual
 * - Professional appearance for healthcare context
 * - Consistent rounding across components
 */

export const radii = {
  none: '0',
  sm: '0.25rem',    // 4px - Subtle rounding
  base: '0.375rem', // 6px - Standard UI elements
  md: '0.5rem',     // 8px - Cards, buttons
  lg: '0.75rem',    // 12px - Larger cards, modals
  xl: '1rem',       // 16px - Hero sections
  '2xl': '1.5rem',  // 24px - Feature cards
  '3xl': '2rem',    // 32px - Large hero elements
  full: '9999px',   // Pills, tags, circular elements
} as const;

export type Radii = typeof radii;
