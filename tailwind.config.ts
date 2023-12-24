import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--alice-blue-2))",
        input: "hsl(var(--alice-blue-2))",
        ring: "hsl(var(--azure))",
        background: "hsl(var(--ghost-white))",
        foreground: "hsl(var(--oxford-blue))",
        primary: {
          DEFAULT: "hsl(var(--azure))",
          foreground: "hsl(var(--white))",
        },
        secondary: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--oxford-blue))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--white))",
        },
        muted: {
          DEFAULT: "hsl(var(--alice-blue))",
          foreground: "hsl(var(--delft-blue))",
        },
        accent: {
          DEFAULT: "hsl(var(--alice-blue))",
          foreground: "hsl(var(--oxford-blue))",
        },
        popover: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--oxford-blue))",
        },
        card: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--oxford-blue))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
