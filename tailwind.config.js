module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        revealDD: "revealDD .2s forwards ",
      },
      keyframes: {
        revealDD: {
          "0%": {
            opacity: 0,
            transform: "translate(0, -50%)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
