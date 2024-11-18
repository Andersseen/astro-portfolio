/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sixcaps: ["SixCaps", "sans-serif"],
      },
      colors: {
        primary: "#110903",
        secondary: "#fcefde",
      },
    },
    variants: {
      extend: {
        boxShadow: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
