/**
 * SVG Pattern Generators for ServiceCard Backgrounds
 *
 * These patterns create subtle, abstract visual interest without
 * competing with the data-driven content. All patterns are designed
 * to work as data URL backgrounds.
 */

export type PatternType = 'dots' | 'grid' | 'waves' | 'molecules' | 'circuit' | 'hexagon';

export interface PatternOptions {
  /**
   * Primary color for the pattern
   * @default '#1A8B8B'
   */
  color?: string;

  /**
   * Opacity of the pattern
   * @default 0.1
   */
  opacity?: number;

  /**
   * Scale factor for the pattern
   * @default 1
   */
  scale?: number;
}

/**
 * Dots pattern - Simple circular dots in a grid
 * Best for: Energy, facilities, general use
 */
export function createDotsPattern({
  color = '#1A8B8B',
  opacity = 0.1,
  scale = 1,
}: PatternOptions = {}): string {
  const size = 20 * scale;
  const dotSize = 2 * scale;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${dotSize}" fill="${color}" opacity="${opacity}" />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Grid pattern - Clean orthogonal grid lines
 * Best for: Compliance, reporting, structured data
 */
export function createGridPattern({
  color = '#1A8B8B',
  opacity = 0.08,
  scale = 1,
}: PatternOptions = {}): string {
  const size = 40 * scale;
  const strokeWidth = 1 * scale;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 0 L 0 ${size} M 0 0 L ${size} 0" stroke="${color}" stroke-width="${strokeWidth}" opacity="${opacity}" fill="none" />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Waves pattern - Flowing sinusoidal curves
 * Best for: Water management, fluid dynamics
 */
export function createWavesPattern({
  color = '#1A8B8B',
  opacity = 0.1,
  scale = 1,
}: PatternOptions = {}): string {
  const width = 100 * scale;
  const height = 20 * scale;
  const amplitude = 5 * scale;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 0 ${height / 2} Q ${width / 4} ${height / 2 - amplitude}, ${width / 2} ${height / 2} T ${width} ${height / 2}"
        stroke="${color}"
        stroke-width="${scale * 2}"
        opacity="${opacity}"
        fill="none"
      />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Molecules pattern - Connected dots representing molecular bonds
 * Best for: Carbon intelligence, chemical/environmental themes
 */
export function createMoleculesPattern({
  color = '#1A8B8B',
  opacity = 0.12,
  scale = 1,
}: PatternOptions = {}): string {
  const size = 60 * scale;
  const dotSize = 2.5 * scale;
  const lineWidth = 1 * scale;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${size * 0.2}" y1="${size * 0.2}" x2="${size * 0.8}" y2="${size * 0.2}" stroke="${color}" stroke-width="${lineWidth}" opacity="${opacity * 0.6}" />
      <line x1="${size * 0.8}" y1="${size * 0.2}" x2="${size * 0.8}" y2="${size * 0.8}" stroke="${color}" stroke-width="${lineWidth}" opacity="${opacity * 0.6}" />
      <line x1="${size * 0.8}" y1="${size * 0.8}" x2="${size * 0.2}" y2="${size * 0.8}" stroke="${color}" stroke-width="${lineWidth}" opacity="${opacity * 0.6}" />
      <circle cx="${size * 0.2}" cy="${size * 0.2}" r="${dotSize}" fill="${color}" opacity="${opacity}" />
      <circle cx="${size * 0.8}" cy="${size * 0.2}" r="${dotSize}" fill="${color}" opacity="${opacity}" />
      <circle cx="${size * 0.8}" cy="${size * 0.8}" r="${dotSize}" fill="${color}" opacity="${opacity}" />
      <circle cx="${size * 0.2}" cy="${size * 0.8}" r="${dotSize}" fill="${color}" opacity="${opacity}" />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Circuit pattern - Tech-inspired circuit board design
 * Best for: Technology, optimization, automation
 */
export function createCircuitPattern({
  color = '#1A8B8B',
  opacity = 0.1,
  scale = 1,
}: PatternOptions = {}): string {
  const size = 80 * scale;
  const lineWidth = 1.5 * scale;
  const dotSize = 2 * scale;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 ${size / 2} L ${size / 3} ${size / 2} L ${size / 3} ${size / 4} L ${size * 2 / 3} ${size / 4} L ${size * 2 / 3} ${size * 3 / 4}"
        stroke="${color}" stroke-width="${lineWidth}" opacity="${opacity}" fill="none" />
      <circle cx="${size / 3}" cy="${size / 2}" r="${dotSize}" fill="${color}" opacity="${opacity * 1.2}" />
      <circle cx="${size / 3}" cy="${size / 4}" r="${dotSize}" fill="${color}" opacity="${opacity * 1.2}" />
      <circle cx="${size * 2 / 3}" cy="${size / 4}" r="${dotSize}" fill="${color}" opacity="${opacity * 1.2}" />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Hexagon pattern - Honeycomb-inspired geometric pattern
 * Best for: Supply chain, networks, interconnected systems
 */
export function createHexagonPattern({
  color = '#1A8B8B',
  opacity = 0.08,
  scale = 1,
}: PatternOptions = {}): string {
  const width = 50 * scale;
  const height = 43.3 * scale; // sqrt(3)/2 * width for proper hexagon spacing
  const strokeWidth = 1.5 * scale;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M ${width * 0.25} 0 L ${width * 0.75} 0 L ${width} ${height / 2} L ${width * 0.75} ${height} L ${width * 0.25} ${height} L 0 ${height / 2} Z"
        stroke="${color}"
        stroke-width="${strokeWidth}"
        opacity="${opacity}"
        fill="none"
      />
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

/**
 * Get pattern by type
 */
export function getPattern(type: PatternType, options?: PatternOptions): string {
  switch (type) {
    case 'dots':
      return createDotsPattern(options);
    case 'grid':
      return createGridPattern(options);
    case 'waves':
      return createWavesPattern(options);
    case 'molecules':
      return createMoleculesPattern(options);
    case 'circuit':
      return createCircuitPattern(options);
    case 'hexagon':
      return createHexagonPattern(options);
    default:
      return createDotsPattern(options);
  }
}
