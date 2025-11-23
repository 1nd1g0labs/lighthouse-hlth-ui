/**
 * Lighthouse Health Design System - Color Tokens
 *
 * Version 0.3.0 - Framer Aligned
 *
 * Brand Philosophy:
 * - "Be green, feel green" - Environmental consciousness through sustainable green tones
 * - "Less is more" - Clean, minimalist palette with purposeful color choices
 * - Healthcare trust - Professional blues conveying reliability and stability
 * - Dual sustainability - Financial health (blues) + environmental health (greens)
 *
 * Framer Alignment:
 * This version aligns with the Lighthouse HLTH Framer marketing site as the single source of truth.
 * Design tokens extracted directly from Framer ensure visual consistency across all applications.
 */

export const colors = {
  // ============================================================================
  // PRIMARY - Lighthouse Teal (from Framer /Green)
  // ============================================================================
  // Conveys trust, healing, and environmental stewardship
  // Framer exact: rgb(5, 124, 139) = #057C8B
  primary: {
    50: '#E6F5F7',
    100: '#CCE9EE',
    200: '#99D4DD',
    300: '#66BECC',
    400: '#33A9BB',
    500: '#057C8B',  // MAIN - Framer exact (updated from #1A8B8B)
    600: '#04677A',
    700: '#035268',
    800: '#023C56',
    900: '#012744',
  },

  /**
   * @deprecated Use primary.500 (#057C8B) instead
   * Old primary color kept for migration path only
   */
  primaryOld: '#1A8B8B',

  // ============================================================================
  // ACCENT - Orange (from Framer /Orange)
  // ============================================================================
  // Adds warmth and highlights important actions/data
  // Framer exact: #FF833B
  accent: {
    50: '#FFF4ED',
    100: '#FFE8DB',
    200: '#FFD1B7',
    300: '#FFBA93',
    400: '#FFA36F',
    500: '#FF833B',  // MAIN - Framer exact (updated from #FF8B4B)
    600: '#F77A3A',
    700: '#E96929',
    800: '#D15518',
    900: '#B94107',
  },

  /**
   * @deprecated Use accent.500 (#FF833B) instead
   * Old accent color kept for migration path only
   */
  accentOld: '#FF8B4B',

  // ============================================================================
  // SECONDARY - Sustainable Growth Green
  // ============================================================================
  // Represents environmental stewardship and sustainable practices
  // Kept for backward compatibility
  secondary: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',  // Main secondary
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },

  // ============================================================================
  // NEUTRALS - Framer Exact Color Names
  // ============================================================================
  // Direct mapping from Framer color styles
  black: '#000000',              // Framer /Black
  ashGray: '#7F8082',           // Framer /Ash Gray
  grey: '#D1D1D1',              // Framer /Grey
  white: '#FFFFFF',             // Framer /White
  whiteOff: '#FCFCFC',          // Framer /White off

  // ============================================================================
  // NEUTRAL SCALE - Extended grays for UI
  // ============================================================================
  // Clean, accessible grays for text, backgrounds, and borders
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    1000: '#000000',
  },

  // ============================================================================
  // SEMANTIC COLORS - Feedback & Status
  // ============================================================================
  semantic: {
    success: {
      light: '#D1FAE5',
      main: '#10B981',
      dark: '#047857',
      contrast: '#FFFFFF',
    },
    warning: {
      light: '#FEF3C7',
      main: '#F59E0B',
      dark: '#D97706',
      contrast: '#000000',
    },
    error: {
      light: '#FEE2E2',
      main: '#EF4444',
      dark: '#DC2626',
      contrast: '#FFFFFF',
    },
    info: {
      light: '#DBEAFE',
      main: '#3B82F6',
      dark: '#1D4ED8',
      contrast: '#FFFFFF',
    },
  },

  // ============================================================================
  // DATA VISUALIZATION - For carbon footprint metrics and analytics
  // ============================================================================
  dataViz: {
    emissions: {
      high: '#DC2626',      // High emissions - red
      medium: '#F59E0B',    // Medium emissions - amber
      low: '#10B981',       // Low emissions - green
      neutral: '#6B7280',   // Neutral/baseline - gray
    },
    sustainability: {
      excellent: '#047857',  // Dark green
      good: '#10B981',       // Green
      fair: '#F59E0B',       // Amber
      poor: '#DC2626',       // Red
    },
    chart: [
      '#057C8B',  // Primary teal (updated to Framer)
      '#4CAF50',  // Secondary green
      '#FF833B',  // Accent orange (updated to Framer)
      '#3B82F6',  // Info blue
      '#10B981',  // Success green
      '#F59E0B',  // Warning amber
      '#8B5CF6',  // Purple
      '#EC4899',  // Pink
    ],
  },

  // ============================================================================
  // BACKGROUND GRADIENTS
  // ============================================================================
  gradients: {
    primary: 'linear-gradient(135deg, #057C8B 0%, #035268 100%)',  // Updated to Framer primary
    secondary: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    accent: 'linear-gradient(135deg, #FF833B 0%, #E96929 100%)',  // Updated to Framer accent
    sustainability: 'linear-gradient(135deg, #057C8B 0%, #4CAF50 100%)',  // Updated to Framer primary
    subtle: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
  },
} as const;

export type Colors = typeof colors;

/**
 * MIGRATION NOTES:
 *
 * v0.3.0 introduces Framer-aligned colors:
 * - Primary teal: #1A8B8B → #057C8B
 * - Accent orange: #FF8B4B → #FF833B
 * - New neutral colors: black, ashGray, grey, white, whiteOff
 *
 * Deprecated colors are kept for backward compatibility.
 * Update your components gradually:
 * - OLD: colors.primary[500] = '#1A8B8B'
 * - NEW: colors.primary[500] = '#057C8B'
 *
 * See MIGRATION.md for complete guide.
 */
