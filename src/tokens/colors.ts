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
  // Primary - Healthcare Teal
  // Conveys trust, healing, and environmental stewardship
  // Brand color from lighthousehlth.com
  primary: {
    50: '#E6F7F7',
    100: '#CCEFEF',
    200: '#99DFDF',
    300: '#66CFCF',
    400: '#33BFBF',
    500: '#1A8B8B',  // Main primary - Brand teal
    600: '#167777',
    700: '#126363',
    800: '#0E4F4F',
    900: '#0A3B3B',
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

  // Accent - Coral/Orange for warmth and CTAs
  // Adds warmth and highlights important actions/data
  // Seen in action plan UI elements
  accent: {
    50: '#FFF4ED',
    100: '#FFE8DB',
    200: '#FFD1B7',
    300: '#FFBA93',
    400: '#FFA36F',
    500: '#FF8B4B',  // Main accent - warmer coral-orange
    600: '#F77A3A',
    700: '#E96929',
    800: '#D15518',
    900: '#B94107',
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
      '#1A8B8B',  // Primary teal
      '#4CAF50',  // Secondary green
      '#FF8B4B',  // Accent coral-orange
      '#3B82F6',  // Info blue
      '#10B981',  // Success green
      '#F59E0B',  // Warning amber
      '#8B5CF6',  // Purple
      '#EC4899',  // Pink
    ],
  },

  // Background gradients
  gradients: {
    primary: 'linear-gradient(135deg, #1A8B8B 0%, #126363 100%)',
    secondary: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    accent: 'linear-gradient(135deg, #FF8B4B 0%, #E96929 100%)',
    sustainability: 'linear-gradient(135deg, #1A8B8B 0%, #4CAF50 100%)',
    subtle: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
  },
} as const;

export type Colors = typeof colors;
