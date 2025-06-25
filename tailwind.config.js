// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#800000",
        accent: "#FFD700",
        background: "#FFF8F0",
        textheading: "#2C1B18",
      },
    },
  },
  plugins: [],
};
