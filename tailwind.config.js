/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANSans-M"],
      },
      boxShadow: {
        inputShadow: "0px 0px 10px 0px   rgba(0, 0, 0, 0.1)",
      },

      colors: {
        base: "#13282B",
        primary: "#0A7273",
        secondary: "#3ACAD6",
        darkGray: "#8B9899",
        darkGreen: "#9AB8BA",
        lightGreen: "#DEF9FA",
        white: "#fff",
      },
    },
  },
};
