/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header": "url(/images/mobile/bg-pattern-header.svg)",
      },
      colors: {
        violet: "#5964E0",
      },
    },
  },
  plugins: [],
};
