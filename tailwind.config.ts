import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)', 'sans-serif'],
      },
      screens: {
        'mobile': {'max': '639px'},
        'tablet': {'max': '1023px'},
        'laptop': {'min': '1279px'},
        'desktop': {'max': '1535px'},
        'ultra': {'max': '1920px'},
      },
    },
  },
  plugins: [],
} satisfies Config;