/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fill-white": "#fff",
        "fill-lightest-gray": "#f9f9f9",
        "fill-dark-gray": "#7f7f7f",
        "fill-light-gray": "#e8e8e8",
        "fill-black": "#000",
        darkslategray: {
          "100": "#333",
          "200": "#303030",
          "300": "rgba(51, 51, 51, 0.09)",
        },
        "fill-primary": "#ff642f",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d8d8d8",
        },
        "fill-black": "#000",
      },
      spacing: {},
      fontFamily: {
        "px-regular": "Inter",
        "px-h2": "'Playfair Display'",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "11xl": "30px",
      "5xl": "24px",
      xl: "20px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
