/**
 * Lighthouse Health Design System - Shadow Tokens
 *
 * Design Philosophy:
 * - Subtle elevation for depth without distraction
 * - Professional appearance supporting healthcare credibility
 * - "Less is more" - purposeful use of shadows
 */

export const shadows = {
  none: 'none',

  // Standard elevation shadows
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Inner shadows for inputs/inset elements
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',

  // Focused state shadows (with brand colors)
  focus: {
    primary: '0 0 0 3px rgb(0 112 224 / 0.15)',
    secondary: '0 0 0 3px rgb(76 175 80 / 0.15)',
    error: '0 0 0 3px rgb(239 68 68 / 0.15)',
  },

  // Semantic shadows for specific UI patterns
  card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  cardHover: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  dropdown: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  tooltip: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
} as const;

export type Shadows = typeof shadows;
