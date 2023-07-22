import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}'
  ],

  theme: {
    container: {
      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
      padding: {
        DEFAULT: '1.5rem',
        // sm: '2rem',
        // lg: '4rem',
        xl: '2.5rem',
        // '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        howbg: `url('/images/howbgn.svg')`
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        modal: '0px 2.767256498336792px 2.2138051986694336px 0px rgba(0, 0, 0, 0.04), 0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.06), 0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.07), 0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.08), 0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.10), 0px 100px 80px 0px rgba(0, 0, 0, 0.14)',
        pbtn: '0px 4px 13px 0px rgba(137, 26, 105, 0.75)'
      },
      colors: {
        zink: {
          500: "#9D638E",
          800: "#2E2E2E",
        },
        neutral: {
          700: "#69696f",
          700: "#343434",
          800: "#252525",
          900: "#000000"
        },
        pink: {
          100: "#F8DEF0",
          800: "#9F2B5F",
          950: "#3E0730"
        },
        fuchsia: {
          800: "#8F3278"
        },
        rose: {
          600: "#D8173B",
          700: "#D61134"
        },
        stone: {
          400: "#AC8797",
          500: "#686868"
        },
        violet: {
          100: "#EDEBF6"
        }
      }
    },
  },

  plugins: [forms],
};
