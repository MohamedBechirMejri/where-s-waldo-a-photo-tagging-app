module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        revealDD: "revealDD .3s  ",
      },
      keyframes: {
        revealDD: {
          "0%": {
            transform: "scale(1, 0)",
          },
          "100%": {
            transform: "scale(1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
