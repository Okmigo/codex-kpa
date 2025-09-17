import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E88E5",
          hover: "#1976D2",
        },
        accent: {
          DEFAULT: "#43A047",
          hover: "#388E3C",
        },
        warn: {
          DEFAULT: "#E53935",
          hover: "#D32F2F",
        },
        ink: "#111827",
        "ink-muted": "#475569",
        bg: "#FFFFFF",
        "bg-subtle": "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
