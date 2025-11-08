/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Healthcare Teal
        primary: {
          50: '#E6F7F7',
          100: '#CCEFEF',
          200: '#99DFDF',
          300: '#66CFCF',
          400: '#33BFBF',
          500: '#1A8B8B', // Main brand color
          600: '#167777',
          700: '#126363',
          800: '#0E4F4F',
          900: '#0A3B3B',
          DEFAULT: '#1A8B8B',
        },
        // Secondary - Sustainable Green
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
        // Accent - Coral/Orange
        accent: {
          50: '#FFF4ED',
          100: '#FFE8DB',
          200: '#FFD1B7',
          300: '#FFBA93',
          400: '#FFA36F',
          500: '#FF8B4B',
          600: '#F77A3A',
          700: '#E96929',
          800: '#D15518',
          900: '#B94107',
          DEFAULT: '#FF8B4B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Consolas',
          'Monaco',
          '"Courier New"',
          'monospace',
        ],
      },
      borderRadius: {
        'sm': '0.375rem',  // 6px
        DEFAULT: '0.5rem',    // 8px
        'md': '0.625rem',     // 10px
        'lg': '0.75rem',      // 12px
        'xl': '1rem',         // 16px
        '2xl': '1.25rem',     // 20px
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
