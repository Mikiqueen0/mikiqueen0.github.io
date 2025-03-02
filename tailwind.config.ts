import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '375px',
      },
      keyframes: {
        slide: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '-100% 50%' },
        },
      },
      animation: {
        gradientIn: 'slide 0.5s ease 0s 1 normal forwards',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
} satisfies Config;
