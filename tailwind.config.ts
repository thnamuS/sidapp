import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0000ff",

          "primary-content": "#c6dbff",

          secondary: "#009600",

          "secondary-content": "#000800",

          accent: "#009b00",

          "accent-content": "#000900",

          neutral: "#ffffff",

          "neutral-content": "#000000",

          "base-100": "#fff5ee",

          "base-200": "#ded5cf",

          "base-300": "#beb6b1",

          "base-content": "#161514",

          info: "#009fff",

          "info-content": "#000916",

          success: "#7ad633",

          "success-content": "#051001",

          warning: "#ff8e00",

          "warning-content": "#160700",

          error: "#ff6467",

          "error-content": "#160304",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
