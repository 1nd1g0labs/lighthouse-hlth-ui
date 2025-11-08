/**
 * Lighthouse Health Design System - Color Tokens
 *
 * Brand Philosophy:
 * - "Be green, feel green" - Environmental consciousness through sustainable green tones
 * - "Less is more" - Clean, minimalist palette with purposeful color choices
 * - Healthcare trust - Professional blues conveying reliability and stability
 * - Dual sustainability - Financial health (blues) + environmental health (greens)
 */

export const colors = {
  // Primary - Healthcare Trust Blue
  // Conveys professionalism, reliability, and clinical trust
  primary: {
    50: '#E6F2FF',
    100: '#CCE5FF',
    200: '#99CBFF',
    300: '#66B0FF',
    400: '#3396FF',
    500: '#0070E0',  // Main primary
    600: '#005DB8',
    700: '#004A90',
    800: '#003768',
    900: '#002440',
  },

  // Secondary - Sustainable Growth Green
  // Represents environmental stewardship and sustainable practices
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

  // Accent - Energy & Innovation
  // Adds warmth and highlights important actions/data
  accent: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',  // Main accent
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },

  // Neutrals - Foundation
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

  // Semantic Colors - Feedback & Status
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

  // Data Visualization - For carbon footprint metrics and analytics
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
      '#0070E0',  // Primary blue
      '#4CAF50',  // Secondary green
      '#FF9800',  // Accent orange
      '#3B82F6',  // Info blue
      '#10B981',  // Success green
      '#F59E0B',  // Warning amber
      '#8B5CF6',  // Purple
      '#EC4899',  // Pink
    ],
  },

  // Background gradients
  gradients: {
    primary: 'linear-gradient(135deg, #0070E0 0%, #005DB8 100%)',
    secondary: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    accent: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
    sustainability: 'linear-gradient(135deg, #0070E0 0%, #4CAF50 100%)',
    subtle: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
  },
} as const;

export type Colors = typeof colors;
