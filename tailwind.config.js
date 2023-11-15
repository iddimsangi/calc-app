/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "hsl(222, 26%, 31%)",
        toggleBackground: "hsl(223, 31%, 20%)",
        keypadBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackground: "hsl(225, 21%, 49%)",
        keyShadow: "hsl(224, 28%, 35%)",
        redKeyBackground: "hsl(6, 63%, 50%)",
        redKeyShadow: "hsl(6, 70%, 34%)",
        lightGrayishOrangeKeyBackground: "hsl(30, 25%, 89%)",
        grayishOrangeKeyShadow: "hsl(28, 16%, 65%)",
        veryDarkGrayishBlueText: "hsl(221, 14%, 31%)",
        whiteText: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
