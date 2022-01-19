// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        revealDD: "revealDD .2s forwards ",
        reveal: "reveal .4s forwards ",
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
        reveal: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -30%)",
          },
          "50%": {
            transform: "translate(-50%, -55%)",
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
