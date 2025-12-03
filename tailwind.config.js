/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY - Lighthouse Teal (from Framer /Green)
        primary: {
          50: '#E6F5F7',
          100: '#CCE9EE',
          200: '#99D4DD',
          300: '#66BECC',
          400: '#33A9BB',
          500: '#057C8B',  // MAIN - Framer exact (rgb(5, 124, 139))
          600: '#04677A',
          700: '#035268',
          800: '#023C56',
          900: '#012744',
          DEFAULT: '#057C8B',
        },
        // DEPRECATED: Old primary color for migration path
        // @deprecated Use primary-500 (#057C8B) instead - Framer alignment
        'primary-old': '#1A8B8B',

        // ACCENT - Orange (from Framer /Orange)
        accent: {
          50: '#FFF4ED',
          100: '#FFE8DB',
          200: '#FFD1B7',
          300: '#FFBA93',
          400: '#FFA36F',
          500: '#FF833B',  // MAIN - Framer exact
          600: '#F77A3A',
          700: '#E96929',
          800: '#D15518',
          900: '#B94107',
          DEFAULT: '#FF833B',
        },
        // DEPRECATED: Old accent color
        // @deprecated Use accent-500 (#FF833B) instead - Framer alignment
        'accent-old': '#FF8B4B',

        // SECONDARY - Sustainable Green (kept for backward compatibility)
        secondary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
          DEFAULT: '#4CAF50',
        },

        // NEUTRALS - Framer exact color names
        black: '#000000',              // Framer /Black
        'ash-gray': '#7F8082',         // Framer /Ash Gray
        grey: '#D1D1D1',               // Framer /Grey
        white: '#FFFFFF',              // Framer /White
        'white-off': '#FCFCFC',        // Framer /White off

        // NEUTRAL SCALE - Extended grays for backward compatibility
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

        // SEMANTIC COLORS - Feedback & Status
        success: {
          light: '#D1FAE5',
          main: '#10B981',
          dark: '#047857',
          DEFAULT: '#10B981',
        },
        warning: {
          light: '#FEF3C7',
          main: '#F59E0B',
          dark: '#D97706',
          DEFAULT: '#F59E0B',
        },
        error: {
          light: '#FEE2E2',
          main: '#EF4444',
          dark: '#DC2626',
          DEFAULT: '#EF4444',
        },
        info: {
          light: '#DBEAFE',
          main: '#3B82F6',
          dark: '#1D4ED8',
          DEFAULT: '#3B82F6',
        },

        // GHG EMISSION CATEGORIES - Healthcare Sustainability
        // WCAG 2.1 AA compliant color palette for emission tracking
        scope1: {
          DEFAULT: '#D97706',       // Amber-600 - Direct emissions (on-site fuel, vehicles)
          light: '#FCD34D',         // Amber-300 - Light variant
          dark: '#B45309',          // Amber-700 - Dark variant
          bg: '#FEF3C7',            // Amber-100 - Background tint
          border: '#F59E0B',        // Amber-500 - Border
        },
        scope2: {
          DEFAULT: '#2563EB',       // Blue-600 - Energy/electricity emissions
          light: '#60A5FA',         // Blue-400 - Light variant
          dark: '#1E40AF',          // Blue-700 - Dark variant
          bg: '#DBEAFE',            // Blue-100 - Background tint
          border: '#3B82F6',        // Blue-500 - Border
        },
        scope3: {
          DEFAULT: '#0D9488',       // Teal-600 - Supply chain emissions
          light: '#5EEAD4',         // Teal-300 - Light variant
          dark: '#115E59',          // Teal-700 - Dark variant
          bg: '#CCFBF1',            // Teal-100 - Background tint
          border: '#14B8A6',        // Teal-500 - Border
        },
        waste: {
          DEFAULT: '#059669',       // Emerald-600 - Waste management
          light: '#6EE7B7',         // Emerald-300 - Light variant
          dark: '#047857',          // Emerald-700 - Dark variant
          bg: '#D1FAE5',            // Emerald-100 - Background tint
          border: '#10B981',        // Emerald-500 - Border
        },
      },

      fontFamily: {
        // Option B: Inter for everything (font fallback strategy)
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'Monaco', '"Courier New"', 'monospace'],
      },

      fontSize: {
        // Framer Typography Scale - Headings
        'h1': ['54px', { lineHeight: '1.2em', letterSpacing: '-0.045em' }],    // Framer /Heading xl
        'h2': ['42px', { lineHeight: '1.25em', letterSpacing: '-0.04em' }],    // Framer /Heading l
        'h3': ['38px', { lineHeight: '1.25em', letterSpacing: '-0.03em' }],    // Framer /Heading m
        'h4': ['32px', { lineHeight: '1.3em', letterSpacing: '-0.025em' }],    // Framer /Heading s
        'h5': ['28px', { lineHeight: '1.35em', letterSpacing: '-0.02em' }],    // Framer /Heading xs
        'h6': ['24px', { lineHeight: '1.4em', letterSpacing: '-0.015em' }],    // Framer /Heading xxs

        // Framer Typography Scale - Body
        'body-xl': ['20px', { lineHeight: '1.5em', letterSpacing: '0em' }],    // Framer /Paragraph xl
        'body-lg': ['18px', { lineHeight: '1.55em', letterSpacing: '0em' }],   // Framer /Paragraph l
        'body': ['16px', { lineHeight: '1.6em', letterSpacing: '0em' }],       // Framer /Paragraph m (default)
        'body-sm': ['14px', { lineHeight: '1.65em', letterSpacing: '0em' }],   // Framer /Paragraph s

        // Standard Tailwind sizes (for backward compatibility)
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
        '7xl': '4.5rem',      // 72px
      },

      lineHeight: {
        // Framer-exact line heights
        'h1': '1.2em',
        'h2': '1.25em',
        'h3': '1.25em',
        'h4': '1.3em',
        'h5': '1.35em',
        'h6': '1.4em',
        'body-xl': '1.5em',
        'body-lg': '1.55em',
        'body': '1.6em',
        'body-sm': '1.65em',

        // Standard values (backward compatibility)
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },

      letterSpacing: {
        // Framer-exact letter spacing
        'h1': '-0.045em',
        'h2': '-0.04em',
        'h3': '-0.03em',
        'h4': '-0.025em',
        'h5': '-0.02em',
        'h6': '-0.015em',
        'body': '0em',

        // Standard values (backward compatibility)
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },

      borderRadius: {
        'none': '0',
        'sm': '0.375rem',     // 6px
        DEFAULT: '0.5rem',    // 8px
        'md': '0.625rem',     // 10px
        'lg': '0.75rem',      // 12px
        'xl': '1rem',         // 16px
        '2xl': '1.25rem',     // 20px
        'full': '999px',      // Framer button style (pill shape)
      },

      spacing: {
        // Framer-specific gaps and spacing
        '0.5': '0.125rem',   // 2px
        '1.25': '0.3125rem', // 5px - Framer gap
        '1.75': '0.4375rem', // 7px - Framer gap
        '2.25': '0.5625rem', // 9px - Framer gap

        // Standard spacing scale (backward compatibility)
        '0': '0',
        '1': '0.25rem',      // 4px
        '1.5': '0.375rem',   // 6px
        '2': '0.5rem',       // 8px
        '2.5': '0.625rem',   // 10px
        '3': '0.75rem',      // 12px
        '3.5': '0.875rem',   // 14px
        '4': '1rem',         // 16px
        '5': '1.25rem',      // 20px
        '6': '1.5rem',       // 24px
        '7': '1.75rem',      // 28px
        '8': '2rem',         // 32px
        '9': '2.25rem',      // 36px
        '10': '2.5rem',      // 40px
        '11': '2.75rem',     // 44px
        '12': '3rem',        // 48px
        '14': '3.5rem',      // 56px
        '16': '4rem',        // 64px
        '20': '5rem',        // 80px
        '24': '6rem',        // 96px
        '28': '7rem',        // 112px
        '32': '8rem',        // 128px
        '36': '9rem',        // 144px
        '40': '10rem',       // 160px
        '44': '11rem',       // 176px
        '48': '12rem',       // 192px
        '52': '13rem',       // 208px
        '56': '14rem',       // 224px
        '60': '15rem',       // 240px
        '64': '16rem',       // 256px
        '72': '18rem',       // 288px
        '80': '20rem',       // 320px
        '96': '24rem',       // 384px
      },

      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 2px 8px 0 rgb(0 0 0 / 0.08)',
        'md': '0 4px 12px 0 rgb(0 0 0 / 0.10)',
        'lg': '0 8px 24px 0 rgb(0 0 0 / 0.12)',
        'xl': '0 12px 32px 0 rgb(0 0 0 / 0.15)',
      },

      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out',
        'slide-in-top': 'slideInTop 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
