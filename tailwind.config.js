/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#1F2937",
      secondary: "#1A2937",
      black: "black",
      whitetext: "white",
      graytext: "gray",
    },

    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};
