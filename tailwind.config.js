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
        firstColor: "#F4F6F8",
        secondColor: "#000",
        thirdColor: "#5964E0",
        fourthColor: "#6E8098",
        fifthColor: "#19202D",
				sixthColor: "#5964E0",
				gray1: "#6E8098",
				gray2: "#979797"
      },
			screens: {
				'xs': '340px'
			}
    },
  },
  plugins: [],
};
